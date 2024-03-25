import propTypes from "prop-types"
import '../../style/shop/style.css'
import { useEffect, useState } from "react"
import { LinkCart, Navbar, Title} from './shop-components.jsx'

function Item(count, imgs) {
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

function Header({count, imgs}) {

  useEffect(() => {
    const item = new Item(count, imgs)
    item.addItem()
  })

  return (
    <header id="top">
      <LinkCart count={count} imgs={imgs}/>
      <Title />
      <Navbar />
    </header>
  )
}
Header.propTypes = {
  count: propTypes.number.isRequired,
  imgs: propTypes.array.isRequired
}

export default Header;
