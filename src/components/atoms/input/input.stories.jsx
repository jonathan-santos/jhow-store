import Input from '.'

export default {
  component: Input,
  title: 'atoms/Input',
  parameters: {
    backgrounds: {
      default: 'background'
    }
  }
}

const Template = (args) => <Input {...args} />

export const Empty = Template.bind({})

export const WithContent = Template.bind({})
WithContent.args = {
  value: 'Something'
}
