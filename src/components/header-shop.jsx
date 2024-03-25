import propTypes from "prop-types"
import '../style/shop/style.css'
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Carrinho from "../routes/Carrinho.jsx"

function Item({ count, imgs }) {
  this.count = count
  this.imgs = imgs
}
Item.prototype.addItem = function() {
  const contador = document.querySelector('.count-item')

  if(this.count !== 0) {
    contador.classList.remove('displayNone');
    contador.innerHTML = this.count
  }
}

function Header(props) {
  const history = useNavigate();

  useEffect(() => {
    const item = new Item(props)
    item.addItem()
  })

  const handleClickCart = () => {
    history("/carrinho", {
      state: {imgs: props.imgs}
    });
  }

  return (
    <header id="top">
      <a className='cart' onClick={handleClickCart}>
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
