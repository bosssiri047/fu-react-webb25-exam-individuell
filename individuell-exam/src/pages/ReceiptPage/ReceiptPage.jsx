import './receiptPage.css';
import { useReceiptStore } from '../../stores/useReceiptStore';
import { useCartStore } from '../../stores/useCartStore';
import { useEffect, useState } from 'react';
import ReceiptItem from '../../components/ReceiptItem/ReceiptItem';
import Icon from '../../components/Icon/Icon';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';


const ReceiptPage = () => {
  const { receipt, cartToReceipt } = useReceiptStore();
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    receipt.sort((a, b) => {
      if(a.seat < b.seat) {
        return -1;
      } else if (a.seat > b.seat) {
        return 1;
      } else return 0;
    })
    setSorted(true);
    console.log(receipt);
  }, [receipt])

  return (
    sorted === true ?
    <div className="receiptpage-wrapper">
      <Icon name='home'/>
       <section className="receipt__list">
         <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      // spaceBetween={50}
      // slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
          {
              receipt.map(ticket => {
                  return <SwiperSlide><ReceiptItem
                      key={ ticket.uid } 
                      ticket={ ticket }
                  /></SwiperSlide>
              })
          }
          
          </Swiper>
      </section>
    </div>
    : null
  )
}

export default ReceiptPage
