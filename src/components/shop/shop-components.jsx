import React from 'react';
import { useNavigate } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <nav>
        <a href="#">Home</a>
        <a href="https://pokemonrevolution.net/download" target="_blank">Download</a>
        <a href="https://pokemonrevolution.net/forum/topic/190726-kazutora-shop/" target="_blank">Forum</a>
        <input type="checkbox" name="tema" id="tema"></input>
      </nav>
    </>
  )
};

export function Title() {
  return (
    <>
      <h1>Bem vindo a Loja Pokemon dos seus sonhos</h1>
    </>
  )
}

export function LinkCart({count, imgs}) {
  const history = useNavigate();

  const handleClickCart = () => {
    history("/carrinho", {
      state: {imgs: imgs}
    });
  }

  return (
    <>
      <a className='cart' onClick={handleClickCart}>
        <i className="material-symbols-outlined carrinho">shopping_cart</i>
        <i className="displayNone count-item">{count}</i>
      </a>
    </>
  )
}