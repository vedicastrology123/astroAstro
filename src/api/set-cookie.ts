
// src/pages/set-cookie-example.astro
if (Astro.request.method === 'POST') {
  Astro.cookies.set('my_cookie_name', 'my_cookie_value', {
    httpOnly: true, // Recommended for security
    secure: import.meta.env.PROD, // Set to true in production for HTTPS-only
    maxAge: 60 * 60 * 24 * 7, // 1 week in seconds
    path: '/', // Makes the cookie available across the entire site
  });
  return Astro.redirect('/success'); // Redirect after setting the cookie
}

<h1>Set Cookie Example</h1>
<form method="POST">
  <button type="submit">Set Cookie</button>
</form>