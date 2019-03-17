import { List } from 'immutable';

export default {
  getCars: () => {
    const cars = [
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
        id: 'audi',
        name: 'Audi',
        image: '/images/audi.png',
        isCorrect: false,
      },
    ];

    const randomCar = Object.assign(cars[Math.floor(Math.random() * Math.floor(cars.length))], { isCorrect: true });

    const wrongChoices = List(cars)
      .filter(c => c.id !== randomCar.id)
      .sortBy(Math.random)
      .slice(0, 3);

    const list = List([randomCar, ...wrongChoices]).sortBy(Math.random);

    console.log(JSON.stringify(list, null, 2));

    return list;
  },
};
