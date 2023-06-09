import { CollectionConfig } from 'payload/types';

const Posts: CollectionConfig = {
  slug: 'posts',
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: 'area',
      label: 'Area',
      type: 'select',
      options: ['K','B','O']
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
      name: 'phone',
      label: 'Phone',
      type: 'text'
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