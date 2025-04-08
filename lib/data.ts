import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';

import yoga from '@/public/Yoga.jpg';
import dashboard from '@/public/dashboard.jpg';
import nike from '@/public/nike.jpg';
import restau from '@/public/restau.jpg';
import eshop from '@/public/eshop.jpg';
import airbnb from '@/public/airbnb.jpg';
import crud from '@/public/crud.jpg';
import store from '@/public/store.jpg';
import phpecom from '@/public/phpecom.jpg';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },

  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Educations',
    hash: '#educations',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'high school diploma in science mathematics b ',
    description: 'Mounib School, Agadir  ',
    icon: React.createElement(LuGraduationCap),
    date: '2016',
  },
  {
    title: 'Mathematical Sciences . ',
    location: '',
    description: 'Faculty of Sciences Ibn Zohr , Agadir',
    icon: React.createElement(LuGraduationCap),
    date: '2017-2018 ',
  },
  {
    title: 'Full Stack develloper',
    location: 'Agadir, Maroc',
    description: 'specialized technician diploma in computer development at Specialized Institute of Applied Technology, Agadir.',
    icon: React.createElement(LuGraduationCap),
    date: '2019-2021 ',
  },
] as const;

export const projectsData = [
  // {
  //   title: 'CorpComment',
  //   description: 'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
  //   tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
  //   imageUrl: corpcommentImg,

  // },
  // {
  //   title: 'rmtDev',
  //   description: 'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
  //   tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
  //   imageUrl: rmtdevImg,
  // },
  {
    title: ' Yoga Website',
    description: 'Responsive Yoga Website using Html,Css,Javascript .',
    tags: ['Html', 'Css', 'Javascript'],
    imageUrl: yoga,
    UrlGit: 'https://github.com/abderrahimbkd/yoga',
    UrlLive: 'https://abderrahimbkd.github.io/yoga/',
  },
  {
    title: ' Ecommerce Dashboard Website',
    description: 'Responsive Ecommerce Dashboard Website using NextJs .',
    tags: ['NextJs', 'ShadcnUi', 'Clerck', 'Mongodb', 'Prisma'],
    imageUrl: dashboard,
    UrlGit: 'https://github.com/abderrahimbkd/ecommerce-admin',
    UrlLive:
      'https://ecommerce-admin-blush-five.vercel.app/sign-in?redirect_url=https%3A%2F%2Fecommerce-admin-blush-five.vercel.app%2F%3FvercelToolbarCode%3DjQwYDKBF-zlCdN9',
  },
  {
    title: ' Nike Website',
    description: 'Responsive Nike Website using Html,Css,Javascript .',
    tags: ['Html', 'Css', 'Javascript'],
    imageUrl: nike,
    UrlGit: 'https://github.com/abderrahimbkd/Nike',
    UrlLive: 'https://abderrahimbkd.github.io/Nike/',
  },
  {
    title: 'restaurant Website',
    description: 'Responsive restaurant Website using ReactJs .',
    tags: ['ReactJs'],
    imageUrl: restau,
    UrlGit: 'https://github.com/abderrahimbkd/restauUi',
    UrlLive: 'https://abderrahimbkd.github.io/restauUi/',
  },
  {
    title: 'Airbnb-clone Website',
    description: 'Responsive Airbnb Website using NextJs .',
    tags: ['NextJs', 'Tailwind', 'Prisma', 'MongoDb', 'Zustand', 'Stripe', 'NextAuth'],
    imageUrl: airbnb,
    UrlGit: 'https://github.com/abderrahimbkd/HotelNextjsFull',
    UrlLive: 'https://hotel-nextjs-full.vercel.app/',
  },
  {
    title: 'Ecommerce Website',
    description: 'Responsive Ecommerce Website with Dashboard using NextJs .',
    tags: ['NextJs', 'Tailwind', 'Prisma', 'MongoDb', 'ContextApi', 'Stripe', 'NextAuth'],
    imageUrl: eshop,
    UrlGit: 'https://github.com/abderrahimbkd/eshop',
    UrlLive: 'https://eshop-uwk1.vercel.app/',
  },
  {
    title: 'Ecommerce Website',
    description: 'Responsive Ecommerce Website using NextJs .',
    tags: ['NextJs', 'ShadcnUi'],
    imageUrl: store,
    UrlGit: 'https://github.com/abderrahimbkd/travel',
    UrlLive: 'https://ecommerce-store-steel-one.vercel.app/',
  },
  {
    title: 'Ecommerce Website',
    description: 'Responsive Ecommerce Website with AdminLte using Laravel .',
    tags: ['Php', 'Laravel', 'Ajax', 'PhpMyAdmin'],
    imageUrl: phpecom,
    UrlGit: 'https://github.com/abderrahimbkd/FullEcomLaravelAdminLte',
    UrlLive: 'https://github.com/abderrahimbkd/FullEcomLaravelAdminLte',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Git',
  'Tailwind',
  'Prisma',
  'MongoDB',
  'Redux',
  'Zustand',
  'NextAuth',
  'Php',
  'Laravel',
  'Ajax',
  'MySql',
  'PhpMyAdmin',
  'Wordpress',
  'Elementor',
] as const;
