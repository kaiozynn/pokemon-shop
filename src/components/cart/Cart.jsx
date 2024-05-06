import { useState } from "react";
import { Contador, Price } from "./cart-components";

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
  const imgs = Object.keys(cont);

  return (
    <div>
      {imgs.map((element, index) => {
        return (
          <div className="itemCart" key={index+1}>
            <div>
              <img src={element} />
            </div>
            <div className="item">
              <Price value={img[index].valueItem} valSpan={valSpan}/>
              <Contador onChange={setValorSpan}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}