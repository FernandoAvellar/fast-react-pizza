import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import { Outlet } from 'react-router-dom/dist';

function AppLayout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
