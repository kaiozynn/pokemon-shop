import { useEffect } from 'react';
import Header from './header'
import { clearNumberCurrency } from '../cart/cart-components';

export class AttFullPrice {
  constructor(ev) {
    this.ev = ev;
  }

  initPrice() {
    if(!localStorage.getItem('fullPrice')) localStorage.setItem('fullPrice', 0)
  }

  addPriceItem(price) {
    const priceClean = Number(clearNumberCurrency(price));
    const getPriceStorage = Number(localStorage.getItem('fullPrice'));
    
    localStorage.setItem("fullPrice", JSON.stringify(priceClean+getPriceStorage));
  }

  upValue() {
    const dad = this.ev.target.parentNode.parentNode;
    const currentItem = clearNumberCurrency(dad.querySelector('.valueTest').innerText);
    const priceStorage = localStorage.getItem("fullPrice");
    return Number(priceStorage) + Number(currentItem);
  }

  downValue() {
    const dad = this.ev.target.parentNode.parentNode;
    const currentItem = clearNumberCurrency(dad.querySelector('.valueTest').innerText);
    const priceStorage = localStorage.getItem("fullPrice");
    return Number(priceStorage) - Number(currentItem);
  }
}

class Item {
  constructor(count) {
    this.count = count;
  }

  addItem() {
    const contador = document.querySelector('.shopCount-item')

    if(this.count !== 0) {
      contador.classList.remove('shopDisplayNone');
      contador.classList.add('shopCount-item');
      return contador.innerHTML = this.count;
    }
  }

  createItem(count, item) {
    return {
      count,
      item
    }
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

  const fullPrice = new AttFullPrice();
  const dataCart = JSON.parse(localStorage.getItem("cart"));

  let count = dataCart ? dataCart.count : 0;
  const item = dataCart ? dataCart.item : [];
  const valueItem = 50;

  useEffect(() => {
    (function cont() {
      fullPrice.initPrice();
      if (dataCart) {
        const cart = new Item(dataCart.count);
        cart.addItem();
      }
    })();

    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      const linkCart = document.querySelector('.linkCart');
      const theme = document.querySelector('.theme');

      if (window.scrollY > 50) { // Você pode ajustar o valor conforme necessário
        header.classList.add('sticky');
        linkCart.style.display = 'block';
        theme.style.width = '200px';
      } else {
        header.classList.remove('sticky');
        linkCart.style.display = 'none';
        theme.style.width = '60px';
      }
    });

  })

  const handleclick = (ev) => {
    count++;
    const dad = ev.target.parentNode;
    const image = dad.querySelector('img').src;
    const value = dad.parentNode.querySelector('span').innerText;
    const newItem = new Item(count);

    newItem.addItem();
    item.push({image, value});

    const cartItens = newItem.createItem(count, item);
    const storage = JSON.stringify(cartItens);

    fullPrice.addPriceItem(value);
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
                <img src={element} className='img'/>
              </div>
              <span>{valueItem.toLocaleString("pt-br",{style:"currency", currency: "BRL"})}</span>
              <div className='shopButtons'>
                <a href="/compra" className='shopCompra'>Comprar</a>
              </div>
              <button className="material-symbols-outlined add-cart" onClick={handleclick}>add_shopping_cart</button>
            </div>
        )
      })}
    </main>
  </div>
  )
}