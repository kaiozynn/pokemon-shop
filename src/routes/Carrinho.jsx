import { useLocation } from 'react-router-dom';
import '../style/cart.css'

function Carrinho(props) {
  const location = useLocation();
  const imgs = location.state?.imgs

  console.log(imgs)

  return (
    <>
      <div>ola</div>
    </>
  )
};

export default Carrinho;