class BlogPost extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<article>
      <time datetime="${this.dataset.datetime}">${this.dataset.date}</time>
      <h1><a href=".">${this.dataset.title}</a></h1>
      ${this.innerHTML}
    </article>`;
  }
}

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
    el.innerHTML = `&copy; 2009 - ${new Date().getFullYear()} Moandji Ezana`;
  }
}

class Header extends HTMLElement {
  constructor() {
    const el = super();
    el.insertAdjacentHTML('afterbegin', `
      <header>
        <h1><a href="/">Moandji Ezana</a></h1>
        <span>Blog</span>
      </header>
    `);
  }
}

class Footer extends HTMLElement {
  constructor() {
    const el = super();
    el.insertAdjacentHTML('afterbegin', '<footer><social-links></social-links><mke-credits></mke-credits></footer>');
  }
}

class Page extends HTMLElement {
  constructor() {
    const el = super();
    el.insertAdjacentHTML('afterbegin', '<mke-header>');
    el.insertAdjacentHTML('beforeend', '<mke-footer>');
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
customElements.define('mke-header', Header);
customElements.define('mke-footer', Footer);
customElements.define('mke-page', Page);
customElements.define('mke-blog-post', BlogPost);