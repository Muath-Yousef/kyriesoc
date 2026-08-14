import { MetadataRoute } from 'next';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://socroot.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/training',
    '/contact',
    '/privacy',
    '/terms',
    '/security',
    '/scan',
    '/compliance/nca-ecc',
    '/compliance/iso-27001',
    '/resources',
    '/resources/security-guide',
  ];

  const allRoutes = staticRoutes;

  return allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
