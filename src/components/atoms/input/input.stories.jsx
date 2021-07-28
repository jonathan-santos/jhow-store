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
  value: 'Something',
  clear: () => alert('clear')
}

export const EmptyInDark = Template.bind({})
EmptyInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const WithContentInDark = Template.bind({})
WithContentInDark.args = {
  value: 'Something'
}
WithContentInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
