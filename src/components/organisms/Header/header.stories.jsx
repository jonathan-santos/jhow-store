import Header from '.'

export default {
  component: Header,
  title: 'organisms/Header'
}

const defaultArgs = {
  title: 'Title'
}

const Template = (args) => <Header {...args} {...defaultArgs} />

export const Default = Template.bind({})
