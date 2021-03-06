import {
  RATINGS,
  Cities,
  SortType,
  AuthorizationStatus,
  DEFAULT_CITY,
  SHAKE_ANIMATION_TIMEOUT,
  MILLISECONDS_IN_SECOND,
  MessageLength,
  MAX_MESSAGE_COUNT
} from './const';

export const getRatingInPercent = (rating) =>
  `${rating * 100 / RATINGS.length}%`;

export const getType = (type) =>
  type[0].toUpperCase() + type.slice(1);

const getChangedCase = (data) => {
  for (const key in data) {
    if (typeof data[key] !== 'object' && data[key] !== null) {
      const newKey = key.replace(/_\w/, (match, offset, input) => input[offset + 1].toUpperCase());
      if (key !== newKey) {
        Object.defineProperty(data, newKey, Object.getOwnPropertyDescriptor(data, key));
        delete data[key];
      }
    } else {
      getChangedCase(data[key]);
    }
  }
  return data;
};

export const adaptToClient = (data) => getChangedCase(JSON.parse(JSON.stringify(data)));

export const getSortedOffers = (offers) => {
  const favoriteOffers = offers.filter(({isFavorite}) => isFavorite);
  const sortedOffers = {};
  const cities = Object.values(Cities).map(({name}) => name);

  favoriteOffers.forEach((offer) => {
    const currentCity = offer.city.name;

    if (cities.includes(currentCity.toString()) && typeof sortedOffers[currentCity] === 'undefined') {
      sortedOffers[currentCity] = [offer];
    } else {
      sortedOffers[currentCity].push(offer);
    }
  });
  return sortedOffers;
};

export const getCityOffers = (offers, name) => offers.filter(({city}) => city.name === name);

export const getDateTime = (dateInISO) => dateInISO.split('T')[0];

export const getDate = (dateInISO) => new Date(dateInISO).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const getSortedLowToHighPrice = (offers) => offers.sort((prev, next) => prev.price - next.price);

const getSortedHighToLowPrice = (offers) => offers.sort((prev, next) => next.price - prev.price);

const getSortedHighToLowRating = (offers) => offers.sort((prev, next) => next.rating - prev.rating);

export const getSortAction = (offers, type) => {
  switch (type) {
    case SortType.PRICE_LOW_HIGH:
      return getSortedLowToHighPrice(offers);
    case SortType.PRICE_HIGH_LOW:
      return getSortedHighToLowPrice(offers);
    case SortType.TOP_RATED:
      return getSortedHighToLowRating(offers);
    default:
      return offers;
  }
};

export const isCheckedAuth = (authorizationStatus) =>
  authorizationStatus === AuthorizationStatus.UNKNOWN;

export const getInitialOffers = (data) => getCityOffers(adaptToClient(data), DEFAULT_CITY.name);

export const validateId = (id) => Object.keys(Cities).includes(id.toUpperCase());

export const shake = (target) => {
  target.style.animation = `shake ${SHAKE_ANIMATION_TIMEOUT / MILLISECONDS_IN_SECOND}s`;
  setTimeout(() => {
    target.style.animation = '';
  }, SHAKE_ANIMATION_TIMEOUT);
};

export const validateMessage = (text) => !!text.length && text.length >= MessageLength.MIN_MESSAGE_LENGTH && text.length <= MessageLength.MAX_MESSAGE_LENGTH;

export const validateEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
};

export const validatePassword = (password) => !!password.trim();

export const replaceOffer = (offers, offer) => {
  const offersUpdateOffer = [...offers.slice(0, (offers.findIndex(({id}) => id === offer.id))),
    offer,
    ...offers.slice((offers.findIndex((el) => el.id === offer.id)) + 1)];
  return offersUpdateOffer;
};

export const getMessages = (reviews) => reviews
  .slice(0, MAX_MESSAGE_COUNT)
  .sort((prev, next) => new Date(next.date) - new Date(prev.date));

export const setTokenFromLocalStorage = (api) => {
  api.defaults.headers['x-token'] = localStorage.getItem('token') ?? '';
};
