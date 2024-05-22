import propTypes from "prop-types"
import { LinkCart, Navbar, Title} from './shop-components.jsx'

export default function Header({itens}) {
  return (
    <>
    <header id="shopTop"> 
      <LinkCart itens={itens}/>
      <Title />
    </header>
    <Navbar />  
    </>
  )
}
Header.propTypes = {
  itens: propTypes.array.isRequired
}
