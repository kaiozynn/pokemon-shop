import { useEffect, useState } from "react";
import { AttFullPrice } from "../shop/shop";

export function Contador({valQuant, itemCart, setPrice}) {
  const [quant, setQuant] = useState(valQuant);

  useEffect(() => {
    setQuant(valQuant)
  }, [valQuant]);

  let count = JSON.parse(localStorage.getItem("cart")).count;
  const item = JSON.parse(localStorage.getItem('cart')).item;

  const handleDownValue = (ev) => {
    const attPrice = new AttFullPrice(ev);
    const decreasePrice = attPrice.downValue();

    if(quant !== 1) {
      setQuant(quant-1);
      count--;
      item.splice(item.find((ele) => ele.image === itemCart.image), 1);

      const decreaseItem = {
        count,
        item
      };

      setPrice(decreasePrice);
      localStorage.setItem("fullPrice", decreasePrice);
      localStorage.setItem("cart", JSON.stringify(decreaseItem));
    } else {
      setQuant(1);
    }
  }

  const handleUpValue = (ev) => {
    const attPrice = new AttFullPrice(ev);
    const increasePrice = attPrice.upValue();

    setQuant(quant+1);
    count++;
    item.push(itemCart);

    const increaseItem = {
      count,
      item
    }
    
    setPrice(increasePrice);
    localStorage.setItem("fullPrice", increasePrice);
    localStorage.setItem("cart", JSON.stringify(increaseItem));
  }

  return (
    <div className="contador">
      <button onClick={handleUpValue}>+</button>
      <span id="quantItem">{quant}</span>
      <button onClick={handleDownValue}>-</button>
    </div>
  );
}