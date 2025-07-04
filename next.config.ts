// next.config.js
module.exports = {
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self';
              script-src 'self' https://pagead2.googlesyndication.com https://www.google-analytics.com 'unsafe-inline' 'unsafe-eval';
              style-src 'self' 'unsafe-inline';
              img-src * blob: data:;
              connect-src *;
              frame-src https://*.doubleclick.net https://*.googlesyndication.com;
            `.replace(/\s{2,}/g, ' ').trim()
          }
        ]
      }
    ]
  }
}
