module.exports = {
  home: {
    slug: 'home',
    titleKey: 'home.title',
    breadcrumb: ['home'],
    sections: [
      { type: 'hero', titleKey: 'home.hero.title', subtitleKey: 'home.hero.subtitle' },
      { type: 'grid-links', items: [
          { labelKey: 'nav.movies', href: '/movies' },
          { labelKey: 'nav.reviews', href: '/reviews' },
          { labelKey: 'nav.about', href: '/about' },
          { labelKey: 'nav.contact', href: '/contact' }
        ]}
    ],
    footerKey: 'footer.default'
  },

  movies: {
    slug: 'movies',
    titleKey: 'movies.title',
    breadcrumb: ['home','movies'],
    data: {
      items: [
        {
          id: 1,
          titleKey: 'movies.items.alien.title',
          year: 1979,
          genreKey: 'genre.sciFiHorror',
          rating: 8.5,
          poster: '/assets/alien.jpg',
          shortKey: 'movies.items.alien.short'
        },
        {
          id: 2,
          titleKey: 'movies.items.theThing.title',
          year: 1982,
          genreKey: 'genre.bodyHorror',
          rating: 8.2,
          poster: '/assets/thing.jpeg',
          shortKey: 'movies.items.theThing.short'
        },
        {
          id: 3,
          titleKey: 'movies.items.hereditary.title',
          year: 2018,
          genreKey: 'genre.supernatural',
          rating: 7.3,
          poster: '/assets/reincarnation.jpg',
          shortKey: 'movies.items.hereditary.short'
        },
        {
          id: 4,
          titleKey: 'movies.items.friday13.title',
          year: 1980,
          genreKey: 'genre.slasher',
          rating: 6.4,
          poster: '/assets/friday-13.jpg',
          shortKey:'movies.items.friday13.short'
        },
        {
          id: 5,
          titleKey: 'movies.items.it1990.title',
          year: 1990,
          genreKey: 'genre.supernatural',
          rating: 6.8,
          poster: '/assets/ono.jpg',
          shortKey: 'movies.items.it1990.short'
        },
        { id: 6 ,
          titleKey: 'movies.items.sinister.title',
          year: 2012,
          genreKey:'genre.supernatural',
          rating: 6.8,
          poster: '/assets/sinister.jpg',
          shortKey: 'movies.items.sinister.short'
        },
        { id: 7,
          titleKey: 'movies.items.conjuring2.title',
          year: 2016,
          genreKey: 'genre.supernatural',
          rating: 7.3,
          poster: '/assets/conjuring2.jpg',
          shortKey: 'movies.items.conjuring2.short'
        },
        { id: 8,
          titleKey: 'movies.items.anabelle.title',
          year: 2014,
          genreKey: 'genre.supernatural',
          rating: 5.4,
          poster: '/assets/anabelle.jpg',
          shortKey: 'movies.items.anabelle.short'
        }
      ]
    },
    footerKey: 'footer.default'
  },

  reviews: {
    slug: 'reviews',
    titleKey: 'reviews.title',
    breadcrumb: ['home','reviews'],
    sections: [
      { type: 'list', items: [
          { titleKey: 'reviews.alien.title', textKey: 'reviews.alien.text', href: '/movie/1' },
          { titleKey: 'reviews.theThing.title', textKey: 'reviews.theThing.text', href: '/movie/2' },
          { titleKey: 'reviews.hereditary.title', textKey: 'reviews.hereditary.text', href: '/movie/3' },
          { titleKey: 'reviews.friday13.title', textKey: 'reviews.friday13.text', href: '/movie/4' },
          { titleKey: 'reviews.it1990.title', textKey: 'reviews.it1990.text', href: '/movie/5' },
          { titleKey: 'reviews.sinister.title', textKey: 'reviews.sinister.text', href: '/movie/6' },
          { titleKey: 'reviews.conjuring2.title', textKey: 'reviews.conjuring2.text', href: '/movie/7' },
          { titleKey: 'reviews.anabelle.title', textKey: 'reviews.anabelle.text', href: '/movie/8' }
        ]}
    ],
    footerKey: 'footer.default'
  },

  about: {
    slug: 'about',
    titleKey: 'about.title',
    breadcrumb: ['home','about'],
    sections: [
      { type: 'text', textKey: 'about.text' }
    ],
    footerKey: 'footer.default'
  },

  contact: {
    slug: 'contact',
    titleKey: 'contact.title',
    breadcrumb: ['home','contact'],
    sections: [
      { type: 'contacts' }
    ],
    footerKey: 'footer.default'
  }
};
