import { IconType } from "react-icons";

export interface ButtonProps {
  title: string;
  onClick: () => void;
  icon: IconType;
}
