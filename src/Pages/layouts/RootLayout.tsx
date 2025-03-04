import { Outlet } from 'react-router-dom'
import Header from '../../components/layouts/header'
const RootLayout = () => {

    return (
        <div className='w-full'>
            <Header />
            <Outlet />
        </div>
    )
}

export default RootLayout