import Category from '.'

import ImgProduct from '../../../../public/img/product.png'

export default {
  component: Category,
  title: 'molecules/Category'
}

const defaultArgs = {
  title: 'Category',
  image: ImgProduct,
  link: '#'
}

const Template = (args) => <Category {...args} {...defaultArgs} />

export const Default = Template.bind({})

export const SideBySide = () => (
  <div style={{ display: 'flex', flexDirection: 'row' }}>
    <Default />
    <Default />
  </div>
)
