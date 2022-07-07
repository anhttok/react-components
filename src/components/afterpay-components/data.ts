import dayjs from "dayjs";
import { Event } from "./GlobalEventList/EventItem/EventItem";
import { StatusData } from "./HeroSlider/Status/Status";
import { Show } from "./Show/ShowItem/ShowItem";

export const dataDumpmy = [
  {
    desktopVideo:
      'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    mobileVideo:
      'https://cdn.builder.io/o/assets%2Fb4f4a2d9d03a447491041054df7592d3%2F2a0b3ebee31f45e085e61ea90320d146?alt=media&token=d0d7d79a-1064-4fea-862d-64e1c3dde2ce&apiKey=b4f4a2d9d03a447491041054df7592d3',
    backgroundUrl:
      'https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
    startDate: dayjs('2021-09-09T12:00:00.000'),
    title: 'Maison Kitsuné',
    location: 'Meatpacking District',
    buttonLabel: 'Attend & Shop',
    status: StatusData.LIVE,
    useCalendar: false,
    bambuserId: 'ubpgZPQSdGDerccB94lB',
    active: true,

    linkOverride: 'https://google.com',
  },
  {
    backgroundUrl:
      'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    startDate: dayjs('2021-09-09T12:00:00.000'),
    title: 'Rollerskating @ The Quarter',
    location: 'Meatpacking District',
    buttonLabel: 'Attend & Shop',
    status: StatusData.HAPPENING_NOW,
    useCalendar: true,
    active: true,

    bambuserId: 'ANl5om63GNjxPE9Pf0gU',
  },
  {
    backgroundUrl:
      'https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg',
    startDate: dayjs('2021-09-09T12:00:00.000'),
    title: 'Rollerskating @ The Quarter',
    location: 'Meatpacking District',
    buttonLabel: 'Attend & Shop',
    status: StatusData.HAPPENING_NOW,
    useCalendar: true,
    active: true,

    bambuserId: 'wk1BGR5UprJQfk6zeiRP',
  },
];

export const dummyEvents = [
  {
    startDate: dayjs('2021-09-07T12:00:00.000'),
    endDate: dayjs('2021-09-07T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Kick off Launch Party',
    leadImageUrl: '/images/dummy/image (7).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#FFF9D9',
    categories: ['Watch'],
  },
  {
    startDate: dayjs('2021-09-07T14:00:00.000'),
    endDate: dayjs('2021-09-08T12:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'DROPSHOP',
    leadImageUrl: '/images/dummy/image (13).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#C5E0E5',
    categories: ['Shop'],
  },
  {
    startDate: dayjs('2021-09-08T12:00:00.000'),
    endDate: dayjs('2021-09-08T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'House of AP Pop Up',
    leadImageUrl: '/images/dummy/image (9).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#FDF1E7',
    categories: ['Attend', 'Watch'],
  },
  {
    startDate: dayjs('2021-09-09T12:00:00.000'),
    endDate: dayjs('2021-09-09T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Empire State Lighting Ceremony',
    leadImageUrl:
      'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?fit=crop&w=674&q=80',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#F4D3E0',
    categories: ['Attend', 'Watch'],
  },
  {
    startDate: dayjs('2021-09-09T12:00:00.000'),
    endDate: dayjs('2021-09-09T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'LaQuan Smith SNBN Show',
    leadImageUrl: '/images/dummy/image (10).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#F0EFEB',
    categories: ['Watch', 'Shop'],
  },
  {
    startDate: dayjs('2021-09-09T12:00:00.000'),
    endDate: dayjs('2021-09-09T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Afterpay Day',
    leadImageUrl: '/images/dummy/image (8).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#B2FCE4',
    categories: ['Shop'],
  },
  {
    startDate: dayjs('2021-09-10T12:00:00.000'),
    endDate: dayjs('2021-09-09T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'The Shops: Shop-A-Thon Street Party',
    leadImageUrl:
      'https://images.unsplash.com/photo-1611558709798-e009c8fd7706?fit=crop&w=674&q=80',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#C5E0E5',
    categories: ['Attend', 'Shop'],
  },
  {
    startDate: dayjs('2021-09-10T12:00:00.000'),
    endDate: dayjs('2021-09-10T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'The Quarter on Washington Street',
    leadImageUrl: '/images/dummy/image (12).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#E0E7FB',
    categories: ['Attend'],
  },
  {
    startDate: dayjs('2021-09-10T12:00:00.000'),
    endDate: dayjs('2021-09-10T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Top Secret! Headliner Concert',
    leadImageUrl: '/images/dummy/image (14).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#EADDF2',
    categories: ['Attend', 'Watch'],
  },
  {
    startDate: dayjs('2021-09-10T12:00:00.000'),
    endDate: dayjs('2021-09-10T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Maison Kitsune SNBN Show',
    leadImageUrl: '/images/dummy/image (11).png',
    location: 'Meatpacking District',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    backgroundColor: '#F4D3E0',
    categories: ['Watch', 'Shop'],
  },
];

export const dummyShows: Show[] = [
  {
    startDate: dayjs('2021-09-09T12:00:00.000'),
    endDate: dayjs('2021-09-09T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'LaQuan Smith',
    leadImageUrl: '/images/dummy/image (15).png',
    location: 'Meatpacking District',
    description:
      'Celebrity Fashion Designer LaQuan Smith to unveil new collection - giving U.S. shoppers access to his distinctive looks straight from the runway.',
    backgroundColor: '#FFF9D9',
  },
  {
    startDate: dayjs('2021-09-10T12:00:00.000'),
    endDate: dayjs('2021-09-10T13:00:00.000'),
    url: 'https://www.afterpay.com/',
    title: 'Maison Kitsuné',
    leadImageUrl: '/images/dummy/image (16).png',
    location: 'Meatpacking District',
    description:
      'Only Afterpay can bring the best of Paris style straight from the NY runway to your phone.',
    backgroundColor: '#EADDF2',
  },
];