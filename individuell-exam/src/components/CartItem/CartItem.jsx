import './cartItem.css'
import { useState, useEffect } from 'react';
import { useCartStore } from '../../stores/useCartStore';

const CartItem = ({ticket}) => {

    const dateSplit = ticket.when.date.split(' ');
    const [ count, setCount ] = useState(ticket.qty);
    const { cart, cartAdd, removeFromCart } = useCartStore();

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    function decrease () {
      if(count > 0) {
        setCount(count - 1);
        removeFromCart(ticket.id);
      }
    }
  
    function increase () {
      setCount(count + 1);
      cartAdd(ticket, count);
    }

  return (
    <article className='cartticket'>
        <h2 className="cartticket__name">{ ticket.name }</h2>
        <h3 className='cartticket__when'>{dateSplit[0]} {dateSplit[1].substring(0,3).toUpperCase()} kl {ticket.when.from} - {ticket.when.to}</h3>
        <section className='count-wrapper'>
          <p className='decrease' onClick={decrease}> - </p>
          <p className='count'>{count}</p>
          <p className='increase' onClick={increase}> + </p>
        </section>
    </article>
  )
}

export default CartItem