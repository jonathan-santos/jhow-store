import PropTypes from 'prop-types'
import '../styles/global.scss'

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

CustomApp.defaultProps = {
  Component: '',
  pageProps: {}
}

CustomApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.instanceOf(Object)
}

export default CustomApp
