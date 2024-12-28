import React from "react";
import { Icon } from "./Icon";

const Logo = () => {
	return (
		<h1 className="soarui-logo">
			<Icon name="task" className="soarui-logo__icon" />
			<span className="soarui-logo__name">Soar Task</span>
		</h1>
	);
}

export { Logo }
