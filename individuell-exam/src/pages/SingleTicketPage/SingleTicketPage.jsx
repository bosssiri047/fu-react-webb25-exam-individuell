import './singleTicketPage.css'
import { useParams } from "react-router-dom"
import { useTicketStore } from "../../stores/useTicketStore";
import TicketDetails from "../../components/TicketDetails/TicketDetails";
import Icon from '../../components/Icon/Icon';

const SingleTicketPage = () => {
  const { tickets, loading, error } = useTicketStore();
  const { id } = useParams();

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return (
    <div className="singlepage-wrapper">
      <h1 className='single__title'>Events</h1>
      <Icon name='back'/>
      <Icon name='cart'/>
      <h3 className="single__subtitle">You are about to score some tickets to</h3>
      <section className="single__details">
          {
              tickets.map(ticket => {
                if (ticket.id === id) {
                  return <TicketDetails 
                      key = { ticket.id } 
                      ticket = { ticket }
                  />
                }
              })
          }
      </section>
    </div>
  )
}

export default SingleTicketPage