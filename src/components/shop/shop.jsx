import { useEffect } from 'react';
import Header from './header'

function Item(count) {
  this.count = count
}
Item.prototype.addItem = function() {
  const contador = document.querySelector('.shopCount-item')

  if(this.count !== 0) {
    contador.classList.remove('shopDisplayNone');
    contador.classList.add('shopCount-item');
    return contador.innerHTML = this.count;
  }
}

export default function Itens() {
  const itens = [
    'https://i.postimg.cc/qq1d8Gvb/arcanine-h.png',
    'https://i.postimg.cc/dQ6vPJj2/arcanine-s.png',
    'https://i.postimg.cc/hjbnGnWq/blaziken-n.png',
    'https://i.postimg.cc/3N8T4qY0/camerupt-n.png',
    'https://i.postimg.cc/8PCGTxZq/chandelure-n.png',
    'https://i.postimg.cc/c45SCTj6/charizard-c.png',
    'https://i.postimg.cc/SxBb7Rmh/charizard-h.png',
    'https://i.postimg.cc/26mpMtq9/cindaquil-h.png',
    'https://i.postimg.cc/76VvkN0H/darmanitan-s.png',
    'https://i.postimg.cc/1X5k5Nrp/darumaka-su.png',
    'https://i.postimg.cc/rsnvdFf7/delphox-h.png',
    'https://i.postimg.cc/PfSGV2dK/emboar-su.png',
    'https://i.postimg.cc/xTZwn8Jz/flareon-n.png',
    'https://i.postimg.cc/bw2KJPkF/houndoom-n.png',
    'https://i.postimg.cc/k5QzQyjQ/infernape-p.png',
    'https://i.postimg.cc/D0MMvpZT/larvesta-h.png',
    'https://i.postimg.cc/h4yw1v05/magmortar-n.png',
    'https://i.postimg.cc/HsFhFNR0/ninetails.png',
    'https://i.postimg.cc/136jSH1k/ninetails-n.png',
    'https://i.postimg.cc/cJBkgLHT/ninetails-p.png',
    'https://i.postimg.cc/85kKhgfG/ninetales-v.png',
    'https://i.postimg.cc/tTrrkvFx/ponyta-h.png',
    'https://i.postimg.cc/tJYBMdzm/ponyta-s.png',
    'https://i.postimg.cc/NFSdqyJG/slugma-1.png',
    'https://i.postimg.cc/BZVY1ySW/torkoal-h.png',
    'https://i.postimg.cc/Prv6b4JC/volcarona-p.png'
  ]

  const dataCart = JSON.parse(localStorage.getItem("cart"));

  let count = dataCart ? dataCart.count : 0;
  const item = dataCart ? dataCart.item : [];
  console.log(item)
  const valueItem = 300;

  useEffect(() => {
    (function cont() {
      if (dataCart) {
        const cart = new Item(dataCart.count);
        cart.addItem();
      }
    })();
  })

  const handleclick = (ev) => {
    count++;
    const dad = ev.target.parentNode;
    const image = dad.parentNode.querySelector('img').src;
    const value = dad.parentNode.querySelector('span').innerText;
    const newItem = new Item(count);
    newItem.addItem();
    item.push({image, value});
    const cartItens = {
      count,
      item
    };
    const storage = JSON.stringify(cartItens);
    localStorage.setItem("cart", storage);
  }


  return (
    <div className='shopBody'>
    <Header itens={item} count={count}/>
    <main>
      {itens.map((element, index) => {
        return (
            <div className="shopContainer" key={index+1}>
              <div className="shopImg">
                <img src={element} />
              </div>
              <span>{valueItem.toLocaleString("pt-br",{style:"currency", currency: "BRL"})}</span>
              <div className='shopButtons'>
                <a href="#" className='shopCompra'>Comprar</a>
                <button className="material-symbols-outlined" onClick={handleclick}>add_shopping_cart</button>
              </div>
            </div>
        )
      })}
    </main>
  </div>
  )
}