import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import Header from '../page-header/page-header';
import PropTypes from 'prop-types';
import FavoriteCity from '../favorite-city/favorite-city';


function Favorites({favoriteOffers}) {
  const cities = Object.keys(favoriteOffers);
  return (
    <div className="page">
      <Header/>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city) => <FavoriteCity key={city} city={city} favoriteOffers={favoriteOffers[city]} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.MAIN}>
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </Link>
      </footer>
    </div>
  );
}

Favorites.propTypes = {
  favoriteOffers: PropTypes.objectOf(PropTypes.string),
};

export default Favorites;
