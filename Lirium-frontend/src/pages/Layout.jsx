import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <div className='wrapper-nav'>
        <header className='header'>
          <h1 className='nav-h1'>Lirium-Protocol</h1>
          <nav>
            <ul className='nav-ul'>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
              <li>
                <NavLink to={'/transactions'}>Transactions</NavLink>
              </li>
              <li>
                <NavLink to={'/sendtransaction'}>Send</NavLink>
              </li>
              <li>
                <NavLink to={'/signup'}>Sign-Up</NavLink>
              </li>
              <li>
                <NavLink to={'/login'}>Login</NavLink>
              </li>
              <li>
                <NavLink to={'/logout'}>Logout</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
};
