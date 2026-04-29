import './ticketsPage.css'
import TicketItem from '../../components/TicketItem/TicketItem';
import { useTicketStore } from '../../stores/useTicketStore';
import { useEffect, useState } from 'react';
import Icon from '../../components/Icon/Icon';

const TicketsPage = () => {
    const { tickets, loading, error } = useTicketStore();
    console.log(tickets);

    if(loading) return <p>Loading...</p>
    if(error) return <p>Error!</p>

  return (
    <>
            <h1 className='ticket-title'>Events</h1>
            <section className="searchbar-wrapper">
                <input type="text" className='searchbar' id='searchbar'/>
                <Icon name='magnify' />
            </section>
            <Icon name='back'/>
            <Icon name='cart'/>
            <section className="ticket__list">
                {
                    tickets.map(ticket => {
                        return <TicketItem 
                            key={ ticket.id } 
                            ticket={ ticket }
                        />
                    })
                }
            </section>
        </>
  )
}

export default TicketsPage