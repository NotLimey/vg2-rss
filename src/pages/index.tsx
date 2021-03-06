import type { NextPage } from 'next'
import { FEEDS } from "../lib/rss";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="px-6 py-12 max-w-xl mx-auto">
      <h1 className="font-bold text-5xl mb-12">Spennende Rss Feeder</h1>
      <div className="grid grid-cols-2 gap-4">
        {FEEDS.map((feed) => (
          <Link key={feed.slug} href={`/feeds/${feed.slug}`}>
            <a className="p-4 border border-gray-200 hover:border-gray-500 rounded-lg">
              {feed.logo ? <img className='h-6 mx-auto' src={feed.logo} alt="" /> : feed.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home
