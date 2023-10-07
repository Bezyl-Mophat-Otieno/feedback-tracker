import "../styles/loginform.css";
import { useRef, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Alert from "./Alert";
import userStore from "../zustand/userStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

type props = {
  [key: string]: any;
};

function LoginForm({ setIsAuth, isAuth }: props) {
  useEffect(() => {
    if (isAuth === true) {
      setTimeout(() => {
        navigate("/admin");
      }, 2000);
    }
  }, [isAuth]);
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [type, setType] = useState<string>("");
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post(
      "http://localhost:5000/api/v1/user/login",
      {
        email,
        password,
      }
    );
    const data = response.data;
    // console.log(data);
    setSuccess(true);
    setMessage(data.message);
    setType("success");
    setTitle("Success");
    if (data.message === "Login successful") {
      userStore.getState().login(data.token);
      setIsAuth(userStore.getState().user.isAuthenticated);
    }
    return data;
  };

  type Variable = {
    email: string;
    password: string;
  };

  const loginMutation = useMutation({
    mutationFn: (variables: Variable) =>
      login(variables.email, variables.password),
  });

  const handleClick = (e: Event, email: string, password: string) => {
    e.preventDefault();

    if (email?.trim() === "" || password?.trim() === "") {
      setSuccess(true);
      setMessage("Please fill all the fields");
      setType("warning");
      setTitle("Warning");
    }

    loginMutation.mutate({ email, password });
  };
  return (
    <div className="loginContainer">
      {success && (
        <Alert
          setSuccess={setSuccess}
          type={type}
          title={title}
          message={message}
        />
      )}{" "}
      <form>
        <div>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <input
            ref={passwordRef}
            type="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button
          className="btn"
          onClick={(e: any) => {
            handleClick(
              e,
              emailRef.current?.value!,
              passwordRef.current?.value!
            );
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
