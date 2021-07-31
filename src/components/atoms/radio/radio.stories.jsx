import Radio from '.'

export default {
  component: Radio,
  title: 'atoms/Radio'
}

const defaultProps = {
  id: 'something',
  toggle: () => alert('toggle')
}

const Template = (args) => <Radio {...args} />

export const Unchecked = Template.bind({})
Unchecked.args = {
  ...defaultProps
}

export const Checked = Template.bind({})
Checked.args = {
  ...defaultProps,
  checked: true
}

export const UncheckedInDark = Template.bind({})
UncheckedInDark.args = {
  ...defaultProps
}
UncheckedInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const CheckedInDark = Template.bind({})
CheckedInDark.args = {
  ...defaultProps,
  checked: true
}
CheckedInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
