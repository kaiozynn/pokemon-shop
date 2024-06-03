import { clearNumberCurrency } from "../cart/cart-components";

export class AttFullPrice {
  constructor(ev) {
    this.ev = ev;
  }

  static initPrice() {
    if(!localStorage.getItem('fullPrice')) localStorage.setItem('fullPrice', 0)
  }

  static addPriceItem(price) {
    const priceClean = Number(clearNumberCurrency(price));
    const getPriceStorage = Number(localStorage.getItem('fullPrice'));
    
    localStorage.setItem("fullPrice", JSON.stringify(priceClean+getPriceStorage));
  }

  static upValue() {
    const dad = this.ev.target.parentNode.parentNode;
    const currentItem = clearNumberCurrency(dad.querySelector('.valueTest').innerText);
    const priceStorage = localStorage.getItem("fullPrice");
    return Number(priceStorage) + Number(currentItem);
  }

  static downValue() {
    const dad = this.ev.target.parentNode.parentNode;
    const currentItem = clearNumberCurrency(dad.querySelector('.valueTest').innerText);
    const priceStorage = localStorage.getItem("fullPrice");
    return Number(priceStorage) - Number(currentItem);
  }
}
