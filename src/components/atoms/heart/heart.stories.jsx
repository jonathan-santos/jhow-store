import Heart from '.'

export default {
  component: Heart,
  title: 'atoms/Heart'
}

const Template = (args) => <Heart {...args} />

export const Default = Template.bind({})

export const Filled = Template.bind({})
Filled.args = {
  fill: true
}

export const DefaultInDark = Template.bind({})
DefaultInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const FilledInDark = Template.bind({})
FilledInDark.args = {
  fill: true
}
FilledInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const WithBackground = Template.bind({})
WithBackground.args = {
  background: true
}

export const WithBackgroundFilled = Template.bind({})
WithBackgroundFilled.args = {
  fill: true,
  background: true
}

export const WithBackgroundInDark = Template.bind({})
WithBackgroundInDark.args = {
  background: true
}
WithBackgroundInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const WithBackgroundFilledInDark = Template.bind({})
WithBackgroundFilledInDark.args = {
  fill: true,
  background: true
}
WithBackgroundFilledInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
