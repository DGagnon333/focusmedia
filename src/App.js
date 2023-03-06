import { NavigationBar, BackgroundVideo } from './components';
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Home, Contact, Services } from './pages';

function App() {
  return (
    <div className="App bg-black">
      <BackgroundVideo className='opacity-50' />
      <Router>
        <NavigationBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;