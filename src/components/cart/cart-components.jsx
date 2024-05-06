import { useEffect, useRef, useState } from "react";

export function Contador({onChange}) {
  const [button, setButton] = useState(1);
  
  const handleDown = () => {
    if (button == 1){
      setButton(1)
    } else {
      setButton(button-1)
    }
  }

  useEffect(() => {
    onChange(button);
  }, [button, onChange]);

  return (
    <div>
      <button onClick={() => setButton(button+1)}>+</button>
      <span id="test">{button}</span>
      <button onClick={handleDown}>-</button>
    </div>
  );
}

function AttValue(value){
  this.value = value
  this.valueClean = Number(this.value.replace(/[^\d,]/g, '').replace(',', '.'));
}
AttValue.prototype.upValue = function(valSpan, valueItem) {
  if(valSpan !== 0) {
    this.value = this.valueClean * (valSpan+1);
    valueItem.innerHTML = this.value.toLocaleString("pr-br", {style: "currency", currency: "BRL"})
  }
}
AttValue.prototype.downValue = function(valSpan, valueItem) {
  if(valSpan !== 1) {
    this.value = this.valueClean * (valSpan-1);
    valueItem.innerHTML = this.value.toLocaleString("pr-br", {style: "currency", currency: "BRL"})
  }
}

export function Price({value, valSpan}) {
  useEffect(() => {
    const b = document.querySelector("body");
    b.addEventListener('click', (ev) => {
      const item = ev.target.parentNode.parentNode;
      const valueItem = item.querySelector(".valueTest")
      const attValue = new AttValue(value)
      
      if (ev.target.innerHTML == "+") {
        attValue.upValue(valSpan, valueItem)
      } else if(ev.target.innerHTML == "-") {
        attValue.downValue(valSpan, valueItem)
      }
      
    });
  }, [valSpan]);

  return (
    <div>
      <span className="valueTest">{value}</span>
    </div>
  )
}