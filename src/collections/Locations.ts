import { CollectionConfig } from 'payload/types';

const Locations: CollectionConfig = {
  slug: 'locations',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text',
    }
  ],
};

export default Locations;