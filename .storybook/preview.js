import '!style-loader!css-loader!sass-loader!../src/styles/global.scss'
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});

export const parameters = {
  controls: { expanded: true },
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#111111' },
      { name: 'background', value: '#eeeeee' }
    ]
  }
}

export const decorators = [
  (storyFn) => <div id="preview" style={{ padding: '1rem' }}>{storyFn()}</div>
]
