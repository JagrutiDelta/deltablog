import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Homepage - Highest Priority
    {
      url: 'https://deltainfosoft.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // SEO Service Pages - Very High Priority
    {
      url: 'https://deltainfosoft.com/erp-software-ahmedabad',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://deltainfosoft.com/crm-software-ahmedabad',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://deltainfosoft.com/zoho-crm-implementation-ahmedabad',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    // Contact Page
    {
      url: 'https://deltainfosoft.com/contactus',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Industry Solutions
    {
      url: 'https://deltainfosoft.com/solutions/PumpManufacturing',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/EngineeringManufacturing',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/ConstructionContractingIndustry',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/TradingandDistribution',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/ERPAcademicDomain',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Our Products
    {
      url: 'https://deltainfosoft.com/solutions/MyTime',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/iCRM',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/iERP',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/iAccount',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://deltainfosoft.com/solutions/iVendor',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    // Partners
    {
      url: 'https://deltainfosoft.com/Partner/odoo',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/Partner/Zoho',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/Partner/doubleTick',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/Partner/clearTax',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Company
    {
      url: 'https://deltainfosoft.com/company/lifeAtDelta',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/Awards',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/blogs',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/CSRActivities',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/gallery',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/careers',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://deltainfosoft.com/company/aboutus',
      lastModified: new Date().toISOString(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
