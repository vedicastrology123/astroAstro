// src/middleware.ts
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  // Example: Set a cookie if it doesn't already exist
  if (!context.cookies.has('user_session')) {
    context.cookies.set('user_session', 'some_session_id', {
      httpOnly: true,
      secure: import.meta.env.PROD,
      maxAge: 60 * 60 * 24 * 3, // 3 days
      path: '/',
    });
  }

  return next();
});