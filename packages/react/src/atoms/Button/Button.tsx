import React, { FC } from "react";

interface IProps {
	label: string;
}
const Button: FC<IProps> = ({
	label
}) => {
	return <button className="dse-button-container">{label}</button>;
}

export default Button;
