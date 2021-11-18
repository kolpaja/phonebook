// import logo from './logo.svg';
import './App.scss';

import phone from "./utils/assets/imgs/phone.svg";
import notebook from "./utils/assets/imgs/notebook.svg";
import play from "./utils/assets/imgs/play.svg";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="background">
        <div className="title">PHONE BOOK</div>
        <div className="open-book">
          <Link to="/phonebook"><img src={play} alt="click to open book" /></Link>
        </div>
        <img className="notebook" src={notebook} alt="notebook" />
        <div className="phone">
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default App;
