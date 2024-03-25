import { useLocation } from 'react-router-dom';
import '../style/cart.css'

function Carrinho() {
  const location = useLocation();
  const imgs = location.state?.imgs

  return (
    <main>
      {imgs.map((ele, index) => {
        return (
          <img src={ele} alt="" key={index+1}/>
        )
      })}
    </main>
  )
};

export default Carrinho;