import { useLocation } from 'react-router-dom';
import "../style/cart/cart.css"
import { Container } from '../components/cart';

function Carrinho() {
  const location = useLocation();
  const imgs = location.state?.imgs

  return (
    <div className='cartBody'>
      <Container img={imgs}/>
    </div>
  )
};

export default Carrinho;