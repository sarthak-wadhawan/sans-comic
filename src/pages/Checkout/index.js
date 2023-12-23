import React from 'react';
import '../../index.css';
import { Link } from 'react-router-dom';
import { MAX_QUANTITY_PER_ITEM } from '../../constants';

const Checkout = ({
	setCartItems,
	cartItems,
	handleAddToCart,
	handleRemoveFromCart,
}) => {
	const itemsPrice = cartItems.reduce(
		(a, c) => a + c.prices[0].price * c.qty,
		0
	);
	const taxPrice = itemsPrice * 0.14;
	const shippingPrice = itemsPrice > 40 ? 0 : 3.99;
	const totalPrice = itemsPrice + taxPrice + shippingPrice;
	const maxQuantity = MAX_QUANTITY_PER_ITEM;

	const handleCheckout = () => {
		alert(
			`Thank you for shopping at Sans Comic! Your total is $${totalPrice.toFixed(
				2
			)}. This app is now a fun demo - we deprecated payment functionality since our client no longer sells comics online :)`
		);
		setCartItems([]);
	};

	return (
		<div>
			<div id="checkout" className="sansCheckoutContainer">
				<div className="">

					{cartItems.length > 0 ? (
						<>
							<div className="sansCheckoutCard sansCart">
								<img className="sansCartImage" src="sans-comic-cart-active.png"></img>
								<h1 className="sansCartTitle">Thank you for shopping at<br /><span className="sansCartStoreName">Sans Comic!</span></h1>
								<div>
									<div className="sansCartItemContainer">
										<p className="sansCartLabel">comics ---------- <span className="sansCartNumber"><span className="sansCartItemDollarSign">$</span>{itemsPrice.toFixed(2)}</span></p>
										<p className="sansCartLabel">tax -------------- <span className="sansCartNumber"><span className="sansCartItemDollarSign">$</span>{taxPrice.toFixed(2)}</span></p>
										<p className="sansCartLabel">shipping -------- <span className="sansCartNumber">
											{shippingPrice === 0.00 ? (
												<span className="sansCartShippingFree">FREE!</span>
											) : (
												<span><span className="sansCartItemDollarSign">$</span>{shippingPrice.toFixed(2)}</span>
											)}
										</span></p>
									</div>
									<p className="sansCartTotalLabel">total</p>
									<div className="sansCartTotalContainer">
										{(() => {
											const totalString = totalPrice.toFixed(2);
											const [integerPart, decimalPart] = totalString.split('.');

											return (
												<p className="sansCartTotalPrice">
													<span className="sansCartTotalDollarSign">$</span>
													<span className={`sansCartTotalInteger ${integerPart.length >= 4 ? 'sansFourDigits' : ''}`}>{integerPart}</span>
													<span className={`sansCartTotalDecimal ${integerPart.length >= 4 ? 'sansFourDigitsDecimal' : ''}`}>{decimalPart}</span>
												</p>
											);
										})()}
									</div>
									<div className="sansCartTotalContainer sansCartTotalContainerOffset"></div>
									<div className="sansCartCheckoutButtonContainer">
										<button
											className="sansCartCheckoutButton"
											onClick={handleCheckout}
										>
											Pay with Stripe
										</button>
									</div>
								</div>
							</div>
						</>
					) : (
						<>
							<div className="sansCheckoutCard sansCart sansCartEmpty">
								<img className="sansCartImage" src="sans-comic-cart-empty.png"></img>
								<h1 className="sansCartTitle">there's nothing in your cart<br /><span className="sansCartStoreName">such empty :(</span></h1>
								<div>
									<div className="sansCartItemContainer sansCartItemSpacing">
										<p className="sansCartLabel">we have hundreds of exclusive unreleased comic books across the marvel universe - spiderman, the hulk, scarlet witch, and more! find your favorites by clicking below!</p>
									</div>
									<div className="sansCartCheckoutButtonContainer">
										<button
											className="sansCartCheckoutButton"
										>
											<Link to="/comics">Find Some Comics!</Link>
										</button>
									</div>
								</div>
							</div>
						</>
					)}
					{cartItems.map((comic) => (
						<div
							key={comic.id}
							className="sansCheckoutCard"
						>
							<figure>
								<img
									src={comic.images[0].path + '.' + comic.images[0].extension}
									alt={comic.title}
									className="sansCheckoutImage"
								/>
							</figure>
							<div className="sansCheckoutDetailsContainer">
								<h2 className="sansCheckoutTitle">{comic.title}</h2>
								<div className="sansCheckoutTotal">
									{(() => {
										const total = comic.qty * comic.prices[0].price;
										const totalString = total.toFixed(2);
										const [integerPart, decimalPart] = totalString.split('.');

										return (
											<>
												<span className="sansCheckoutDollarSign">$</span>
												<div className="sansCheckoutIntegerContainer">
													<p className={`sansCheckoutInteger ${integerPart.length >= 3 ? 'sansThreeDigits' : ''}`}>{integerPart}</p>
												</div>
												<span className={`sansCheckoutDecimal ${integerPart.length == 1 ? 'sansOneDigitDecimal' : ''}`}>{decimalPart}</span>
											</>
										);
									})()}
								</div>
								<p className="sansCheckoutQuantity">{comic.qty}</p>
								<div className="sansCheckoutButtonContainer">
									<button
										onClick={() => handleAddToCart(comic)}
										className="sansCheckoutButton sansPlusButton"
										disabled={comic.qty >= maxQuantity}
									>
										<span className="sansCheckoutButtonText">+</span>
									</button>
									<button
										onClick={() => handleRemoveFromCart(comic)}
										className="sansCheckoutButton sansMinusButton"
									>
										<span className="sansCheckoutButtonText">-</span>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div >
	);
};

export default Checkout;
