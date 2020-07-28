class SocialLinks extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(fontAwesomeLink());
    shadow.appendChild(css())
    shadow.appendChild(link('Email', 'mailto:moandji@ezana.net', 'far fa-envelope'));
    shadow.appendChild(link('LinkedIn', 'https://www.linkedin.com/in/moandjiezana/', 'fab fa-linkedin'));
    shadow.appendChild(link('Github', 'https://github.com/mwanji', 'fab fa-github'));
    shadow.appendChild(link('@mwanji', 'https://twitter.com/mwanji', 'fab fa-twitter'));
    shadow.appendChild(link('Facebook', 'mailto:moandji@ezana.net', 'fab fa-facebook'));
  }
}

function link(title, href, classes) {
  const a = document.createElement('a');
  a.title = title;
  a.href = href;
  a.insertAdjacentHTML('afterbegin', `<i class="${classes}"></i>`);

  return a;
}

function fontAwesomeLink() {
  const cssLink = document.createElement('link');
  cssLink.setAttribute('rel', 'stylesheet');
  cssLink.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css');
  cssLink.setAttribute('integrity', 'sha512-1PKOgIY59xJ8Co8+NE6FZ+LOAZKjy+KY8iq0G4B3CyeY6wYHN3yt9PW0XpSriVlkMXe40PTKnXrLnZ9+fkDaog==');
  cssLink.setAttribute('crossorigin', 'anonymous');

  return cssLink;
}

function css() {
  const styles = document.createElement('style');
  styles.textContent = `
    a {
      font-size: 2.5rem;
      color: var(--link-color);
    }

    a:not(:last-child) {
      margin-right: 0.8rem;
    }
  
    i.fa-github {
      font-size: 110%;
      color: rgb(var(--text-color));
    }

    i.fa-linkedin {
      color: #007bb6;
    }

    i.fa-facebook {
      color: #3b5999;
    }

    i.fa-twitter {
      color: #00aced;
    }

    i.fa-envelope-o {
      color: #555;
    }
  `;

  return styles;
}

customElements.define('social-links', SocialLinks);
