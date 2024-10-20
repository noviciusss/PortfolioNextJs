// next-sitemap.config.ts
import { IConfig } from 'next-sitemap';

const config: IConfig = {
    siteUrl: 'https://portfolio-noviciusss.vercel.app', // Replace with your website URL
    generateRobotsTxt: true, // Generate a robots.txt file
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
        ],
    },
    sitemapSize: 5000, // Split sitemap into multiple files if it exceeds this size
    changefreq: 'daily', // Frequency of changes
    priority: 0.7, // Priority of URLs
    exclude: ['/admin/*'], // Exclude specific paths
    additionalPaths: async (config) => [
        await config.transform(config, '/additional-path'),
    ],
};

export default config;