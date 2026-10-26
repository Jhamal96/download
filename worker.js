import html from './index.html';

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname !== '/' && url.pathname !== '/index.html' && url.pathname !== '/download' && url.pathname !== '/downloads') {
      return new Response('Not found', { status: 404, headers: { 'content-type': 'text/plain; charset=utf-8' } });
    }
    return new Response(request.method === 'HEAD' ? null : html, {
      headers: {
        'content-type': 'text/html; charset=utf-8',
        'cache-control': 'public, max-age=0, must-revalidate',
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin',
        'content-security-policy': "default-src 'self'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; connect-src https://xqqqahpaunoqpitvhrlw.supabase.co; img-src 'self' data:; object-src 'none'; base-uri 'none'; frame-ancestors 'none'"
      }
    });
  }
};
