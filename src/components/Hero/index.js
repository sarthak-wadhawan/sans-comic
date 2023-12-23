import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import spiderMan from '../../assets/spider-man.jpg';

const Hero = ({ promoComics }) => {
	//this variable will allow us to select a random comic from our array and display it as our hero title upon load
	let randomPromo = Math.floor(Math.random() * (promoComics.length + 1));
	//this how we will store the value and display the chosen comic
	let currentPromo = promoComics[randomPromo];

	//Marvel API breaks up its image links so I'll be using string interpolation and optional chaining to get the image to display similar to the Card component
	let renderImg =
		currentPromo?.images[0].path + '.' + currentPromo?.images[0].extension;

	return (
		<div className="sansHeroContainer">
			<div className="sansHeroCard">
				<Link to="/comics"><img src={renderImg !== 'undefined.undefined' ? renderImg : spiderMan} className="sansHeroImage" alt={currentPromo?.title} /></Link>
				<div className="sansHeroDetails">
					<h1 className="sansHeroTitle">Welcome to<br />Sans Comic!</h1>
					<p className="sansHeroDescription">
						Your one-stop shop to order all unreleased comic book titles like <span className="sansEmphasis">&nbsp;{currentPromo?.title ? currentPromo.title : 'Murderworld: Spider-Man (2023) #1'} !!</span>
					</p>
					<button className="sansHeroButton">
						<Link to="/comics">Click Here To Explore !</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
