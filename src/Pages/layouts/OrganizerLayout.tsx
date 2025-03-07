import { Outlet } from 'react-router-dom';
import LeftSidebar from '../../components/layouts/left-side';
import TopSidebar from '../../components/layouts/top-side';

const OrganizerLayout = () => {
    return (
        <div className="flex h-screen w-full">            {/* Left Sidebar - cột cố định với width 270px */}
            <div className="w-[270px] h-full">
                <LeftSidebar />
            </div>

            {/* Right Column - chiếm phần còn lại của màn hình */}
            <div className="flex flex-col flex-1">
                {/* Top Sidebar - nằm trên cùng của cột bên phải */}
                <TopSidebar />

                {/* Main Content - chiếm phần còn lại của cột bên phải */}
                <section className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </section>
            </div>
        </div>
    );
}

export default OrganizerLayout;
