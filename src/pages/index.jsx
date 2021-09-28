import { Title, Button, Product } from '../components'

const styles = {
  backgroundColor: 'var(--color-background)',
  height: '100vh',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1rem'
}

const Home = () => (
  <div style={styles}>
    <Title>Hello there</Title>

    <Button>Hello</Button>

    <Product
      image="/img/product.png"
      name="Product name"
      description="Something about the product, describing it with details and other things."
      price="$ 9.99"
      rating={4.5}
    />
  </div>
)

export default Home
