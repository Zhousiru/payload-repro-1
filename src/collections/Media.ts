import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    formatOptions: {
      format: 'avif',
    },
    imageSizes: [
      {
        name: `100w`,
        width: 100,
        formatOptions: {
          format: 'avif',
        },
      },
      {
        name: `200w`,
        width: 200,
        formatOptions: {
          format: 'avif',
        },
      },
    ],
    adminThumbnail: '100w',
  },
}
