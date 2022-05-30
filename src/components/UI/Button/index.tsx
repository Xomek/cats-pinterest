import { ButtonHTMLAttributes, FC } from "react";
import { filterStyles } from "../../../helpers/filterStyles";
import styles from "./Button.module.scss";

type TButtonType = "basic";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTypes?: TButtonType;
}

const Button: FC<IButtonProps> = ({
  className,
  children,
  buttonTypes = "basic",
  ...props
}) => {
  const ButtonStyles = filterStyles([
    styles.button,
    className,
    styles[buttonTypes],
  ]);

  return (
    <button className={ButtonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
