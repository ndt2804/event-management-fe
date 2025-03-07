import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from "../../assets/logo-light.svg"
import { Home, Search } from 'lucide-react';

const LeftSidebar = () => {
    const { pathname } = useLocation()
    return (
        <nav className="hidden md:flex px-6 py-10 flex-col justify-between min-w-[270px]  border-r "               >
            <div className='flex flex-col gap-11'>
                <Link to='/' className='flex gap-3 items-center'>
                    <img
                        src={logo}
                        alt='logo'
                        width={170}
                        height={36}
                    />
                </Link>
                <ul className='flex flex-col gap-6'>
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;

                        return (
                            <li
                                key={link.label}
                                className={`leftsidebar-link group ${isActive && 'bg-slate-600'}`}
                            >
                                <NavLink
                                    to={link.route}
                                    className='flex gap-4 items-center p-4'
                                >
                                    {link.icon} {/* Render the icon directly here */}
                                    <span className='group-hover:text-white'>
                                        {link.label}
                                    </span>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}
export default LeftSidebar;
export const sidebarLinks = [
    {
        icon: <Home size={24} />,
        route: '/',
        label: 'Home',
    },
    {
        icon: <Search size={24} />,
        route: '/search',
        label: 'Search',
    },
];