import moment from 'moment';
import mountUlap from './campsImages/Mount-Ulap.png';
import calaguas from './campsImages/Calagus-Islands.jpg';
import latik from './campsImages/Latik-Riverside.jpg';
import buloy from './campsImages/Buloy-Springs.jpg';
import onay from './campsImages/Onay-Beach.jpg';
import seven from './campsImages/seven.jpg';

const allCampgrounds = [
  {
    name: 'Mount Ulap',
    image: mountUlap,
    shortDescription:
      'One of the most famous hikes in Benguet is Mt Ulap in Igoton.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 89.99,
    comments: [
      {
        author: 'Isaac Dylan',
        content:
          'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
        date: moment().subtract(3, 'days').valueOf(),
      },
      {
        author: 'Hudson Luca',
        content:
          'Definitely recommend going there, not too far and not a lot of people to ruin the experience.',
        date: moment().subtract(1, 'days').valueOf(),
      },
    ],
  },
  {
    name: 'Calaguas Islands',
    image: calaguas,
    shortDescription:
      'A paradise of islands that can rival the white sand beauty of Boracay.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 119.99,
    comments: [
      {
        author: 'Adam Jones',
        content:
          'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
        date: moment().subtract(6, 'days').valueOf(),
      },
      {
        author: 'Isaac Dylan',
        content:
          'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
        date: moment().subtract(4, 'days').valueOf(),
      },
      {
        author: 'Hudson Luca',
        content:
          'Definitely recommend going there, not too far and not a lot of people to ruin the experience.',
        date: moment().subtract(3, 'days').valueOf(),
      },
    ],
  },
  {
    name: 'Onay Beach',
    image: onay,
    shortDescription:
      'This is one of the best beach camping sites, beautiful and pristine.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 94.99,
    comments: [
      {
        author: 'Adam Jones',
        content:
          'Honestly one of the best experiences ever, took us a while to figure out how to get there but it was amazing!',
        date: moment().subtract(2, 'weeks').valueOf(),
      },
      {
        author: 'Isaac Dylan',
        content:
          'Traveling changes you as a person, you gain more perspective, this is the perfect spot to do that.',
        date: moment().subtract(2, 'days').valueOf(),
      },
      {
        author: 'Hudson Luca',
        content:
          'Definitely recommend going there, not too far and not a lot of people to ruin the experience.',
        date: moment().subtract(1, 'days').valueOf(),
      },
    ],
  },
  {
    name: 'Seven Sisters Waterfall',
    image: seven,
    shortDescription:
      'The Seven Sisters is the 39th tallest waterfall in Norway.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 119.99,
    comments: [],
  },
  {
    name: 'Latik Riverside',
    image: latik,
    shortDescription:
      'Philippines is one of the most dazzling countries in all of Asia.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 99.99,
    comments: [
      {
        author: 'Hudson Luca',
        content:
          'Definitely recommend going there, not too far and not a lot of people to ruin the experience.',
        date: moment().subtract(4, 'days').valueOf(),
      },
    ],
  },
  {
    name: 'Buloy Springs',
    image: buloy,
    shortDescription: 'A quiet place where mountains and lakes abound.',
    longDescription:
      'Mount Ulap is a 7.7 kilometer moderately trafficked point-to-point trail located near Tuba, Benguet, Philippines that offers the chance to see wildlife and is rated as moderate. The trail is primarily used for hiking.',
    id: 'id' + Math.random().toString(16).slice(2),
    createdBy: 'Andrew Mike',
    price: 104.99,
    comments: [],
  },
];

export default allCampgrounds;
