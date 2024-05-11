import { useEffect, useState } from "react";

export function Contador({valSpan}) {
  const [button, setButton] = useState(valSpan);

  return (
    <div className="contador">
      <button onClick={() => {setButton(button+1)}}>+</button>
      <span id="test">{button}</span>
      <button onClick={() => {
        if(button !== 1) {
          setButton(button-1)
        } else {
          setButton(1)
        }
      }}>-</button>
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

export function DeleteButton() {
  return (
    <>
      <button className="delete">delete</button>
    </>
  )
}