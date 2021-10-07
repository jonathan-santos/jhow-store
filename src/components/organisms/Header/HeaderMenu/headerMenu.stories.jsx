import HeaderMenu from '.'

export default {
  component: HeaderMenu,
  title: 'organisms/Header/HeaderMenu'
}

const defaultArgs = {}

const Template = (args) => <HeaderMenu {...args} {...defaultArgs} />

export const Default = Template.bind({})
