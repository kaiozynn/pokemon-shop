import { useEffect, useState } from "react";
import { Contador, DeleteButton, Price } from "./cart-components";

function contItem(item) {
  let cont = {} // faz a contagem dos itens armazena em um objeto colocando o nome do elemento como chave do objeto e depois a quantidade como valor
  
  let contador = 1;

  item.map((element) => {
    if(cont[element.nextImage]) {
      cont[element.nextImage] = ++contador
    } else {
      cont[element.nextImage] = 1;
    }
  })

  return cont
}

export function Container() {
  let jsonImg = [];
  if (JSON.parse(localStorage.getItem('cart'))) jsonImg = JSON.parse(localStorage.getItem('cart')).img;

  const [img, setImg] = useState(jsonImg);
  const cont = contItem(img);
  const imgs = Object.keys(cont);

  const removeItem = (index) => {
    const newItens = [...img];
    let uniqueArray = newItens.filter((obj, index, self) =>
      index === self.findIndex((o) => (
          o.nextImage === obj.nextImage
      ))
    );
    uniqueArray.splice(index, 1);
    setImg(uniqueArray);
  };

  return (
    <>
      <div className="layoutCart">
        {imgs.map((element, index) => {
          return (
            <div className="itemCart" key={index+1}>
              <div>
                <img src={element} />
              </div>
              <div className="item">
                <Price value={img[index].valueItem}/>
                <Contador valSpan={cont[element]}/>
                <DeleteButton index={index} item={img} onDelete={removeItem}/>
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