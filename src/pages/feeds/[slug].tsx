import { FEEDS, getFeed } from "../../lib/rss";
import { format, formatDistance } from "date-fns";

export default function Feed({ feed, items }: any) {

  console.log(items)

  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{feed.logo ? <img className="w-32 mx-auto" src={feed.logo} /> : feed.title + " feed"} </h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {items.map((item: any) => {
            return (
              <div key={item.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                {feed.slug === "vg" && <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={item.enclosure?.url} alt="" />
                </div>}
                
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={item.link} className="hover:underline">
                        {feed.slug === "vg" && item.categories}
                        {feed.slug === "nrk" && item.categories?.map((category : any, idx: number) => 
                          {
                            let res = category.toString();
                            if(idx < item.categories.length - 1)
                              res = res + ", ";
                            return res;
                          })}
                      </a>
                    </p>
                    <a href={item.link} className="block mt-2">
                      <p className="text-xl font-semibold text-gray-900">{item.title}</p>
                      <p className="mt-3 text-base text-gray-500">{item.content}</p>
                    </a>
                  </div>
                </div>
                {/* 
                <div className="mt-2 mb-3 flex items-center">
                  <div className="ml-3">
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={format(new Date(item.isoDate), "PPP")}>{formatDistance(new Date(item.isoDate), new Date())} ago</time>
                    </div>
                  </div>
                </div> */}
              </div>
        )})}
      </div>
    </div>
    </div >
  );
}

export async function getStaticPaths() {
  return {
    paths: FEEDS.map((feed) => ({ params: { slug: feed.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const feed = FEEDS.find((feed) => feed.slug === params.slug);
  const detailedFeed = await getFeed(feed?.url);

  return {
    props: {
      feed,
      items: detailedFeed?.items,
    },
    revalidate: 1,
  };
}
