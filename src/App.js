import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { MAX_QUANTITY_PER_ITEM } from './constants';

//components
import NavBar from './components/NavBar';
import Footer from './components/Footer';
//pages
import Home from './pages/Home';
import Comics from './pages/Comics';
import Checkout from './pages/Checkout';
import NotFound from './components/NotFound';

const App = () => {
	//sets comics array
	const [promoComics, setPromoComics] = useState([]);
	//sets state cart items
	const [cartItems, setCartItems] = useState([]);
	//sets loading state
	const [loading, setLoading] = useState(false);

	//list of promo articles
	// https://comicvine.gamespot.com/api/promos/?&filter=api_key=4f8f8990ab1697df27672bcbdf1d0da1b794916b&format=json

	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c
	// https://gateway.marvel.com/v1/public/comics?format=comic&ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c

	//initial fetch request with array of 100 comics
	// const fetchComics = async () => {
	// 	try {
	// 		const res = await axios.get(
	// 			'https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2023&orderBy=onsaleDate&limit=36ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c'
	// 		);
	// 		setPromoComics(res.data.data.results);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const fetchComics = async () => {
		try {
			const res = await axios.get(
				'https://gateway.marvel.com/v1/public/comics?format=comic&startYear=2023&orderBy=onsaleDate&limit=36ts=1&apikey=04603fbf10ade1cc429c24fab83e0fed&hash=e0a2115671c5bf517f6cbab3297a726c'
			);
			setPromoComics(res.data.data.results);
			setLoading(false); // Set loading to false when data is fetched
		} catch (error) {
			console.log(error);
			setLoading(false); // Set loading to false even if an error occurs
		}
	};

	//handleAddToCart function

	const handleAddToCart = (comic) => {
		const exist = cartItems.find((item) => item.id === comic.id);

		if (exist) {
			if (exist.qty < MAX_QUANTITY_PER_ITEM) {
				setCartItems(
					cartItems.map((item) =>
						item.id === comic.id ? { ...exist, qty: exist.qty + 1 } : item
					)
				);
			}
		} else {
			setCartItems([...cartItems, { ...comic, qty: 1 }]);
		}
	};

	const handleRemoveFromCart = (comic) => {
		const exist = cartItems.find((item) => item.id === comic.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((item) => item.id !== comic.id));
		} else {
			setCartItems(
				cartItems.map((item) =>
					item.id === comic.id ? { ...exist, qty: exist.qty - 1 } : item
				)
			);
		}
	};

	useEffect(() => {
		fetchComics();
	}, []);

	return (
		<div className="sansAppContainer">
			<NavBar countCartItems={cartItems.reduce((total, item) => total + item.qty, 0)} />
			<Routes>
				<Route path="/" element={<Home promoComics={promoComics} />} />
				<Route
					path="comics"
					element={
						<Comics
							promoComics={promoComics}
							cartItems={cartItems}
							handleAddToCart={handleAddToCart}
						/>
					}
				/>
				<Route
					path="checkout"
					element={
						<Checkout
							setCartItems={setCartItems}
							handleRemoveFromCart={handleRemoveFromCart}
							handleAddToCart={handleAddToCart}
							cartItems={cartItems}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
