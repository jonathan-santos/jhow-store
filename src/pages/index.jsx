import { Button, ProductCarousel } from '../components'

const Home = () => (
  <>
    <h1>Hello there</h1>

    <Button>Hello</Button>

    <ProductCarousel
      items={[
        { src: '/img/product.png', alt: 'Something' },
        { src: '/img/product.png', alt: 'Something' },
        { src: '/img/product.png', alt: 'Something' }
      ]}
    />
  </>
)

export default Home
