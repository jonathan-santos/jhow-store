import Star from '.'

export default {
  component: Star,
  title: 'atoms/Star'
}

const Template = (args) => <Star {...args} />

export const Empty = Template.bind({})

export const Half = Template.bind({})
Half.args = {
  state: 'half'
}

export const Full = Template.bind({})
Full.args = {
  state: 'full'
}

export const EmptyInDark = Template.bind({})
EmptyInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const HalfInDark = Template.bind({})
HalfInDark.args = {
  state: 'half'
}
HalfInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const FullInDark = Template.bind({})
FullInDark.args = {
  state: 'full'
}
FullInDark.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
