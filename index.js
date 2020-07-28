class SocialLinks extends HTMLElement {
  constructor() {
    const el = super();
    el.insertAdjacentElement('beforeend', link('Email', 'mailto:moandji@ezana.net', 'far fa-envelope'));
    el.insertAdjacentElement('beforeend', link('LinkedIn', 'https://www.linkedin.com/in/moandjiezana/', 'fab fa-linkedin'));
    el.insertAdjacentElement('beforeend', link('Github', 'https://github.com/mwanji', 'fab fa-github'));
    el.insertAdjacentElement('beforeend', link('@mwanji', 'https://twitter.com/mwanji', 'fab fa-twitter'));
    el.insertAdjacentElement('beforeend', link('Facebook', 'mailto:moandji@ezana.net', 'fab fa-facebook'));
  }
}

class Credits extends HTMLElement {
  constructor() {
    const el = super();
    el.insertAdjacentText('beforeend', ` 2009 - ${new Date().getFullYear()}`)
  }
}

function link(title, href, classes) {
  const a = document.createElement('a');
  a.title = title;
  a.href = href;
  a.insertAdjacentHTML('afterbegin', `<i class="${classes}"></i>`);

  return a;
}

customElements.define('social-links', SocialLinks);
customElements.define('mke-credits', Credits);