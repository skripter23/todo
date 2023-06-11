import { FC } from "react";

import { ButtonProps } from "./interfaces";

import "./styles.scss";

const Button: FC<ButtonProps> = ({ onClick, title, icon: ButtonIcon }) => {
  return (
    <div className="button" onClick={onClick}>
      <span>{title}</span>
      <ButtonIcon />
    </div>
  );
};

export default Button;
