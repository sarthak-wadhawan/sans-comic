import React from 'react';
import { Link } from 'react-router-dom';
import oops from '../../assets/oops.png';

const NotFound = () => {
    return (
        <div className="sansHeroContainer sans404Container">
            <div className="sansHeroCard">
                <Link to="/comics"><img src={oops} className="sansHeroImage" alt="oops" /></Link>
                <div className="sansHeroDetails">
                    <h1 className="sansHeroTitle">Uh Oh! Page <br />Not Found</h1>
                    <p className="sansHeroDescription sans404Description">
                        We couldn't find the page you were looking for! That's our fault. Hit the button below and go back to viewing <span className="sansEmphasis"> dope comics!!</span>
                    </p>
                    <button className="sansHeroButton">
                        <Link to="/comics">Click Here To View Comics !</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;