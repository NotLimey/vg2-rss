import Parser from "rss-parser";

export const FEEDS = [
    {
        slug: "vg",
        title: "Vg",
        url: "https://www.vg.no/rss/feed",
        logo: "/vg-logo.png"
    },
    {
        slug: "nrk",
        title: "Nrk",
        url: "https://www.nrk.no/toppsaker.rss",
        logo: "/NRK_positiv_rgb.png"
    },
    {
        slug: "e24",
        title: "E24",
        url: "https://e24.no/rss2/"
    }
];

export async function getFeed(feedUrl? : string) {
    let parser = new Parser();
    if(!feedUrl) return;
  
    let feed = await parser.parseURL(feedUrl);
  
    return feed;
}