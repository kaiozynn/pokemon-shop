import '../style/cart.css'

function Carrinho() {
  return (
    <>
      <div className='container-cart-itens'>
        <div className="item-card">
        <div className="item-img">
          <img src="" alt="imagem" className="img" />
        </div>
        <div className="info-item">
          <h3 className="title-item">
          </h3>
          <div className="quant-item">
            <input type="button" value="-" className="min" />
            <input type="number" name="" id="" className="quant" value="" />
            <input type="button" value="+" className="plus" />
          </div>
          <div className="extra">
            <div>value item</div>
            <button className="delete">
              <i className="material-symbols-outlined">delete_forever</i>
            </button>
          </div>
        </div>
      </div>
  <div className="total">
    <div style={{position: 'fixed', backgroundColor: 'aquamarine'}}>
      <div style={{backgroundColor: 'bisque'}}>ola</div>
    </div>
  </div>
  <a href="/">Continuar comprando</a>
      </div>
    </>
  )
};

export default Carrinho;