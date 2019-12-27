/*
A simple helper function to prepare the HTML markup. This loads:
- Page title
- SEO meta tags
- Preloaded state (for Redux) depending on the current route
- Code-split script tags depending on the current route
*/
const injectHTML = (data, { html, title, meta, link, body, scripts, state }) => {
    data = data.replace('<html>', `<html ${html}>`);
    data = data.replace(/<title>.*?<\/title>/g, title);
    data = data.replace('</head>', `${meta}</head>`);
    data = data.replace('</head>', `${link}</head>`);
    data = data.replace(
      '<div id="root">',
      `<div id="root">${body}`
    );
    data = data.replace('</body>', `<script>
window.__PRELOADED_STATE__ = ${state}
</script>` + '</body>');
    
    return data;
};


module.exports = {
    injectHTML,
};
