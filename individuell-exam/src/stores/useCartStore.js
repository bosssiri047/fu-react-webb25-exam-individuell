import { create } from 'zustand';

export const useCartStore = create(set => ({
    cart : [],
    addToCart : (ticket, count) => {
        set(state => {
            const ticketInCart = state.cart.find(t => t.id === ticket.id);
            if(ticketInCart) {
                return {
                    cart : state.cart.map(t => {
                        if(t.id === ticket.id) {
                            return { ...t, qty : t.qty + count }
                        } else return t;
                    })
                }
            } else {
                return {
                    cart : [...state.cart, {...ticket, qty : count }]
                }
            }
        })
    },
    removeFromCart : (id, count) => {
        set(state => {
            const ticketInCart = state.cart.find(t => t.id === id);
            if(ticketInCart.qty === 1) {
                return {
                    cart : state.cart.filter(t => t.id !== id)
                }
            } else {
                return {
                    cart : state.cart.map(t => {
                        if(t.id === id) {
                            return { ...t, qty : t.qty - 1 }
                        } else return t;
                    })
                }
            }
        })
    },
    cartAdd : (ticket) => {
        set(state => {
            const ticketInCart = state.cart.find(t => t.id === ticket.id);
            if(ticketInCart) {
                return {
                    cart : state.cart.map(t => {
                        if(t.id === ticket.id) {
                            return { ...t, qty : t.qty + 1 }
                        } else return t;
                    })
                }
            } else {
                return t;
            }
        })
    },
    cartReset : () => {
        set({ cart : [] })
    }

}));