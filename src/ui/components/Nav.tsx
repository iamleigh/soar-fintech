import React from "react";
import { NavItem } from "./NavItem";

const Nav = () => {
	const uiClass = 'soarui-nav';
	const options = [
		{
			icon: 'home',
			label: 'Dashboard',
			link: '/'
		},
		{
			icon: 'transfer',
			label: 'Transactions',
			link: '/transactions'
		},
		{
			icon: 'user',
			label: 'Accounts',
			link: '/accounts'
		},
		{
			icon: 'economic-investment',
			label: 'Investments',
			link: '/investments'
		},
		{
			icon: 'credit-card',
			label: 'Credit Cards',
			link: '/credit-cards'
		},
		{
			icon: 'loan',
			label: 'Loans',
			link: '/loans'
		},
		{
			icon: 'service',
			label: 'Services',
			link: '/services'
		},
		{
			icon: 'econometrics',
			label: 'My Privileges',
			link: '/my-privileges'
		},
		{
			icon: 'settings-solid',
			label: 'Settings',
			link: '/settings'
		},
	];

	return (
		<ul className={ uiClass }>
			{ options.map( ( option, index ) => {
				return (
					<NavItem
						key={ index }
						icon={ option.icon }
						label={ option.label }
						link={ option.link } />
				);
			}) }
		</ul>
	);
}

export { Nav }
