import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/about', '/contact'],
      },
    ],

    sitemap: 'https://nexus.mdesk.tech/sitemap.xml',
  };
}
