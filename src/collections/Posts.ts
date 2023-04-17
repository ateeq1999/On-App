import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: () => true,
    read: () => true,
  },
  fields: [
    {
      name: 'area',
      label: 'Area',
      type: 'relationship',
      relationTo: 'areas',
    },
    {
      name: 'category',
      label: 'Category',
      type: 'relationship',
      relationTo: 'categories'
    },
    {
      name: 'location',
      label: 'Location',
      type: 'relationship',
      relationTo: 'locations',
    },
    {
      name: 'text',
      label: 'Text',
      type: 'richText'
    },
    {
      name: 'photo',
      type: 'relationship',
      label: 'Photo',
      relationTo: 'media',
      required: true
    },
  ],
}

export default Posts;