import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-context';

const TopSidebar = () => {
    const { user } = useAuth();

    return (
        <div className="flex justify-between items-center p-6 border-b">
            {/* Account Info Section */}
            <div className="flex gap-4 items-center">
                <img
                    src={user?.avatar || '/default-avatar.png'}
                    alt="profile"
                    className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                    <p className="body-bold">{user ? user.fullName : 'Guest'}</p>
                    <p className="small-regular text-light-3">@{user ? user.fullName : 'Guest'}</p>
                </div>
            </div>

            {/* Create Event Button */}
            <Link to="/create-event">
                <button className="px-6 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600">
                    Create Event
                </button>
            </Link>
        </div>
    );
};

export default TopSidebar;
