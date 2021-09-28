import Product from '.'

import ImgProduct from '../../../../public/img/product.png'

export default {
  component: Product,
  title: 'molecules/Product',
  parameters: {
    backgrounds: {
      default: 'background'
    }
  }
}

const defaultArgs = {
  image: ImgProduct,
  name: 'Product name',
  description:
    'Something about the product, describing it with details and other things.',
  price: '$ 999.99',
  rating: 4.5
}

const Template = (args) => <Product {...args} {...defaultArgs} />

export const Default = Template.bind({})
Default.args = {}
