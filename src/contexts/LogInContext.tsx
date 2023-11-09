"use client";
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { usePathname } from "next/navigation";
import Swal from "sweetalert2";

export const LogInContext = createContext({});

const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/account-setting`;


export default function LogInContextProvider({ children }: any) {
    const [logInField, setLogInField] = useState({});
    const [show, setShow] = useState(true);
    const [logInState, setLogInState] = useState({});
    const onLogIn = async (userName: any, password: any) => {
      const response = await axios.post(URL, { userName, password });
      console.log(response?.data);
      if (response) {
        console.log("logged");
        // setLogInState({logIn:true, userName:response?.data})
      } else {
        console.log("not logged");
      }
    };
  return (
    <LogInContext.Provider value={{ logInState, onLogIn, show, setShow }}>
      {children}
    </LogInContext.Provider>
  );
}
