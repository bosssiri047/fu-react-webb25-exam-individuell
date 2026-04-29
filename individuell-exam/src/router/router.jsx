import Layout from "../components/Layout/Layout";
import HomePage from "../pages/HomePage/HomePage";
import TicketsPage from "../pages/TicketsPage/TicketsPage";
import SingleTicketPage from "../pages/SingleTicketPage/SingleTicketPage";
import CartPage from "../pages/CartPage/CartPage";
import ReceiptPage from "../pages/ReceiptPage/ReceiptPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path : '/',
      element : <Layout />,
      children : [
        {
          index: true,
          element : <HomePage />
        },
        {
          path: 'tickets',
          element : <TicketsPage />
        },
        {
          path: 'tickets/:id',
          element : <SingleTicketPage />
        },
        {
          path: 'cart',
          element : <CartPage />
        },
        {
          path: 'receipt',
          element : <ReceiptPage />
        }
      ]
    }
]);