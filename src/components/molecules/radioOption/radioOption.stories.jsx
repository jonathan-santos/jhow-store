import RadioOption from '.'

export default {
  component: RadioOption,
  title: 'molecules/RadioOption'
}

const Template = (args) => (
  <RadioOption
    {...args}
    title="Title"
    description="Description"
    onSelect={() => alert('select')}
  />
)

export const UnSelected = Template.bind({})

export const Selected = Template.bind({})
Selected.args = {
  selected: true
}
