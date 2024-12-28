import React from "react";
import { Icon } from "./Icon";

type LogoProps = {
	className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
	const extraClass = 'undefined' !== typeof className && '' !== className
		? ' ' + className
		: '';

	return (
		<h1 className={`soarui-logo${ extraClass }`}>
			<Icon name="task" className="soarui-logo__icon" />
			<span className="soarui-logo__name">Soar Task</span>
		</h1>
	);
}

export { Logo }
