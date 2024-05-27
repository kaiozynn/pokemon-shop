import { useEffect } from "react";

export function Price({value}) {
  return (
    <>
      <div>
        <span className="valueTest">{value}</span>
      </div>
    </>
  )
}

export function DeleteButton({index, onDelete}) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <>
      <button className="delete material-symbols-outlined" onClick={handleDelete}>delete</button>
    </>
  )
}

export function CheckeboxSelect({index, onSelect}) {
  const handleUpdate = (ev) => {
    if(!ev.target.checked) {
      onSelect(index)
    };
  }

  return (
    <input type="checkbox" name="selectItem" className="selectItem" onClick={handleUpdate}/>
  )
}


export function clearNumberCurrency(numeroFormatado) {
  return numeroFormatado.replace(/[^\d,-]/g, '').replace(',', '.');
}

export function formatNumberInCurrency(number) {
  return number.toLocaleString('pt-br', {style: 'currency', currency: "BRL"})
}

export function contItem(itemInCount) {
  let count = {}; // faz a countagem dos itens armazena em um objeto colocando o nome do elemento como chave do objeto e depois a quantidade como valor

  itemInCount.map((element) => {
    if(count[element.image]) {
      count[element.image]++;
    } else {
      count[element.image] = 1;
    }
  })

  return count;
}

export function createUniqueArray(array) {
  return array.filter((obj, index, self) =>
    index === self.findIndex((o) => (
        o.image === obj.image
    ))
  );
}