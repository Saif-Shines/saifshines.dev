// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';

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
  ],
});
