import Text from '.'

export default {
  component: Text,
  title: 'atoms/Text'
}

const Template = (args) => <Text {...args} />

export const DarkParagraph = Template.bind({})
DarkParagraph.args = {
  children: 'Text'
}

export const DarkMultipleParagraphs = (args) => (
  <>
    <Text>Text</Text>
    <Text>Text</Text>
    <Text>Text</Text>
  </>
)

export const DarkSpan = Template.bind({})
DarkSpan.args = {
  children: 'Text',
  as: 'span'
}

export const DarkMultipleSpans = (args) => (
  <>
    <Text as="span">Text, </Text>
    <Text as="span">Text, </Text>
    <Text as="span">Text</Text>
  </>
)

export const LightParagraph = Template.bind({})
LightParagraph.args = {
  children: 'Text',
  color: 'light'
}
LightParagraph.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightMultipleParagraphs = (args) => (
  <>
    <Text color="light">Text</Text>
    <Text color="light">Text</Text>
    <Text color="light">Text</Text>
  </>
)
LightMultipleParagraphs.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightSpan = Template.bind({})
LightSpan.args = {
  children: 'Text',
  as: 'span',
  color: 'light'
}
LightSpan.parameters = {
  backgrounds: {
    default: 'dark'
  }
}

export const LightMultipleSpans = (args) => (
  <>
    <Text as="span" color="light">
      Text,
    </Text>

    <Text as="span" color="light">
      Text,
    </Text>

    <Text as="span" color="light">
      Text
    </Text>
  </>
)
LightMultipleSpans.parameters = {
  backgrounds: {
    default: 'dark'
  }
}
