import Parser from "rss-parser";

export const FEEDS = [
    {
        slug: "vg",
        title: "VG",
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
        url: "https://e24.no/rss2/",
        logo: "/e24logo.png"
    },
    {
        slug: "tv2",
        title: "Tv2",
        url: "https://www.tv2.no/rss/nyheter"
    },
    {
        slug: "dagbladet",
        title: "Dagbladet",
        url: "https://www.dagbladet.no/?lab_viewport=rss"
    },
    {
        slug: "aftenposten",
        title: "Aftenposten",
        url: "https://www.aftenposten.no/rss/"
    },
    {
        slug: "dn",
        title: "DN",
        url: "https://services.dn.no/api/feed/rss/"
    },
    {
        slug: "finansavisen",
        title: "Finansavisen",
        url: "https://ws.finansavisen.no/api/articles.rss"
    },
    {
        slug: "helsebiblioteket",
        title: "Helsebiblioteket",
        url: "https://www.helsebiblioteket.no/rss"
    }
];

export async function getFeed(feedUrl? : string) {
    let parser = new Parser();
    if(!feedUrl) return;
  
    let feed = await parser.parseURL(feedUrl);
  
    return feed;
}