import ProductCarousel from '.'

import ImgProduct from '../../../public/img/product.png'

export default {
  component: ProductCarousel,
  title: 'molecules/ProductCarousel'
}

const items = [
  { src: ImgProduct, alt: 'Something' },
  { src: ImgProduct, alt: 'Something' },
  { src: ImgProduct, alt: 'Something' }
]

const Template = (args) => <ProductCarousel {...args} items={items} />

export const Default = Template.bind({})
