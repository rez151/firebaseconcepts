import './App.css'
import SignIn from "./components/SignIn";
import {Navigate, Route, Routes} from 'react-router-dom';
import Dashboard from "./components/hub/Dashboard";
import {useState} from "react";


export default function App() {

  const [auths] = useState<boolean>(false);

  return (<Routes>
      <Route path="/" element={<Navigate to={auths ? "/home" : "/login"}/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/home" element={<Dashboard/>}/>
    </Routes>

  )
}

