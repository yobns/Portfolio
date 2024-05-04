export default function robot() {
    return {
        rules: {
            userAgent: "*",
            allow: ["/"],
            disallow: [],
        },
        sitemap: "https://www.yonibns.com/sitemap.xml",
    }
}