import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import AuthApi from "./components/home/login/AuthApi"
import Routes from './Routes';

function App() {

    const readCookie = () =>{
        const ida = Cookies.get("ida");
        const idc = Cookies.get("idc");
        const ide = Cookies.get("ide");
        if(ida){
            setAuth(true);
        }
        if(idc)
        {
            setAuc(true)
        }
        if(ide){
            setAue(true);
        }
    }

    useEffect(() => {
        readCookie();
    }, [])

    const [auth,setAuth] = useState(false);
    const [auc,setAuc] = useState(false);
    const [aue,setAue] = useState(false);
    
    return (
        <div>
            <div>
                <AuthApi.Provider value={{auc,setAuc,auth,setAuth,aue,setAue}}>
                    <BrowserRouter>
                        <Routes/>
                    </BrowserRouter>
                </AuthApi.Provider>
            </div>
        </div>
    )
}

export default App