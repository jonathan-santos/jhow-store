import Button from '.'

import iconPlus from '../../../../public/icons/icon-plus.svg'

export default {
  component: Button,
  title: 'atoms/Button'
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: 'Text'
}

export const Positive = Template.bind({})
Positive.args = {
  children: 'Text',
  color: 'positive'
}

export const Negative = Template.bind({})
Negative.args = {
  children: 'Text',
  color: 'negative'
}

export const Disabled = Template.bind({})
Disabled.args = {
  children: 'Text',
  disabled: true
}

export const Secondary = Template.bind({})
Secondary.args = {
  children: 'Text',
  secondary: true
}

export const SecondaryPositive = Template.bind({})
SecondaryPositive.args = {
  children: 'Text',
  secondary: true,
  color: 'positive'
}

export const SecondaryNegative = Template.bind({})
SecondaryNegative.args = {
  children: 'Text',
  secondary: true,
  color: 'negative'
}

export const SecondaryInDark = Template.bind({})
SecondaryInDark.args = {
  children: 'Text',
  secondary: true,
  color: 'in-dark'
}
SecondaryInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: <img src={iconPlus} />
}

export const WithIconRounded = Template.bind({})
WithIconRounded.args = {
  children: <img src={iconPlus} />,
  rounded: true
}

export const Bottom = Template.bind({})
Bottom.args = {
  children: 'Text',
  bottom: true
}
