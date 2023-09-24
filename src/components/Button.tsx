import "../styles/button.css";

type ButtonProps = {
  action: string;
};

function Button({ action }: ButtonProps) {
  return (
    <div>
      <button className="btn">{action}</button>
    </div>
  );
}

export default Button;
