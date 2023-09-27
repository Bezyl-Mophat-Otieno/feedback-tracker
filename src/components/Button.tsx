import "../styles/button.css";
import { useNavigate } from "react-router-dom";

type ButtonProps = {
  [key: string]: any;
};

function Button({ action, clickable, setClickable }: ButtonProps) {
  const navigate = useNavigate();

  const eventTrigger = (action: string) => {
    if (action === "Authenticate") {
      navigate("/login");
    }
    if (action === "submit") {
    }
  };

  return (
    <div>
      <button className={`btn`} onClick={() => eventTrigger(action)}>
        {action}
      </button>
    </div>
  );
}

export default Button;
