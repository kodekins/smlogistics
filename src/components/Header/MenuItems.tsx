import { Link, useLocation } from 'react-router-dom';

const MenuItems = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Define menu structure with routes
  const menuRoutes = {
    home: ['/'],
    services: ['/service', '/international-transport', '/track-transport', '/personal-delivery', '/ocean-transport', '/warehouse-facility', '/emergency-transport'],
  };

  // Helper to check if current path matches any routes in array
  const isActive = (routes: any) => routes.includes(currentPath);

  return (
    <ul className="main-menu__list">
      <li className={currentPath === '/' ? 'current-menu-item' : ''}>
        <Link to="/" className={currentPath === '/' ? 'active-menu' : ''}>
          Home
        </Link>
      </li>
      <li className={currentPath === '/about' ? 'current-menu-item' : ''}>
        <Link to="/about" className={currentPath === '/about' ? 'active-menu' : ''}>
          About Us
        </Link>
      </li>
      <li className={currentPath === '/why-us' ? 'current-menu-item' : ''}>
        <Link to="/why-us" className={currentPath === '/why-us' ? 'active-menu' : ''}>
          Why Us
        </Link>
      </li>
      <li className={isActive(menuRoutes.services) ? 'dropdown current-menu-item' : 'dropdown'}>
        <Link to="/service">Services</Link>
        <ul className="sub-menu">
          <li>
            <Link to="/track-transport" className={currentPath === '/track-transport' ? 'active-menu' : ''}>
              LTL (Less Than Truckload)
            </Link>
          </li>
          <li>
            <Link to="/international-transport" className={currentPath === '/international-transport' ? 'active-menu' : ''}>
              FTL (Full Truckload)
            </Link>
          </li>
          <li>
            <Link to="/personal-delivery" className={currentPath === '/personal-delivery' ? 'active-menu' : ''}>
              Interstate Transport
            </Link>
          </li>
          <li>
            <Link to="/ocean-transport" className={currentPath === '/ocean-transport' ? 'active-menu' : ''}>
              Reefer Transport
            </Link>
          </li>
          <li>
            <Link to="/track-transport?type=dumptruck" className={currentPath === '/track-transport' ? 'active-menu' : ''}>
              Dump Truck
            </Link>
          </li>
        </ul>
      </li>
      <li className={currentPath === '/faq' ? 'current-menu-item' : ''}>
        <Link to="/faq" className={currentPath === '/faq' ? 'active-menu' : ''}>
          FAQs
        </Link>
      </li>
    </ul>
  );
};

export default MenuItems;
