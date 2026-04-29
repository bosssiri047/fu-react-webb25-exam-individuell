import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import { useTicketStore } from './stores/useTicketStore';
import { useEffect } from 'react';


function App() {
  const fetchTickets = useTicketStore(state => state.fetchTickets);

  useEffect(() => {
    fetchTickets();
  }, [fetchTickets]);

  return (
    <div className='app'>
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
