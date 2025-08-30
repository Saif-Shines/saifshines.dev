// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';
import d2 from 'astro-d2';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Saif Shines',
      description: "Saif's personal website",
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Saif-Shines',
        },
      ],
      sidebar: [
        {
          label: 'Notes',
          autogenerate: { directory: 'notes' },
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
      ],
      plugins: [ion()],
    }),
    d2({
      theme: {
        default: '0',
        dark: '1', // choose at https://d2lang.com/tour/themes/
      },
      sketch: true,
      layout: 'elk',
    }),
  ],
});
