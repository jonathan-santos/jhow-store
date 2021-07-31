import Radio from '.'

export default {
  component: Radio,
  title: 'atoms/Radio'
}

const Template = (args) => <Radio {...args} />

export const Unchecked = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  checked: true
}

export const UncheckedInDark = Template.bind({})
UncheckedInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const CheckedInDark = Template.bind({})
CheckedInDark.args = {
  checked: true
}
CheckedInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
