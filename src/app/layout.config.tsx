import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { DynamicLogo } from '@/components/DynamicLogo';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <DynamicLogo />
        Grace
      </>
    ),
  },
  links: [
    {
      text: 'Documentation',
      url: '/docs',
      active: 'nested-url',
    },
  ],
};
