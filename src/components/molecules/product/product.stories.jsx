import Product from '.'

import ImgProduct from '../../../../public/img/product.png'

export default {
  component: Product,
  title: 'molecules/Product'
}

const defaultArgs = {
  name: 'Product',
  image: ImgProduct
}

const Template = (args) => <Product {...args} {...defaultArgs} />

export const Default = Template.bind({})
Default.args = {}
