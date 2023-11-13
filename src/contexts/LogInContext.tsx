"use client";
import axios from "axios";
import { createContext, useEffect, useState, useContext } from "react";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const LogInContext = createContext({});

const URL = `${process.env.NEXT_PUBLIC_APP_URL}/api/account-setting`;

export default function LogInContextProvider({ children }: any) {
  const [logInField, setLogInField] = useState({ userName: "", password: "" });
  const [show, setShow] = useState(false);
  const [registerField, setRegisterField] = useState({});
  const [logInState, setLogInState] = useState({});
  const router = useRouter();
  const onLogIn = async () => {
    const userName = logInField?.userName;
    const password = logInField?.password;
    const response = await axios.post(URL, { userName, password });

    if (response?.data?.checkUserName) {
      const userName = response?.data?.checkUserName?.userName;
      const firstName = response?.data?.checkUserName?.firstName;
      const lastName = response?.data?.checkUserName?.lastName;
      const companyName = response?.data?.checkUserName?.companyName;
      const _id = response?.data?.checkUserName?._id;
      const role = response?.data?.checkUserName?.role;
      console.log("logged");
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Signing In!",
        text: `Welcome back ${firstName} ${lastName}`,
        showConfirmButton: false,
        timer: 1500,
      });
      setShow(!show);
      window.localStorage.setItem("user", _id);
      setLogInState({
        ...logInState,
        logInIssue: "",
        isLoggedIn: true,
        userName,
        firstName,
        lastName,
        companyName,
        _id,
        role,
      });
      router.push(`/page/member/${_id}`);
      // setLogInState({logIn:true, userName:response?.data})
    } else if (response?.data?.error == "user not found") {
      console.log("NOT FOUND");
      Swal.fire({
        icon: "error",
        title: "Username not Found!",
        text: "Please enter valid username",
      });
      setLogInState({ ...logInState, logInIssue: "userNotFound" });
    } else if (response?.data?.error == "incorrect password") {
      console.log("INCORRECT PASS");
      Swal.fire({
        icon: "error",
        title: "Incorrect Password!",
        text: "Please enter correct password",
        footer: '<a href="#">Forgot your password?</a>',
      });
      setLogInState({ ...logInState, logInIssue: "incorrectPassword" });
    }
  };

  const onLogOut = () => {
    Swal.fire({
      title: "Are you sure",
      text: "You want to sign out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, sign me out!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Signed out!",
          text: "See you again soon!",
          icon: "success",
        });
        window.localStorage.removeItem("user");
        setLogInState({});
        router.push("/page");
      }
    });
  };

  useEffect(() => {
    const userID = window.localStorage.getItem("user");

    const fetchUser = async () => {
      const response = await axios.post(URL, {
        type: "checkLogIn",
        _id: userID,
      });
      const userName = response?.data?.userName;
      const firstName = response?.data?.firstName;
      const lastName = response?.data?.lastName;
      const companyName = response?.data?.companyName;
      const _id = response?.data?._id;
      const role = response?.data?.role;
      setLogInState({
        ...logInState,
        logInIssue: "",
        isLoggedIn: true,
        userName,
        firstName,
        lastName,
        companyName,
        _id,
        role,
      });
    };

    userID && fetchUser();
  }, []);

  useEffect(() => {
    setLogInField({ userName: "", password: "" });
    setLogInState({ ...logInState, logInIssue: "" });
  }, [show]);

  return (
    <LogInContext.Provider
      value={{
        logInState,
        onLogIn,
        onLogOut,
        show,
        setShow,
        logInField,
        setLogInField,
        registerField,
        setRegisterField,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
}
