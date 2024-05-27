import { useEffect, useState } from "react";
import { CheckeboxSelect, DeleteButton, Price, formatNumberInCurrency, contItem, createUniqueArray } from "./cart-components";
import { Contador } from "./Contador";
import { AttPrice } from "./AttPrice";

export function Container() {
  useEffect(() => {
    const allCheckbox = document.querySelectorAll(".selectItem");
    const arrayCheckbox = Array.from(allCheckbox);

    arrayCheckbox.map(element => {
      element.checked = true;
    })
  }, [])

  const priceStorage = formatNumberInCurrency(Number(localStorage.getItem("fullPrice"))) ?? 0;
  const jsonItens = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')).item : [];

  const [item, setItem] = useState(jsonItens);
  const [price, setPrice] = useState(priceStorage);

  const cont = contItem(item);
  const cartItens = Object.keys(cont);
  const new_price = new AttPrice();

  const removeItem = (index) => {
    new_price.removeItem(index, jsonItens, item, setPrice, setItem)
  };

  const selectItem = (index) => {
    const copyItens = [...item];
    const uniqueItens = createUniqueArray(copyItens);
    const countItensJson = contItem(jsonItens);
    const price = document.querySelector('#priceAll');
    let newPrice;
    const bodyCheked = Array.from(window.document.querySelectorAll(".selectItem"));

    bodyCheked.map((element) => {
      const testItem = element.parentNode.querySelector('.valueTest').innerText;
      let testNumber = 0;
      
      if (!element.checked) {
        testNumber = countItensJson[uniqueItens[index].image];
        newPrice = new_price.updatePrice(testNumber, testItem);
      }
    });
    
    price.innerHTML = `Subtotal ${formatNumberInCurrency(newPrice)}`;
  }

  const handleSelectAll = () => {
    const selectAll = document.querySelector("#selectAll");
    const selectAllItem = Array.from(document.querySelectorAll(".selectItem"));
    

    if (selectAll.checked) {
      selectAllItem.map((element) => {
        element.checked = true;
      });
    } else {
      selectAllItem.map(element => {
        element.checked = false;
      })
    }
  }

  return (
    <>
      <div className="layoutCart">
        <a href="/" className="linkShop">
          <i className="material-symbols-outlined">arrow_back</i>
          <span>Continuar comprando</span>
        </a>
        {cartItens.map((element, index) => {
          return (
            <div className="itemCart" key={index+1}>
              <CheckeboxSelect index={index} onSelect={selectItem}/>
              <div className="imgCart">
                <img src={element} />
              </div>
              <div className="item">
                <Price value={item[index].value}/>
                <Contador valQuant={cont[element]} itemCart={{
                  image: element,
                  value: item[index].value
                }} setPrice={setPrice} />
                <DeleteButton index={index} onDelete={removeItem}/>
              </div>
            </div>
          )
        })}
      </div>
      <div className="full">
        <input type="checkbox" name="selectAll" id="selectAll" onClick={handleSelectAll}/>
        <label htmlFor="selectAll">Selecionar tudo</label>
        <div>
          <span id="priceAll">Subtotal {formatNumberInCurrency(price)}</span>
          <span>Frete R$ 0,00</span>
          <button>Finalizar compra</button>
        </div>
      </div>
    </>
  )
}