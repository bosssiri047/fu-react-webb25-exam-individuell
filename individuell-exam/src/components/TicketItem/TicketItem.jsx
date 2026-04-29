import './ticketItem.css'
import { useNavigate } from 'react-router-dom'

const TicketItem = ({ticket}) => {

    const navigate = useNavigate();
    const onClick = () => {
        navigate(`/tickets/${ticket.id}`);
    }
    const dateSplit = ticket.when.date.split(' ');

  return (
    <article className='ticket' onClick={onClick}>
        <section className='left-wrapper'>
            <h2 className='ticket__when1'>{dateSplit[0]}</h2>
            <h2 className='ticket__when2'>{dateSplit[1].substring(0,3).toUpperCase()}</h2>
        </section>
        <section className='right-wrapper'>
            <h2 className="ticket__name">{ ticket.name }</h2>
            <p className='ticket__where'>{ ticket.where }</p>
            <section className='right__sub-wrapper'>
                <p className='ticket__from-to'>{ticket.when.from} - {ticket.when.to}</p>
                <p className='ticket__price'>{ticket.price} sek</p>
            </section>
        </section>
    </article>
  )
}

export default TicketItem