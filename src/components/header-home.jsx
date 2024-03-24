import propTypes from "prop-types"
import '../style/shop/style.css'
import { useEffect } from "react"

function Header(props) {

  useEffect(() => {
    const contador = document.querySelector('.count-item')

    if(props.count !== 0) {
      uador.classList.remove('displayNone')
      contador.innerHTML = props.count
    }
  })

  return (
    <header id="top">
      <a href="/carrinho" className='cart'>
        <i className="material-symbols-outlined carrinho">shopping_cart</i>
        <i className="displayNone count-item">{props.count}</i>
      </a>
      <h1>Bem vindo a Loja Pokemon dos seus sonhos</h1>
      <nav>
        <a href="#">Home</a>
        <a href="https://pokemonrevolution.net/download" target="_blank">Download</a>
        <a href="https://pokemonrevolution.net/forum/topic/190726-kazutora-shop/" target="_blank">Forum</a>
        <input type="checkbox" name="tema" id="tema"></input>
      </nav>
    </header>
  )
}
Header.propTypes = {
  count: propTypes.number
}

export default Header;
