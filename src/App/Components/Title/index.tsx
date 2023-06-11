import { FC } from "react";

import { TitleProps } from "./interfaces";

import "./styles.scss";

const Title: FC<TitleProps> = ({ title }) => <h1 className="title">{title}</h1>;

export default Title;
