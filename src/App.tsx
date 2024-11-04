import Header from './components/Header.tsx';
import Sidebar from './components/Sidebar.tsx';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './dashboard/Dashboard.tsx';
import Products from './products/Products.tsx';
import EventDetails from './eventDetails/EventDetails.tsx';

function App() {

  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <div className="grow flex container mx-auto">
        <Sidebar />
        <div>
          <Routes>
            <Route path="" element={<Dashboard />} />
            <Route
              path="events/:eventId"
              element={<EventDetails />}
            />
            <Route path="products" element={<Products />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
