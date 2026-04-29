import './layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <main className="page">
            <div className="wrapper">
                <Outlet />
            </div>
        </main>
    )
}

export default Layout