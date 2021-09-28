import Rating from '.'

export default {
  component: Rating,
  title: 'molecules/Rating'
}

const Template = (args) => (
  <Rating {...args} change={(v) => alert(`Change to ${v} stars`)} />
)

export const OneStar = Template.bind({})
OneStar.args = {
  value: 1
}

export const TwoStars = Template.bind({})
TwoStars.args = {
  value: 2
}

export const ThreeStars = Template.bind({})
ThreeStars.args = {
  value: 3
}

export const FourStars = Template.bind({})
FourStars.args = {
  value: 4
}

export const FiveStars = Template.bind({})
FiveStars.args = {
  value: 5
}

export const WithBackgroundSmall = Template.bind({})
WithBackgroundSmall.args = {
  value: 5,
  size: 'small',
  background: true
}
