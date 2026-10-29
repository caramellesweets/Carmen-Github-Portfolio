// All the editable content for the site lives here.
import type { ImageMetadata } from 'astro';
import sauceNDunk from '../assets/work/sauce-n-dunk.png';
import ultraStriker from '../assets/work/ultra-striker.png';
import tapdownTycoon from '../assets/work/tapdown-tycoon.png';
import crowdConnect from '../assets/work/crowd-connect.jpg';
import homeIceAdvantage from '../assets/work/home-ice-advantage.png';
import shutoutSuperstars from '../assets/work/shutout-superstars.png';

export const site = {
  name: 'Carmen Yuen',
  title: 'Carmen Yuen - Artist',
  description: 'Carmen Yuen is a multidisciplinary designer and artist in Toronto.',
  nav: ['Home', 'Gallery', 'About'],
  links: {
    instagram: 'https://www.instagram.com/caramellesart/?hl=en',
    linkedin: 'http://www.linkedin.com/in/carmen-yuen-2b4aa7186',
  },
};

export const education = {
  school: 'OCAD University, Toronto',
  detail: 'Bachelor of Fine Arts - Drawing & Painting: Expanded Animation',
};

export const experience = {
  role: 'Multidisciplinary Designer',
  detail: 'MLSE - Maple Leaf Sports & Entertainment',
};

export const expertise = [
  'Creative Strategy & Collaboration',
  'Game Art, Development & Design',
  'Graphic Design',
  'Illustration',
  'Video & Motion Content',
];

export type Project = {
  title: string;
  image: ImageMetadata;
  // CSS object-position for the thumbnail crop (defaults to centered).
  position?: string;
  // Case study page this thumbnail links to (path within the site).
  href?: string;
};

// Shown left to right, top to bottom in a 3-column grid.
export const projects: Project[] = [
  { title: "Raptors x Hellmann's: Sauce N' Dunk", image: sauceNDunk, href: '/sauce-n-dunk/' },
  { title: 'TFC x LG: Ultra Striker', image: ultraStriker, href: '/ultra-striker/' },
  { title: 'Argos x Coinbase: Tapdown Tycoon', image: tapdownTycoon },
  { title: 'Raptors x Bell: Crowd Connect', image: crowdConnect, position: '28.6% 50%' },
  { title: 'MLSE ARCADE x Tradable Bits', image: homeIceAdvantage },
  { title: 'Toronto Maple Leafs x OLG: Home Ice Advantage', image: homeIceAdvantage },
  { title: "Raptors x McDonald's: Beyond The Arch (2025)", image: homeIceAdvantage },
  { title: 'Lollapalooza: Legend of Lolla 2', image: shutoutSuperstars },
  { title: 'Toronto Maple Leafs x PointsBet: Shutout Superstars', image: shutoutSuperstars },
];
