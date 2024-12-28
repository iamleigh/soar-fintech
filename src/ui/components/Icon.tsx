import React from "react";

type IconProps = {
	name: string,
	className?: string,
}

const Icon: React.FC<IconProps> = ({ name, className }) => {
	const extraClass = 'undefined' !== typeof className && '' !== className
		? ' ' + className
		: '';

	return (
		<span
			className={`soaricons soaricons--${ name }${ extraClass }`}
			aria-hidden="true" />
	);
}

export { Icon }
