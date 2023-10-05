import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export const pageLinks = [
  {
    order: '1',
    cover: '/assets/images/menu/menu_marketing.jpg',
    items: [
      { title: '', path: paths.marketing.root },
      { title: 'Services', path: paths.marketing.services },
      { title: 'Case Studies', path: paths.marketing.caseStudies },
      { title: 'Case Study', path: paths.marketing.caseStudy },
      { title: 'Blog Posts', path: paths.marketing.posts },
      { title: 'Blog Post', path: paths.marketing.post },
      { title: 'About', path: paths.marketing.about },
      { title: 'Contact', path: paths.marketing.contact },
    ],
  },
];

export const navConfig = [
  { title: 'Home', path: '/' },
  { title: 'About', path: paths.marketing.about },
  { title: 'Contact', path: paths.marketing.contact },
];
