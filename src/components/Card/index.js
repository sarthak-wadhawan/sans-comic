import React, { useState } from 'react';
import cleanjpg from '../../assets/clean.jpg';
import '../../index.css';
import { MAX_QUANTITY_PER_ITEM } from '../../constants';

const Card = ({ comic, cartItems, handleAddToCart }) => {
	const [addedCount, setAddedCount] = useState(0);
	let renderImg = comic.images[0]?.path + '.' + comic.images[0]?.extension;

	let forSale = String(comic.prices[0].price);
	const [integerPart, decimalPart] = forSale.split('.');

	const cartItem = cartItems.find((item) => item.id === comic.id);
	const cartItemQty = cartItem ? cartItem.qty : 0;

	const handleBuyButtonClick = () => {
		if (cartItemQty < MAX_QUANTITY_PER_ITEM) {
			handleAddToCart(comic);
			setAddedCount(cartItemQty + 1);
		}
	};

	return (
		<div className="sansCard">
			<figure>
				<img
					src={renderImg !== 'undefined.undefined' ? renderImg : cleanjpg}
					alt={comic.title}
					className="sansImage"
				/>
			</figure>
			<div className="sansDetailsBackground"></div>
			<h2 className="sansTitle">
				{comic.title}
				{forSale > '0' ? (
					<div className="badge mx-2 badge-primary positionAbsolute displayNone">NEW</div>
				) : (
					<div className="badge mx-2 badge-secondary rounded-none positionAbsolute displayNone">
						Sold Out
					</div>
				)}
			</h2>
			{forSale > '0' ? (
				<div className="sansPriceContainer">
					<div className="badge mx-2 sansPrice"><span className="sansDollarSign">$</span><span className="sansPriceInteger">{integerPart}</span><span className="sansPriceDecimal">{decimalPart}</span></div>
					<div className="badge mx-2 sansPrice priceOffset"></div>
				</div>
			) : (
				<div className="sansPriceContainer">
					<div className="badge mx-2 sansPrice"><span className="sansDollarSign">$</span><span className="sansPriceInteger">{integerPart}</span><span className="sansPriceDecimal">{decimalPart}</span></div>
					<div className="badge mx-2 sansPrice priceOffset"></div>
				</div>
			)}
			<div className="justify-end card-actions sansActionContainer">
				<span className="sansAddedToCartLabel">{addedCount === 0 ? '' : `+${addedCount}`}</span>
				{forSale > '0' ? (
					<button
						onClick={handleBuyButtonClick}
						className="sansAddToCart"
						disabled={cartItems.some((item) => item.id === comic.id && item.qty >= MAX_QUANTITY_PER_ITEM)}
					>
						{addedCount >= MAX_QUANTITY_PER_ITEM || cartItems.some((item) => item.id === comic.id && item.qty >= MAX_QUANTITY_PER_ITEM) ? (
							<span>max!</span>
						) : (
							<span>buy!</span>
						)}
					</button>
				) : (
					<button className="btn btn-disabled rounded-none sansAddToCart" disabled>
						Sold Out
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
