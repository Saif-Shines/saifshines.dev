// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Saif Shines',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Saif-Shines',
        },
      ],
      sidebar: [
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', slug: 'guides/example' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      plugins: [ion()],
    }),
  ],
});
