import QuantitySelector from '.'

export default {
  component: QuantitySelector,
  title: 'molecules/quantitySelector'
}

const props = {
  change: (value) => alert('change'),
  quantity: 1
}

const Template = (args) => <QuantitySelector {...args} {...props} />

export const Default = Template.bind({})
