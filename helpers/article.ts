export const getArticleRoot = () => document.getElementById('article') || document.createElement('div');
export const getHeaders = () => Array.from(getArticleRoot().querySelectorAll('h1, h2, h3, h4, h5, h6'));

const reducer = (fn: (header: HTMLHeadingElement) => void) => {
  const article = getArticleRoot();
  if (article) {
    const headers = getHeaders();
    headers.forEach((header) => {
      fn(header as HTMLHeadingElement);
    });
  }
};

export const addHeaderIds = () => {
  reducer((header) => {
    if (header?.textContent !== null) {
      const id = header.textContent
        .replace(/([.,!?-])/g, '')
        .replaceAll(' ', '-')
        .toLowerCase();
      header.setAttribute('id', id);
    }
  });
};

export const addHeaderARIA = () => {
  reducer((header) => {
    if (header !== null) {
      header.setAttribute('role', 'contentinfo');
      header.setAttribute('aria-label', `${header.tagName.toLowerCase()} ${header.textContent}`);
    }
  });
};

export const updateURL = (header: string) => {
  const url = `${window.location.pathname}#${header}`;
  window.history.pushState(null, '', url);
};
