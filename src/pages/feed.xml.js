import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'Marisha Hicks',
    description: 'An author based in El Paso, TX.',
    stylesheet: false,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: '<language>en-us</language>',
    canonicalUrl: 'https://marishahicks.com',
  });
}
