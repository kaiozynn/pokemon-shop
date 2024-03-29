function contItem(item) {
  let cont = {} // faz a contagem dos itens armazena em um array colocando o nome do elemento como chave do objeto
  // e depois a quanntidade como valor

  for (let index of item) { // Onde realiza a contagem
    if(cont[index]) {
      cont[index]++ // Caso exista adiciona +1
    } else {
      cont[index] = 1 // Caso n exista passa a ter valor 1
    }
  }
  return cont
}

export function Container(props) {
  const arrayImg = props.img
  const cont = contItem(arrayImg)
  const imgs = Object.keys(cont)

  return (
    <div>
      {imgs.map((element, index) => {
        return (
          <div key={index+1}>
            <img src={element} alt="" />
          </div>
        )
      })}
    </div>
  )
}