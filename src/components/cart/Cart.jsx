import { useState } from "react";
import { Contador, DeleteButton, Price } from "./cart-components";

function contItem(item) {
  let cont = {} // faz a contagem dos itens armazena em um objeto colocando o nome do elemento como chave do objeto
  // e depois a quanntidade como valor
  
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

export function Container({img}) {
  const [valSpan, setValorSpan] = useState(1);
  const cont = contItem(img);
  console.log(cont)
  const imgs = Object.keys(cont);

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
                <Contador onChange={setValorSpan}  valSpan={cont[element]}/>
                <DeleteButton />
              </div>
            </div>
          )
        })}
      </div>
      <div className="full">
        
      </div>
    </>
  )
}