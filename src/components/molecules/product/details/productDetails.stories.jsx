import ProductDetails from '.'

import ImgProduct from '../../../../../public/img/product.png'

export default {
  component: ProductDetails,
  title: 'molecules/Product/ProductDetails',
  parameters: {
    backgrounds: {
      default: 'background'
    }
  }
}

const defaultArgs = {
  image: ImgProduct,
  name: 'Product name',
  price: 999.99,
  description:
    'Something about the product, describing it with details and other things.',
  rating: 4.5
}

const Template = (args) => <ProductDetails {...args} {...defaultArgs} />

export const Default = Template.bind({})
Default.args = {}
