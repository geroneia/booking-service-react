import {nanoid} from 'nanoid';

const localNewOfferId = nanoid();

const offers = [{
  'bedrooms': 3,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
  'goods': ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
  'host': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina',
  },
  'id': localNewOfferId,
  'images': ['img/apartment-01.jpg', 'img/apartment-02.jpg'],
  'isFavorite': false,
  'isPremium': true,
  'location': {
    'latitude': 52.35514938496378,
    'longitude': 4.673877537499948,
    'zoom': 8,
  },
  'maxAdults': 4,
  'previewImage': 'img/apartment-01.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Beautiful & luxurious studio at great location',
  'type': 'apartment',
},
{
  'bedrooms': 1,
  'city': {
    'location': {
      'latitude': 49.16351837062501,
      'longitude': 2.325041060240048,
      'zoom': 10,
    },
    'name': 'Paris',
  },
  'description': 'A quiet Eu amet ad cupidatat enim et dolore amet minim ex excepteur.',
  'goods': ['Heating', 'Kitchen', 'Cat', 'Washing machine', 'Coffee machine'],
  'host': {
    'avatarUrl': 'img/avatar-max.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Rick',
  },
  'id': localNewOfferId,
  'images': ['img/apartment-03.jpg', 'img/apartment-02.jpg'],
  'isFavorite': false,
  'isPremium': false,
  'location': {
    'latitude': 48.90124596102839,
    'longitude': 2.3021282846332713,
    'zoom': 8,
  },
  'maxAdults': 2,
  'previewImage': 'img/apartment-03.jpg',
  'price': 100,
  'rating': 5,
  'title': 'Nice, cozy, warm big bed apartment',
  'type': 'apartment',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'Consectetur anim elit nostrud sunt dolore esse.',
  'goods': ['Heating', 'Kitchen', 'Split system', 'Washing machine'],
  'host': {
    'avatarUrl': 'img/avatar-max.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Morty',
  },
  'id': localNewOfferId,
  'images': ['img/room.jpg', 'img/room.jpg'],
  'isFavorite': false,
  'isPremium': true,
  'location': {
    'latitude': 52.36114492233874,
    'longitude': 4.832547797973042,
    'zoom': 8,
  },
  'maxAdults': 4,
  'previewImage': 'img/room.jpg',
  'price': 120,
  'rating': 4.8,
  'title': 'Wood and stone place',
  'type': 'house',
},
{
  'bedrooms': 2,
  'city': {
    'location': {
      'latitude': 52.370216,
      'longitude': 4.895168,
      'zoom': 10,
    },
    'name': 'Amsterdam',
  },
  'description': 'Sint eiusmod officia officia esse deserunt anim.',
  'goods': ['Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher', 'WiFi'],
  'host': {
    'avatarUrl': 'img/avatar-angelina.jpg',
    'id': 3,
    'isPro': true,
    'name': 'Angelina',
  },
  'id': localNewOfferId,
  'images': ['img/studio-01.jpg', 'img/studio-01.jpg'],
  'isFavorite': true,
  'isPremium': false,
  'location': {
    'latitude': 52.30932827128466,
    'longitude': 4.7913490690654355,
    'zoom': 8,
  },
  'maxAdults': 3,
  'previewImage': 'img/studio-01.jpg',
  'price': 180,
  'rating': 4.5,
  'title': 'Canal View Prinsengracht',
  'type': 'room',
},

];

export default offers;