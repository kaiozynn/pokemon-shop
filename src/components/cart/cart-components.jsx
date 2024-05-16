import { useEffect, useState } from "react";

export function Contador({valSpan}) {
  const [button, setButton] = useState(valSpan);

  const handleDownValue = () => {
    if(button !== 1) {
      setButton(button-1)
    } else {
      setButton(1)
    }
  }

  return (
    <div className="contador">
      <button onClick={() => {setButton(button+1)}}>+</button>
      <span id="test">{button}</span>
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

export function DeleteButton({index, item, onDelete}) {
  const handleDelete = () => {
    onDelete(index);
  };

  return (
    <>
      <button className="delete" onClick={handleDelete}>delete</button>
    </>
  )
}