import { create } from 'zustand';
import { randomSection, randomSeat } from '../utils/randomSection';
import { v4 as uuid } from "uuid";

export const useReceiptStore = create(set => ({
    receipt : [],
    cartToReceipt : (ticket) => {
        set(state => {
            delete ticket.qty;
            const ticketInReceipt = state.receipt.find(t => t.id === ticket.id);
            if (ticketInReceipt) {
               return { receipt: [...state.receipt, {...ticket, section : ticketInReceipt.section ,seat : ticketInReceipt.seat++, uid : uuid().substring(0,5)}] }
            } else { 
               return { receipt: [...state.receipt, {...ticket, section : `${randomSection()}`, seat : `${randomSeat()}`, uid : uuid().substring(0,5)}] }
        }
    })},
}));