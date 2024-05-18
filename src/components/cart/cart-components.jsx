import { useState } from "react";

export function Contador({valQuant, itemCart}) {
  const [quant, setQuant] = useState(valQuant);
  let count = JSON.parse(localStorage.getItem("cart")).count;
  const item = JSON.parse(localStorage.getItem('cart')).item;

  const handleDownValue = () => {
    if(quant !== 1) {
      setQuant(quant-1)
      count--;
      item.splice(item.find((ele) => ele.image === itemCart.image), 1);

      const decreaseItem = {
        count,
        item
      };

      localStorage.setItem("cart", JSON.stringify(decreaseItem));
    } else {
      setQuant(1);
    }
  }

  const handleUpValue = () => {
    setQuant(quant+1);
    count++;
    item.push(itemCart);

    const increaseItem = {
      count,
      item
    }

    localStorage.setItem("cart", JSON.stringify(increaseItem));
  }

  return (
    <div className="contador">
      <button onClick={handleUpValue}>+</button>
      <span id="test">{quant}</span>
      <button onClick={handleDownValue}>-</button>
    </div>
  );
}

export function Price({value}) {
  return (
    <>
      <div>
        <span className="valueTest">{value}</span>
      </div>
    </>
  )
}

export function DeleteButton({index, itemInDelete, onDelete}) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <>
      <button className="delete" onClick={handleDelete}>delete</button>
    </>
  )
}