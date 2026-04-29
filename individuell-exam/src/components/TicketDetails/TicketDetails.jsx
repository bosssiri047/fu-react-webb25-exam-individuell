import './ticketDetails.css'
import Button from '../Button/Button';
import { useState, useEffect } from 'react';
import { useCartStore } from '../../stores/useCartStore';

const TicketDetails = ({ticket}) => {

  const dateSplit = ticket.when.date.split(' ');
  const [count, setCount] = useState(1);
  const { cart, addToCart } = useCartStore();

  useEffect(() => {
      console.log(cart);
  }, [cart]);

   function decrease () {
      if(count > 0)
        setCount(count - 1);
    }
  
    function increase () {
      setCount(count + 1);
    }
  

  return (
    <article className='single-ticket'>
        <h2 className="single-ticket__name">{ ticket.name }</h2>

        <h3 className='single-ticket__when'>{dateSplit[0]} {dateSplit[1].substring(0,3).toUpperCase()} kl {ticket.when.from} - {ticket.when.to}</h3>

        <h3 className='single-ticket__where'>@ { ticket.where }</h3>
        
        <section className='price-wrapper'>
            <p className='single-ticket__price'>{ticket.price * count} sek</p>
            <section className='count-wrapper'>
              <p className='decrease' onClick={decrease}> - </p>
              <p className='count'>{count}</p>
              <p className='increase' onClick={increase}> + </p>
            </section>
        </section>
        <Button text='Add to cart' onClick={ () => addToCart(ticket, count) }/>
    </article>
  )
}

export default TicketDetails