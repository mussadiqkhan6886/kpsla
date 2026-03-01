import { NextResponse } from "next/server";

type SitemapUrl = {
  loc: string;           // Full URL string
  changefreq: string;    // e.g., "daily", "weekly", "monthly"
  priority: number;      // e.g., 1.0, 0.9
};

export async function GET() {
  try {
    const staticPages = [
      '/',
      '/about-us',
      '/add-review',
      '/contact-us',
      '/events',
      '/get-involved',
      '/privacy',
      '/registration',
      '/terms',
    ];

    const urls: SitemapUrl[] = [];

    // Add static pages
    staticPages.forEach(page => {
      urls.push({
        loc: `https://www.kpsla.org${page}`,
        changefreq: "weekly",
        priority: 0.7,
      });
    });


    // Generate final XML from typed objects
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    u => `
  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('')}
</urlset>`;

    return new NextResponse(sitemap, {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (err) {
    console.error("Error generating sitemap:", err);
    return new NextResponse("Sitemap generation failed", { status: 500 });
  }
}
