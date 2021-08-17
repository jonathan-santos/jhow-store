import ProductCarousel from '.'

import ImgProduct from '../../../../public/img/product.png'

export default {
  component: ProductCarousel,
  title: 'molecules/ProductCarousel'
}

const items = [
  { src: ImgProduct, alt: 'Something', width: 144, height: 144 },
  { src: ImgProduct, alt: 'Something', width: 144, height: 144 },
  { src: ImgProduct, alt: 'Something', width: 144, height: 144 }
]

const Template = (args) => <ProductCarousel {...args} items={items} />

export const Default = Template.bind({})
