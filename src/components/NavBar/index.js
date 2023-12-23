import React from 'react';
import { Link } from 'react-router-dom';
import logoText from '../../assets/sans-comic-logo.png';
import logo from '../../assets/sans-comic-logo-small.png';
import '../../index.css';

const NavBar = ({ countCartItems }) => {
	return (
		<div
			id="nav"
			className="navbar shadow-lg bg-neutral-focus text-neutral-content rounded-none sticky top-0 z-[100] sansNav"
		>
			<div className="flex-1 flex items-center sm:items-stretch sm:justify-start ">
				<div className="flex-shrink-0 flex items-center">
					<Link to="/">
						<img
							className="block lg:hidden h-14 w-auto sansLogo"
							src={logo}
							alt="Sans Comic"
						/>
						<img
							className="hidden lg:block h-16 w-auto"
							src={logoText}
							alt="Sans Comic"
						/>
					</Link>
				</div>
			</div>
			<div className="px-2 mx-2">
				{/* Links to Different Pages Container*/}
				<div className="items-stretch lg:flex ">
					<Link
						to="comics"
						className="btn btn-ghost btn-sm rounded-none sansNavItem"
					>
						Comic Books
					</Link>
				</div>
			</div>
			<div className="flex-none">
				<Link
					to="checkout"
					className="btn btn-square btn-ghost rounded-none sansNavItem"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
						></path>
					</svg>
					<Link to="checkout">
						{''}
						{countCartItems ? (
							<button className="badge mx-2 badge-primary">
								<strong>{countCartItems}</strong>
							</button>
						) : (
							''
						)}
					</Link>
				</Link>
			</div>
		</div>
	);
};

export default NavBar;
