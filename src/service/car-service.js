import { List } from 'immutable';

export default {
  getCars: () => {
    const cars = [
      {
        id: 'alfa-romeo',
        name: 'Alfa Romeo',
        image: '/images/alfa-romeo.jpg',
        isCorrect: false,
      },
      {
        id: 'audi',
        name: 'Audi',
        image: '/images/audi.png',
        isCorrect: false,
      },
      {
        id: 'bmw',
        name: 'BMW',
        image: '/images/bmw.jpg',
        isCorrect: false,
      },
      {
        id: 'chevrolet',
        name: 'Chevrolet',
        image: '/images/chevrolet.jpg',
        isCorrect: false,
      },
      {
        id: 'chrysler',
        name: 'Chrysler',
        image: '/images/chrysler.jpeg',
        isCorrect: false,
      },
      {
        id: 'citroen',
        name: 'Citroen',
        image: '/images/citroen.jpg',
        isCorrect: false,
      },
      {
        id: 'ferrari',
        name: 'Ferrari',
        image: '/images/ferrari.jpg',
        isCorrect: false,
      },
      {
        id: 'fiat',
        name: 'Fiat',
        image: '/images/fiat.jpg',
        isCorrect: false,
      },
      {
        id: 'ford',
        name: 'Ford',
        image: '/images/ford.jpg',
        isCorrect: false,
      },
      {
        id: 'honda',
        name: 'Honda',
        image: '/images/honda.jpg',
        isCorrect: false,
      },
      {
        id: 'hyundai',
        name: 'Hyundai',
        image: '/images/hyundai.jpg',
        isCorrect: false,
      },
      {
        id: 'land-rover',
        name: 'Land Rover',
        image: '/images/land-rover.png',
        isCorrect: false,
      },
      {
        id: 'lexus',
        name: 'Lexus',
        image: '/images/lexus.jpg',
        isCorrect: false,
      },
      {
        id: 'mazda',
        name: 'Mazda',
        image: '/images/mazda.png',
        isCorrect: false,
      },
      {
        id: 'mercedes-benz',
        name: 'Mercedes-Benz',
        image: '/images/mercedes-benz.png',
        isCorrect: false,
      },
      {
        id: 'nissan',
        name: 'Nissan',
        image: '/images/nissan.jpg',
        isCorrect: false,
      },
      {
        id: 'opel',
        name: 'Opel',
        image: '/images/opel.jpg',
        isCorrect: false,
      },
      {
        id: 'porsche',
        name: 'Porsche',
        image: '/images/porsche.jpg',
        isCorrect: false,
      },
      {
        id: 'renault',
        name: 'Renault',
        image: '/images/renault.jpg',
        isCorrect: false,
      },
      {
        id: 'saab',
        name: 'Saab',
        image: '/images/saab.png',
        isCorrect: false,
      },
      {
        id: 'seat',
        name: 'Seat',
        image: '/images/seat.jpg',
        isCorrect: false,
      },
      {
        id: 'skoda',
        name: 'Skoda',
        image: '/images/skoda.jpg',
        isCorrect: false,
      },
      {
        id: 'subaru',
        name: 'Subaru',
        image: '/images/subaru.png',
        isCorrect: false,
      },
      {
        id: 'suzuki',
        name: 'Suzuki',
        image: '/images/suzuki.png',
        isCorrect: false,
      },
      {
        id: 'toyota',
        name: 'Toyota',
        image: '/images/toyota.jpg',
        isCorrect: false,
      },
      {
        id: 'volkswagen',
        name: 'Volkswagen',
        image: '/images/volkswagen.jpg',
        isCorrect: false,
      },
      {
        id: 'volvo',
        name: 'Volvo',
        image: '/images/volvo.jpg',
        isCorrect: false,
      },
    ];

    const randomCar = Object.assign(cars[Math.floor(Math.random() * Math.floor(cars.length))], { isCorrect: true });

    const wrongChoices = List(cars)
      .filter(c => c.id !== randomCar.id)
      .sortBy(Math.random)
      .slice(0, 2);

    const list = List([randomCar, ...wrongChoices]).sortBy(Math.random);

    console.log(JSON.stringify(list, null, 2));

    return list;
  },
};
