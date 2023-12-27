import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, 
  Route } from "react-router-dom"
import Acceuil from './Components/Acceuil';
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './Components/Login'
import ConfirmerPresence from './Components/ConfirmerPresence'
import Fairerapport from './Components/Fairerapport';
import Mesperformences from './Components/Mesperformences';
import Acceuilclient from './Components/Acceuilclient';
import Notezagent from './Components/Notezagent';
import Superviseur from './Components/Superviseur'; 
import Confirmationnote from './Components/Confirmationnote';
import Admindash from './Components/Admindash';
import Adduser from './Components/Adduser'
import Modifierprofil from  './Components/Modifierprofil'
import Evaluerperformence from './Components/Evaluerperformences'
import Getrapport from './Components/Getrapport'



function App() {
  return (
    <div className="App">
       <Provider store={store}>
       <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/getrapport" element={<Getrapport />} />

            <Route path="/adduser" element={<Adduser />} />
            <Route path="/evaluerperformence" element={<Evaluerperformence />} />
            <Route path="/modifierprofileemploye" element={<Modifierprofil />} />
            <Route path="/admindashboard" element={<Admindash />} />
            <Route path="/acceuilemployee" element={<Acceuil />} />
            <Route path="/confirmerpresence" element={<ConfirmerPresence />} />
            <Route path="/faireunrapport" element={<Fairerapport />} />
            <Route path="/mesperformences" element={<Mesperformences />} />
            <Route path="/Acceuilclient" element={<Acceuilclient />} />
            <Route path="/Notesuragent" element={<Notezagent />} />
            <Route path="/superviseur" element={<Superviseur />} />
            <Route path="/Confirmationnote" element={<Confirmationnote />} />
          </Routes>
        </Router>
       </Provider>
       
    </div>
  );
}

export default App;
