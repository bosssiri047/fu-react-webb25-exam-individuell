import React from 'react'
import Barcode from 'react-barcode';
import './receiptItem.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const ReceiptItem = ({ ticket }) => {

    const dateSplit = ticket.when.date.split(' ');

  return (
    <article className="receipt-wrapper">
        <section className="what-container">
            <p className='container-label'>WHAT</p>
            <h2 className="receipt__name">{ ticket.name }</h2>
        </section>
        <section className="where-container">
            <p className='container-label'>WHERE</p>
            <h2 className="receipt__where">{ ticket.where }</h2>
        </section>

        <section className="date-container">
            <section className="when-container">
                <p className="container-label">WHEN</p>
                <h2 className="receipt__when">{dateSplit[0]} {dateSplit[1].substring(0,3)}</h2>
            </section>
            <section className="from-container">
                <p className="container-label">FROM</p>
                <h2 className="receipt__from">{ ticket.when.from }</h2>
            </section>
            <section className="to-container">
                <p className="container-label">TO</p>
                <h2 className="receipt__to">{ ticket.when.to }</h2>
            </section>
        </section>

        <section className="info-container">
            <p className="container-label">INFO</p>
            <p className="receipt__info">Section { ticket.section } - seat { ticket.seat }</p>
        </section>

        <section className="barcode-container">
            <Barcode className="barcode" value={ticket.uid} height={60} fontSize={25} background='var(--receipt-barcode)' />
        </section>
    </article>
  )
}

export default ReceiptItem