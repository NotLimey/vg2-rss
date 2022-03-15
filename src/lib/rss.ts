import Parser from "rss-parser";

export const FEEDS = [
    {
        slug: "vg",
        title: "Vg",
        url: "https://www.vg.no/rss/feed"
    },
    {
        slug: "nrk",
        title: "Nrk",
        url: "https://www.nrk.no/toppsaker.rss",
        logo: "/NRK_positiv_rgb.png"
    }
];

export async function getFeed(feedUrl? : string) {
    let parser = new Parser();
    if(!feedUrl) return;
  
    let feed = await parser.parseURL(feedUrl);
  
    return feed;
}