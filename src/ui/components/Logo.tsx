import React from "react";
import { Icon } from "./Icon";

type LogoProps = {
	className?: string
}

const Logo: React.FC<LogoProps> = ({ className }) => {
	const uiClass = 'soarui-logo';
	const extraClass = 'undefined' !== typeof className && '' !== className
		? ' ' + className
		: '';

	return (
		<h1 className={`${ uiClass }${ extraClass }`}>
			<Icon name="task" className={`${ uiClass }__icon`} />
			<span className={`${ uiClass }__name`}>Soar Task</span>
		</h1>
	);
}

export { Logo }
