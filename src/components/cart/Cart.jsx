import { useState } from "react";
import { DeleteButton, Price } from "./cart-components";
import { Contador } from "./Contador";

function deletePrice(arrayItens) {
  let fullPrice = 0;
  for (let index = 0; index < arrayItens.length; index++) {
    fullPrice += Number(limparNumeroMoeda(arrayItens[index].value));
  };
  return fullPrice;
}

export function limparNumeroMoeda(numeroFormatado) {
  return numeroFormatado.replace(/[^\d,-]/g, '').replace(',', '.');
}

function contItem(itemInCount) {
  let cont = {}; // faz a contagem dos itens armazena em um objeto colocando o nome do elemento como chave do objeto e depois a quantidade como valor

  itemInCount.map((element) => {
    if(cont[element.image]) {
      cont[element.image]++;
    } else {
      cont[element.image] = 1;
    }
  })

  return cont;
}

function createUniqueArray(array) {
  return array.filter((obj, index, self) =>
    index === self.findIndex((o) => (
        o.image === obj.image
    ))
  );
}

export function Container() {
  const priceStorage = Number(localStorage.getItem("fullPrice"))
  .toLocaleString('pt-br', {style: 'currency', currency: "BRL"}) ?? 0;
  const jsonItens = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).item : [];

  const [item, setItem] = useState(jsonItens);
  const [price, setPrice] = useState(priceStorage);

  const cont = contItem(item);
  const cartItens = Object.keys(cont);

  const removeItem = (index) => {
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

    const priceUpdateDelete = deletePrice(attItens);
    setPrice(priceUpdateDelete);
    localStorage.setItem("fullPrice", priceUpdateDelete);

    localStorage.setItem("cart", JSON.stringify(saveItem));
    setItem(attItens);
  };

  return (
    <>
      <div className="layoutCart">
        {cartItens.map((element, index) => {
          return (
            <div className="itemCart" key={index+1}>
              <div>
                <img src={element} />
              </div>
              <div className="item">
                <Price value={item[index].value}/>
                <Contador valQuant={cont[element]} itemCart={{
                  image: element,
                  value: item[index].value
                }} setPrice={setPrice} />
                <DeleteButton index={index} itemInDelete={item} onDelete={removeItem}/>
              </div>
            </div>
          )
        })}
      </div>
      <div className="full">
        <a href="/">Voltar</a>
        <div id="priceAll">{price.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})}</div>
      </div>
    </>
  )
}