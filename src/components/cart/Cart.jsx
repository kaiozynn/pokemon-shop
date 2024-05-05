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
  const cont = contItem(img)
  const imgs = Object.keys(cont)

  return (
    <div>
      {imgs.map((element, index) => {
        return (
          <div key={index+1}>
            <img src={element} />
          </div>
        )
      })}
    </div>
  )
}