import { CollectionConfig } from 'payload/types';

const Areas: CollectionConfig = {
  slug: 'areas',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    },
  ],
  timestamps: false,
}

export default Areas;