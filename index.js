class BlogPost extends HTMLElement {
  connectedCallback() {
    document.head.insertAdjacentHTML('beforeend', `
      <meta property="og:type" content="article"/>
      <meta property="og:site_name" content="Moandji Ezana Blog"/>
      <meta property="article:author" content="http://facebook.com/mwanji" />
      <meta property="og:title" content="${this.dataset.title}" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@mwanji" />
      <meta name="twitter:creator" content="@mwanji" />
      <meta name="twitter:title" content="${this.dataset.title}" />
    `);
    if (this.dataset.description) {
      document.head.insertAdjacentHTML('beforeend', `<meta name="twitter:description" content="${this.dataset.description}" />`);
    }
    if (this.dataset.socialImage) {
      document.head.insertAdjacentHTML('beforeend', `<meta name="twitter:image" content="${this.dataset.socialImage}" />`);
    }
    if (this.dataset.socialImageAlt) {
      document.head.insertAdjacentHTML('beforeend', `<meta name="twitter:image:alt" content="${this.dataset.socialImageAlt}" />`);
    }
    
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
    el.innerHTML = `<div id="container">
      <mke-header></mke-header>
      ${el.innerHTML}
      <mke-footer></mke-footer>
    </div>`;
  }
}

function link(title, href, classes) {
  const a = document.createElement('a');
  a.title = title;
  a.href = href;
  a.insertAdjacentHTML('afterbegin', `<i class="${classes}"></i>`);

  return a;
}

document.head.insertAdjacentHTML('beforeend', `
  <meta name="author" content="Moandji Ezana">
`);

customElements.define('social-links', SocialLinks);
customElements.define('mke-credits', Credits);
customElements.define('mke-header', Header);
customElements.define('mke-footer', Footer);
customElements.define('mke-page', Page);
customElements.define('mke-blog-post', BlogPost);
