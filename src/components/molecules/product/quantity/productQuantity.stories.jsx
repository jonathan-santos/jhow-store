import ProductQuantity from '.'

import ImgProduct from '../../../../../public/img/product.png'

export default {
  component: ProductQuantity,
  title: 'molecules/Product/ProductQuantity',
  parameters: {
    backgrounds: {
      default: 'background'
    }
  }
}

const defaultArgs = {
  image: ImgProduct,
  name: 'Product namefasljkdscvfalk;fjds;lkdfajs',
  price: 999.99,
  quantity: 1,
  change: () => alert('Change quantity')
}

const Template = (args) => <ProductQuantity {...args} {...defaultArgs} />

export const Default = Template.bind({})
Default.args = {}
