import propTypes from "prop-types"
import { LinkCart, Navbar, Title} from './shop-components.jsx'

export default function Header({imgs}) {
  return (
    <header id="shopTop">
      <LinkCart imgs={imgs}/>
      <Title />
      <Navbar />
    </header>
  )
}
Header.propTypes = {
  imgs: propTypes.array.isRequired
}
