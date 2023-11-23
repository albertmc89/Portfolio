import { ButtonHTMLAttributes, Dispatch, SetStateAction } from "react";
import "./Button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  actionOnClick?: () => void;
  text?: string;
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

const Button = ({
  className,
  actionOnClick,
  text,
  children,
}: ButtonProps): React.ReactElement => {
  return (
    <button className={`button ${className}`} onClick={actionOnClick}>
      {children}
      {text}
    </button>
  );
};

export default Button;
