import Category from '.'

import ImgProduct from '../../../../public/img/product.png'

export default {
  component: Category,
  title: 'molecules/Category'
}

const Template = (args) => <Category {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Category',
  image: ImgProduct,
  link: '#'
}
