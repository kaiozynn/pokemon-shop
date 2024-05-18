import { useState } from "react";
import { Contador, DeleteButton, Price } from "./cart-components";

function contItem(itemInCount) {
  let cont = {} // faz a contagem dos itens armazena em um objeto colocando o nome do elemento como chave do objeto e depois a quantidade como valor

  itemInCount.map((element) => {
    if(cont[element.image]) {
      cont[element.image]++;
    } else {
      cont[element.image] = 1;
    }
  })

  return cont
}

function createUniqueArray(array) {
  return array.filter((obj, index, self) =>
    index === self.findIndex((o) => (
        o.image === obj.image
    ))
  );
}

export function Container() {
  const jsonItens = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).item : [];
  const [item, setItem] = useState(jsonItens);
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
                }}/>
                <DeleteButton index={index} itemInDelete={item} onDelete={removeItem}/>
              </div>
            </div>
          )
        })}
      </div>
      <div className="full">
        <a href="/">Testando</a>
      </div>
    </>
  )
}