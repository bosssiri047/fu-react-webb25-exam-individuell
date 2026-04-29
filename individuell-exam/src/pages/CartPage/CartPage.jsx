import CartItem from '../../components/CartItem/CartItem'
import './cartPage.css'
import { useCartStore } from '../../stores/useCartStore';
import { useEffect} from 'react';
import Button from '../../components/Button/Button';
import Icon from '../../components/Icon/Icon';
import { useNavigate } from 'react-router-dom';
import { useReceiptStore } from '../../stores/useReceiptStore';

const CartPage = () => {
  const { cart, cartReset } = useCartStore();
  const navigate = useNavigate();
  const { receipt, cartToReceipt } = useReceiptStore();
  
  const toReceipt = () => {
    if (cart.length > 0) {
      cart.map(ticket => {
        const length = ticket.qty;
        for(let i = 1; i <= length; i++) {
          cartToReceipt(ticket);
        }
      })
      cartReset();
      cart
      navigate('/receipt');
    }
  }

  useEffect(() => {
      console.log(cart);
  }, [cart]);


  return (
    <div className="cart-wrapper">
      <Icon name='back'/>
      <h1 className='cart__title'>Order</h1>
       <section className="cart__list">
          {
              cart.map(ticket => {
                  return <CartItem
                      key={ ticket.id } 
                      ticket={ ticket }
                  />
              })
          }
      </section>
      <section className='cart__bottom'>
        <h3 className="cart__subtitle">Totalt värde på order</h3>
        <p className="cart__totalprice">{ cart.reduce((acc, ticket) => acc + ticket.price*ticket.qty, 0) } sek</p>
        <Button text='Send order' onClick={ toReceipt }/>
      </section>
    </div>
  )
}

export default CartPage