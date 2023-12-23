import React from 'react';
import Card from '../../components/Card';

const Comics = ({ promoComics, cartItems, handleAddToCart }) => {

	return (
		<div className="flex flex-col items-center pt-5 pb-12 sansPromoBackground">
			<div className="flex justify-center flex-wrap my-1 px-1">
				{promoComics.map((comic) => {
					return <Card key={comic.id} comic={comic} cartItems={cartItems} handleAddToCart={handleAddToCart} />;
				})}
			</div>
		</div>
	);
};

export default Comics;
