import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import AllRoutes from './components/AllRoutes';

function App() {
  return (
    <div className="Container">
      <Navbar/>
      <AllRoutes/>
    </div>
  );
}

export default App;
