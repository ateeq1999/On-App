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
      type: 'select',
      options: ['K','B','O']
    },
  ],
  timestamps: false,
}

export default Areas;