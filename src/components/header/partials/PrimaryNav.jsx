import Link from 'next/link';
import Arrow from '../../../../public/images/icons/down-arrow.svg';

const PrimaryNav = () => {
  const menuItems = [
    {
      title: 'Home',
      url: false,
      children: [
        { title: 'Home 1', url: '/' },
        { title: 'Home 2', url: '/home-2' },
        { title: 'Home 3', url: '/home-3' },
        { title: 'Home 4', url: '/home-4' },
      ],
    },
    {
      title: 'Shop',
      url: false,
      children: [
        { title: 'Shop List', url: '/shop-list' },
        { title: 'Shop Grid', url: '/shop-grid' },
      ],
    },
    {
      title: 'Product',
      url: false,
      children: [
        { title: 'Default', url: '/default' },
        { title: 'Center', url: '/center' },
      ],
    },
    {
      title: 'Pages',
      url: false,
      children: [
        { title: 'About', url: '/about' },
        { title: 'Contact', url: '/contact' },
        { title: 'Faq', url: '/faq' },
        { title: '404', url: '/404' },
      ],
    },
    {
      title: 'User Account',
      url: false,
      children: [
        { title: 'Orders', url: '/orders' },
        { title: 'Profile', url: '/profile' },
        { title: 'Wishlist', url: '/wishlist' },
        { title: 'Cart', url: '/cart' },
      ],
    },
    {
      title: 'Demos',
      url: '/demos',
    },
  ];
  return (
    <div className="main_navigation_wrapper">
      <ul className="menu flex items-center">
        {menuItems &&
          menuItems.map((item) => (
            <li
              key={item.title}
              className={`menu_item ${
                item.children ? 'menu_has_children' : ''
              } relative group ml-10 flex items-center`}
            >
              {item.url ? (
                <Link href={item.url}>
                  <a className="block pb-4">{item.title}</a>
                </Link>
              ) : (
                <span className="block pb-4 cursor-pointer">
                  {item.title}
                  <span className="svg_icon w-[.6rem] ml-[.5rem] mt-[2px]">
                    <Arrow />
                  </span>
                </span>
              )}

              {item.children && (
                <ul className="sub-menu absolute top-10 bg-white shadow-lg rounded-lg py-2 transition-all ease-in duration-200 transform opacity-0 scale-y-0 origin-top group-hover:opacity-100 group-hover:scale-y-100">
                  {item.children.map((child) => (
                    <li
                      key={child.title}
                      className={`menu_item ${child.children ? 'menu_has_children' : ''} w-52`}
                    >
                      {child.url ? (
                        <Link href={child.url}>
                          <a className="block px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100">
                            {child.title}
                          </a>
                        </Link>
                      ) : (
                        <span className="block cursor-pointer px-4 py-2 transition-all ease-in duration-200 hover:text-theme_green hover:bg-theme_green-100">
                          {child.title}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PrimaryNav;
