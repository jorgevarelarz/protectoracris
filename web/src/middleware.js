import { defineMiddleware } from 'astro/middleware';

const supported = ['en', 'fr'];

function pickLanguage(header) {
  if (!header) return null;
  const parts = header.split(',').map((entry) => entry.trim());
  for (const part of parts) {
    const lang = part.split(';')[0].toLowerCase();
    const base = lang.split('-')[0];
    if (supported.includes(base)) return base;
  }
  return null;
}

export const onRequest = defineMiddleware((context, next) => {
  const { url, request } = context;

  if (url.pathname !== '/') {
    return next();
  }

  const lang = pickLanguage(request.headers.get('accept-language'));
  if (lang) {
    return context.redirect(`/${lang}`, 302);
  }

  return next();
});
