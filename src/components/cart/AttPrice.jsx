import { clearNumberCurrency, createUniqueArray, contItem } from "./cart-components";

export class AttPrice {
  static updatePrice(quant, value) {
    const valueFullPrice = document.querySelector('#priceAll').innerText;
    const valueFormat = Number(clearNumberCurrency(value));
    let fullPrice = Number(clearNumberCurrency(valueFullPrice));
    let contador = 0;

    while(contador < quant) {
      fullPrice -= valueFormat;
      contador++;
    }

    return fullPrice;
  }

  static deletePrice(arrayItens) {
    let fullPrice = 0;
    for (let index = 0; index < arrayItens.length; index++) {
      fullPrice += Number(clearNumberCurrency(arrayItens[index].value));
    };
    return fullPrice;
  }

  static removeItem(index, jsonItens, item, setPrice, setItem) {
    const newItens = [...item];
    const uniqueArray = createUniqueArray(newItens);
    const countDataStorage = contItem(jsonItens);

    const attItens = jsonItens.filter((element) => {
      return element.image !== uniqueArray[index].image;
    });

    const saveItem = {
      count: JSON.parse(localStorage.getItem('cart')).count - countDataStorage[uniqueArray[index].image],
      item: attItens
    };

    const priceUpdateDelete = this.deletePrice(attItens);
    setPrice(priceUpdateDelete);
    localStorage.setItem("fullPrice", priceUpdateDelete);

    localStorage.setItem("cart", JSON.stringify(saveItem));
    setItem(attItens);
  }
}
