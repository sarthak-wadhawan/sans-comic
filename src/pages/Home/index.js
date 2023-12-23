import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero';

const Home = ({ promoComics }) => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            if (promoComics.length > 0) {
                setLoading(false);
            }
        }, 900);
    }, [promoComics]);
    return (
        <div>
            {loading ? (
                <div className="sansLoadingContainer">
                    <img className="sansLoadingImage" src='loading.gif' />
                </div>
            ) : (
                <>
                    <Hero promoComics={promoComics} />
                </>
            )}


        </div>
    );
}

export default Home;
