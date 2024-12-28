"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@components/Icon";

type ItemProps = {
	icon?: string,
	label: string,
	link: string,
}

const NavItem: React.FC<ItemProps> = ({
	icon,
	label,
	link
}) => {
	const uiClass = 'soarui-nav';
	const route = usePathname();

	return (
		<li
			className={`${ uiClass }__item`}
			{ ...( route === link && { 'aria-current': 'page' }) }>
			<Link href={ link }>
				{ icon && <Icon name={ icon } /> }
				<span>{ label }</span>
			</Link>
		</li>
	);
}

export { NavItem }
