import React from 'react';
import logo from '../../assets/sans-comic-logo-small.png';
import '../../index.css';

const Footer = () => {
	return (
		<footer className="p-4 footer bg-neutral-focus text-neutral-content footer-center bottom-0 sansFooter">
			<div className="flex">
				<img className="w-12" src={logo} alt="Sans Comic" />
				<p className="sansFooterText">Copyright © 2023 - All right reserved by Sans Comic.</p>
			</div>
		</footer>
	);
};

export default Footer;
