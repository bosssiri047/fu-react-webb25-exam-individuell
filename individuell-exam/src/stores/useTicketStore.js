import { create } from 'zustand';
import axios from 'axios';

export const useTicketStore = create(set => ({
    tickets : [],
    loading : false,
    error : false,
    fetchTickets : () => {
        set({ loading : true });
        axios.get('https://santosnr6.github.io/Data/events.json')
            .then(response => {
                set({ tickets : response.data.events, loading : false });
            }).catch(() => {
                set({ error : true, loading : false });
            })
    }
}));