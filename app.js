// public/app.js
const i18n = {
  ru: {
    'nav.home': 'Главная',
    'nav.movies': 'Фильмы',
    'nav.reviews': 'Обзоры',
    'nav.about': 'О сайте',
    'nav.contact': 'Контакты',

    'home.title': 'Главная',
    'home.hero.title': 'Night Terrors',
    'home.hero.subtitle': 'Обзоры и краткие описания лучших фильмов ужасов.',

    'movies.title': 'Фильмы',
    'genre.sciFiHorror': 'Научная фантастика, хоррор',
    'genre.bodyHorror': 'Боди-хоррор',
    'genre.supernatural': 'Сверхъестественный хоррор',
    'genre.slasher': 'Слэшер',

    'movies.items.alien.title': 'Чужой',
    'movies.items.alien.short':
      'Экипаж «Ностромо» сталкивается с идеальным хищником.',

    'movies.items.theThing.title': 'Нечто',
    'movies.items.theThing.short':
      'Антарктическая база против существа, копирующего формы жизни.',

    'movies.items.hereditary.title': 'Реинкарнация',
    'movies.items.hereditary.short':
      'Семейные тайны и незримые силы, ведущие к ужасу.',

    'movies.items.friday13.title': 'Пятница, 13‑е',
    'movies.items.friday13.short':
      'Классический слэшер о Джейсоне Вурхизе, ставший культовым символом жанра.',

    'movies.items.it1990.title': 'Оно (1990)',
    'movies.items.it1990.short': 'Телевизионная экранизация романа Стивена Кинга о клоуне Пеннивайзе.',

    'movies.items.sinister.title': 'Синистер',
    'movies.items.sinister.short': 'История писателя, который находит пугающие плёнки, раскрывающие тайну древнего демона.',

    'movies.items.conjuring2.title': 'Заклятие 2',
    'movies.items.conjuring2.short': 'Эд и Лоррейн Уоррен расследуют дело в Энфилде, сталкиваясь с новым проявлением зла.',

    'movies.items.anabelle.title': 'Проклятие Аннабель',
    'movies.items.anabelle.short': 'Фильм о демонической кукле, ставшей одним из самых узнаваемых символов современного хоррора.',

    'reviews.title': 'Обзоры',
    'reviews.alien.title': 'Почему «Чужой» пугает спустя десятилетия',
    'reviews.alien.text':
      'Медленный саспенс, клаустрофобия и биомеханический кошмар делают «Чужого» вечным.',
    'reviews.theThing.title': 'Изоляция в «Нечто» как источник ужаса',
    'reviews.theThing.text':
      'Недоверие и практические эффекты превращают страх в осязаемую угрозу.',
    'reviews.hereditary.title': 'Тихий ужас «Реинкарнации»',
    'reviews.hereditary.text':
      'Нарастающее отчаяние и трагедия без дешёвых пугалок.',
    'reviews.friday13.title': 'Пятница, 13‑е (1980)',
    'reviews.friday13.text':
      'Фильм положил начало целой франшизе слэшеров. Атмосфера летнего лагеря, напряжение вокруг загадочного убийцы и неожиданный финал сделали картину культовой. Несмотря на скромный бюджет, «Пятница, 13‑е» задала тон десяткам последующих хорроров.',
    'reviews.it1990.title': 'Оно (1990)',
    'reviews.it1990.text':
      'Телевизионная экранизация романа Стивена Кинга запомнилась зрителям благодаря образу Пеннивайза в исполнении Тима Карри. Фильм исследует детские страхи и силу дружбы, а его двухсерийная структура позволила глубже раскрыть историю. Несмотря на формат ТВ, «Оно» стало важной частью хоррор‑культуры.',
    'reviews.sinister.title': 'Синистер (2012)',
    'reviews.sinister.text': 'Фильм впечатляет атмосферой тревоги: найденные плёнки и фигура демона Багула создают ощущение неизбежного ужаса. Отличается умелым использованием звука и визуальных образов для нагнетания страха.',
    'reviews.conjuring2.title': 'Заклятие 2 (2016)',
    'reviews.conjuring2.text': 'Продолжение истории Уорренов переносит зрителя в Энфилд. Фильм сочетает семейную драму и паранормальные явления, а сцены с монахиней Валак стали одними из самых запоминающихся в современном хорроре.',
    'reviews.anabelle.title': 'Проклятие Аннабель (2014)',
    'reviews.anabelle.text': 'История демонической куклы раскрывает истоки её проклятия. Несмотря на критику, фильм укрепил популярность вселенной «Заклятия» и сделал Аннабель культовым символом современного ужаса.',

    'about.title': 'О сайте',
    'about.text': 'Этот сайт посвящён культовым фильмам ужасов и их обзорам.',

    'contact.title': 'Контакты',
    'footer.default': {
      social: [
        { label: 'VK', href: 'https://vk.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
      ],
      contacts: [
        { label: 'Email', value: 'contact@nightterrors.example' },
        { label: 'Телефон', value: '+994 (00) 000-00-00' },
        { label: 'Адрес', value: 'Баку, Азербайджан' },
      ],
      partners: [
        { label: 'NightWatch', href: 'https://example.com' },
        { label: 'DarkScreen', href: 'https://example.com' },
      ],
    },
  },

  en: {
    'nav.home': 'Home',
    'nav.movies': 'Movies',
    'nav.reviews': 'Reviews',
    'nav.about': 'About',
    'nav.contact': 'Contact',

    'home.title': 'Home',
    'home.hero.title': 'Night Terrors',
    'home.hero.subtitle':
      'Reviews and brief descriptions of iconic horror films.',

    'movies.title': 'Movies',
    'genre.sciFiHorror': 'Sci-fi, Horror',
    'genre.bodyHorror': 'Body Horror',
    'genre.supernatural': 'Supernatural Horror',
    'genre.slasher': 'Slasher',

    'movies.items.alien.title': 'Alien',
    'movies.items.alien.short': 'The Nostromo crew faces the perfect predator.',

    'movies.items.theThing.title': 'The Thing',
    'movies.items.theThing.short':
      'An Antarctic base against a life-copying entity.',

    'movies.items.hereditary.title': 'Hereditary',
    'movies.items.hereditary.short':
      'Family secrets and unseen forces escalate to terror.',

    'movies.items.friday13.title': 'Friday the 13th',
    'movies.items.friday13.short':
      'Classic slasher introducing Jason Voorhees, a cult horror icon.',

    'movies.items.it1990.title': 'It (1990)',
    'movies.items.it1990.short':
      'TV adaptation of Stephen King’s novel featuring Pennywise the Clown.',

    'movies.items.sinister.title': 'Sinister',
    'movies.items.sinister.short': 'A writer discovers chilling home movies tied to an ancient demon.',

    'movies.items.conjuring2.title': 'The Conjuring 2',
    'movies.items.conjuring2.short': 'Ed and Lorraine Warren investigate the Enfield case, facing a new evil.',

    'movies.items.anabelle.title': 'Annabelle',
    'movies.items.anabelle.short': 'The story of a demonic doll that became a modern horror icon.',

    'reviews.title': 'Reviews',
    'reviews.alien.title': 'Why Alien still terrifies decades later',
    'reviews.alien.text':
      'Deliberate suspense, claustrophobia, and biomechanical nightmare make it timeless.',
    'reviews.theThing.title': 'Isolation in The Thing as a horror engine',
    'reviews.theThing.text':
      'Distrust and practical effects turn fear tangible.',
    'reviews.hereditary.title': 'The quiet dread of Hereditary',
    'reviews.hereditary.text':
      'Relentless despair and tragedy without cheap jump-scares.',
    'reviews.friday13.title': 'Friday the 13th (1980)',
    'reviews.friday13.text':
      'The film launched an entire slasher franchise. Its summer camp atmosphere, the tension surrounding a mysterious killer, and the unexpected ending made it a cult classic. Despite its modest budget, Friday the 13th set the tone for dozens of subsequent horror films.',
    'reviews.it1990.title': 'It (1990)',
    'reviews.it1990.text':
      "The television adaptation of Stephen King's novel was memorable for Tim Curry's portrayal of Pennywise. The film explores childhood fears and the power of friendship, and its two-part structure allowed for a more in-depth exploration of the story. Despite its television format, It has become a vital part of horror culture.",
    'reviews.sinister.title': 'Sinister (2012)',
    'reviews.sinister.text': 'A chilling atmosphere built around found footage and the demon Bughuul. Sound design and imagery heighten the sense of dread.',
    'reviews.conjuring2.title': 'The Conjuring 2 (2016)',
    'reviews.conjuring2.text': 'The Warrens’ investigation in Enfield blends family drama with paranormal terror. The scenes with Valak the Nun became iconic in modern horror.',
    'reviews.anabelle.title': 'Annabelle (2014)',
    'reviews.anabelle.text': 'Explores the origins of the cursed doll. Despite mixed reviews, it solidified the Conjuring universe and made Annabelle a horror icon.',

    'about.title': 'About',
    'about.text':
      'Night Terrors is an independent project about the art of horror. We gather reviews, facts, and analysis so you can find films that truly grip you.',
    'contact.title': 'Contact',
    'footer.default': {
      social: [
        { label: 'VK', href: 'https://vk.com' },
        { label: 'Instagram', href: 'https://instagram.com' },
        { label: 'YouTube', href: 'https://youtube.com' },
      ],
      contacts: [
        { label: 'Email', value: 'contact@nightterrors.example' },
        { label: 'Phone', value: '+994 (00) 000-00-00' },
        { label: 'Address', value: 'Baku, Azerbaijan' },
      ],
      partners: [
        { label: 'NightWatch', href: 'https://example.com' },
        { label: 'DarkScreen', href: 'https://example.com' },
      ],
    },
  },
};

const state = {
  lang: localStorage.getItem('lang') || 'ru',
  current: null
};

const $app = document.getElementById('app');
const $breadcrumb = document.getElementById('breadcrumb');
const $footer = document.getElementById('footer');

function t(key) {
  const dict = i18n[state.lang];
  if (typeof key === 'string') return (dict[key] ?? key);
  return key;
}

function applyNavActive(slug) {
  document.querySelectorAll('.site-nav a').forEach(a => {
    const href = new URL(a.href).pathname.replace('/', '');
    a.setAttribute('aria-current', href === slug ? 'page' : null);
  });
}

function renderBreadcrumb(keys = []) {
  const labels = {
    home: t('nav.home'),
    movies: t('nav.movies'),
    reviews: t('nav.reviews'),
    about: t('nav.about'),
    contact: t('nav.contact'),
  };
  let html = '';
  keys.forEach((k, idx) => {
    const href = `/${k}`;
    const label = labels[k] || k;
    if (idx < keys.length - 1) {
      html += `<a href="${href}" data-link>${label}</a><span class="sep">/</span>`;
    } else {
      html += `<span>${label}</span>`;
    }
  });
  $breadcrumb.innerHTML = html;
}

function renderFooter(footerKey) {
  const footerData = t(footerKey);
  const social = footerData.social.map(s => `<a href="${s.href}" target="_blank" rel="noopener">${s.label}</a>`).join(' • ');
  const contacts = footerData.contacts.map(c => `<div><strong>${c.label}:</strong> ${c.value}</div>`).join('');
  const partners = footerData.partners.map(p => `<a href="${p.href}" target="_blank" rel="noopener">${p.label}</a>`).join(', ');
  $footer.innerHTML = `
    <div class="footer-grid">
      <div class="footer-col">
        <h4>${state.lang === 'ru' ? 'Мы в соцсетях' : 'Social'}</h4>
        <div>${social}</div>
      </div>
      <div class="footer-col">
        <h4>${state.lang === 'ru' ? 'Контакты' : 'Contacts'}</h4>
        <div>${contacts}</div>
      </div>
      <div class="footer-col">
        <h4>${state.lang === 'ru' ? 'Партнёры' : 'Partners'}</h4>
        <div>${partners}</div>
      </div>
    </div>
  `;
}

function renderHome(page) {
  const hero = page.sections[0];
  $app.innerHTML = `
    <section class="hero fade-in">
      <h1>${t(hero.titleKey)}</h1>
      <p>${t(hero.subtitleKey)}</p>
    </section>
  `;
}

function initSlider() {
  const slider = document.querySelector('.slider');
  if (!slider) return;
  const track = slider.querySelector('.slide-track');
  const slides = Array.from(track.children);
  let idx = 0;
  const go = next => {
    idx = (idx + next + slides.length) % slides.length;
    track.style.transform = `translateX(-${idx * 100}%)`;
  };
  slider.querySelector('[data-slide="prev"]').onclick = () => go(-1);
  slider.querySelector('[data-slide="next"]').onclick = () => go(1);

  setInterval(() => go(1), 6000);
}

function renderMovies(page) {
  $app.innerHTML = `
    <section class="fade-in">
      <h1 class="section-title">${t(page.titleKey)}</h1>
      <div class="card-grid">
        ${page.data.items.map(m => `
          <a class="card" href="/movie/${m.id}" data-link>
            <div class="thumb" style="background-image:url('${m.poster}')"></div>
            <div class="body">
              <div class="title">${t(m.titleKey)}</div>
              <div class="meta">${t(m.genreKey)} • ${m.year} • ★ ${m.rating}</div>
              <p>${t(m.shortKey)}</p>
              <div class="link">${state.lang === 'ru' ? 'Подробнее' : 'Details'}</div>
            </div>
          </a>
        `).join('')}
      </div>
    </section>
  `;
}


function renderReviews(page) {
  $app.innerHTML = `
    <section class="fade-in">
      <h1 class="section-title">${t(page.titleKey)}</h1>
      <div class="list">
        ${page.sections[0].items.map(r => `
          <div class="list-item">
            <h3>${t(r.titleKey)}</h3>
            <p>${t(r.textKey)}</p>
            <a href="${r.href}" data-link>${state.lang === 'ru' ? 'Подробнее' : 'Read more'}</a>
          </div>
        `).join('')}
      </div>
    </section>
  `;
}

function renderAbout(page) {
  const section = page.sections[0];
  $app.innerHTML = `
    <section class="fade-in">
      <h1 class="section-title">${t(page.titleKey)}</h1>
      <p>${t(section.textKey)}</p>
    </section>
  `;
}

function renderContact(page) {
  const f = t(page.footerKey);
  const email = f.contacts.find(c => c.label.toLowerCase().includes('email'))?.value || '';
  const phone = f.contacts.find(c => c.label.toLowerCase().includes(state.lang === 'ru' ? 'телефон' : 'phone'))?.value || '';
  const address = f.contacts.find(c => c.label.toLowerCase().includes(state.lang === 'ru' ? 'адрес' : 'address'))?.value || '';
  $app.innerHTML = `
    <section class="fade-in">
      <h1 class="section-title">${t(page.titleKey)}</h1>
      <div class="list">
        <div class="list-item"><strong>${state.lang === 'ru' ? 'Email' : 'Email'}:</strong> ${email}</div>
        <div class="list-item"><strong>${state.lang === 'ru' ? 'Телефон' : 'Phone'}:</strong> ${phone}</div>
        <div class="list-item"><strong>${state.lang === 'ru' ? 'Адрес' : 'Address'}:</strong> ${address}</div>
      </div>
    </section>
  `;
}

async function navigate(pathname, replace = false) {
  const parts = pathname.split('/').filter(Boolean);
  let slug = parts[0] || 'home';

  if (slug === 'movie' && parts[1]) {
    const id = parseInt(parts[1], 10);
    const res = await fetch('/api/page/movies');
    if (res.ok) {
      const moviesPage = await res.json();
      const m = moviesPage.data.items.find(item => item.id === id);
      if (m) {
        $app.innerHTML = `
          <section class="fade-in">
            <div class="hero">
              <h1>${t(m.titleKey)} (${m.year}) • ★ ${m.rating}</h1>
              <p class="meta">${t(m.genreKey)}</p>
            </div>
            <div class="card" style="margin-top:1rem">
              <div class="body">
              <div class="thumb" style="background-image:url('${m.poster}')"></div>
                <p>${t(m.shortKey)}</p>
                <a href="/movies" data-link>
                  ${state.lang === 'ru' ? 'Назад к списку' : 'Back to list'}
                </a>
              </div>
            </div>
          </section>
        `;
        renderBreadcrumb(['home', 'movies', t(m.titleKey)]);
        renderFooter('footer.default');
        applyNavActive('movies');
        const url = `/movie/${id}`;
        history[replace ? 'replaceState' : 'pushState']({}, '', url);
        state.current = url;
        return;
      }
    }
    slug = 'home';
  }

  const res = await fetch(`/api/page/${slug}`);
  if (!res.ok) {
    console.warn('Page not found, redirecting to home');
    return navigate('/home', true);
  }
  const page = await res.json();

  if (slug === 'home') renderHome(page);
  else if (slug === 'movies') renderMovies(page);
  else if (slug === 'reviews') renderReviews(page);
  else if (slug === 'about') renderAbout(page);
  else if (slug === 'contact') renderContact(page);
  else $app.innerHTML = '<p>404</p>';

  renderBreadcrumb(page.breadcrumb);
  renderFooter(page.footerKey);
  applyNavActive(slug);

  history[replace ? 'replaceState' : 'pushState']({}, '', `/${slug}`);
  state.current = `/${slug}`;
  $app.focus();
}

document.addEventListener('click', (e) => {
  const a = e.target.closest('a[data-link]');
  if (a) {
    e.preventDefault();
    const url = new URL(a.href);
    navigate(url.pathname);
  }
});

window.addEventListener('popstate', () => navigate(location.pathname, true));

window.addEventListener('DOMContentLoaded', () => {

  applyLanguage(state.lang);

  initThemeToggle();

  initScrollTop();

  navigate(location.pathname || '/home', true);

  localizeStaticNav();

  initLangSwitch();
});

function localizeStaticNav() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}

function applyLanguage(lang) {
  state.lang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  localizeStaticNav();

  if (state.current) navigate(state.current, true);
}

function initLangSwitch() {
  document.querySelectorAll('.lang-switch .btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

function initThemeToggle() {
  const $toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);
  $toggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  const onScroll = () => {
    if (window.scrollY > 200) btn.classList.add('show');
    else btn.classList.remove('show');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
