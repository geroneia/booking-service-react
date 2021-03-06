import {createReducer} from '@reduxjs/toolkit';
import {
  loadOffers,
  loadOfferDetails,
  loadNearbyOffers,
  loadReviews,
  clearOfferDetails,
  fillOffersList,
  sortOffers,
  loadFavorites,
  toggleFavoriteStatus,
  clearFavorites,
  errorReport,
  connectionErrorReport,
  dropToInit as clearOffersList
} from '../action';
import {
  adaptToClient,
  getInitialOffers,
  getCityOffers,
  getSortAction,
  replaceOffer
} from '../../utils';

const initialState = {
  popularOffers: [],
  sortedOffers: [],
  favoriteOffers: {
    data: [],
    isLoaded: false,
  },
  offers: {
    data: [],
    isLoaded: false,
  },
  offerDetails: {
    data: {},
    isLoaded: false,
  },
  nearbyOffers: [],
  reviews: [],
  isError: false,
  isConnect: true,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = {
        data: adaptToClient(action.payload),
        isLoaded: true,
      };
      state.popularOffers = getInitialOffers(action.payload);
      state.sortedOffers = getInitialOffers(action.payload);
    })
    .addCase(toggleFavoriteStatus, (state, action) => {
      state.popularOffers = replaceOffer(state.popularOffers, adaptToClient(action.payload));
      state.sortedOffers = replaceOffer(state.sortedOffers, adaptToClient(action.payload));
      if (state.offerDetails.isLoaded) {
        state.offerDetails.data = adaptToClient(action.payload);
      }
      if (state.favoriteOffers.isLoaded) {
        state.favoriteOffers.data = replaceOffer(state.favoriteOffers.data, adaptToClient(action.payload));
      }
    })
    .addCase(loadFavorites, (state, action) => {
      state.favoriteOffers = {
        data: adaptToClient(action.payload),
        isLoaded: true,
      };
    })
    .addCase(clearFavorites, (state) => {
      state.favoriteOffers = {
        data: [],
        isLoaded: false,
      };
    })
    .addCase(loadOfferDetails, (state, action) => {
      state.offerDetails = {
        data: adaptToClient(action.payload),
        isLoaded: true,
      };
    })
    .addCase(loadNearbyOffers, (state, action) => {
      state.nearbyOffers = adaptToClient(action.payload);
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = adaptToClient(action.payload);
    })
    .addCase(clearOfferDetails, (state) => {
      state.offerDetails = {
        data: {},
        isLoaded: false,
      };
      state.nearbyOffers = [];
      state.reviews = [];
    })
    .addCase(fillOffersList, (state, action) => {
      state.popularOffers = getCityOffers(state.offers.data, action.payload);
      state.sortedOffers = state.popularOffers;
    })
    .addCase(sortOffers, (state, action) => {
      state.sortedOffers = getSortAction(state.popularOffers, action.payload);
    })
    .addCase(errorReport, (state, action) => {
      state.isError = (action.payload);
    })
    .addCase(connectionErrorReport, (state, action) => {
      state.isConnect = (action.payload);
    })
    .addCase(clearOffersList, (state) => {
      state.popularOffers = state.offers.data;
      state.sortedOffers = state.offers.data;
      state.favoriteOffers = {
        data: [],
        isLoaded: false,
      };
    });
});

export default data;
