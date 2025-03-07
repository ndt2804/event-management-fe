import './index.css'
import { Routes, Route } from 'react-router-dom'
import RootLayout from './Pages/layouts/RootLayout'
import AuthLayout from './Pages/layouts/AuthLayout'
import OrganizerLayout from './Pages/layouts/OrganizerLayout'
import EventPage from './Pages/event'
import CreateEventPage from './Pages/create-event'
import SignIn from './Pages/sign-in'
import SignUp from './Pages/sign-up'
import ForgotPassword from './Pages/forgot-password'
import ChangePassword from './Pages/change-password'
import Home from './Pages/home'
import Profile from './Pages/profile'
function App() {
  return (
    <>
      <main className='flex h-screen mx-auto'>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path='/sign-in' element={<SignIn />} />
            <Route path='/sign-up' element={<SignUp />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/change-password' element={<ChangePassword />} />
          </Route>
          <Route element={<OrganizerLayout />}>
            <Route path='/organizer/events' element={<EventPage />} />
            <Route path='/organizer/events/create' element={<CreateEventPage />} />

          </Route>
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/my-profile" element={<Profile />} />
          </Route>
        </Routes>
      </main>

    </>
  )
}

export default App
