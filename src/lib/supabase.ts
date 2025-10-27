//import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   import.meta.env.SUPABASE_URL,
//   import.meta.env.SUPABASE_ANON_KEY,
//   {
//     auth: {
//       flowType: "pkce",
//     },
//   },
// );

    // src/lib/supabase.ts
    // import { createServerClient } from '@supabase/ssr';
    // import type { AstroCookies } from 'astro';

    // export function getSupabase(cookies: AstroCookies) {
    //   return createServerClient(
    //     import.meta.env.SUPABASE_URL,
    //     import.meta.env.SUPABASE_ANON_KEY,
    //     {
    //       cookies: {
    //         get(name: string) {
    //           return cookies.get(name)?.value;
    //         },
    //         set(name: string, value: string, options: any) {
    //           cookies.set(name, value, options);
    //         },
    //         remove(name: string, options: any) {
    //           cookies.delete(name, options);
    //         },
    //       },
    //     }
    //   );
    // }


import { createServerClient, parseCookieHeader } from "@supabase/ssr";

export const supabase = createServerClient(
  import.meta.env.PUBLIC_SUPABASE_URL,
  import.meta.env.PUBLIC_SUPABASE_PUBLISHABLE_KEY,
  {
    cookies: {
      get(name: string) {
        return Astro.cookies.get(name)?.value;
      },
      set(name: string, value: string, options: any) {
        Astro.cookies.set(name, value, options);
      },
      remove(name: string, options: any) {
        Astro.cookies.delete(name, options);
      },
      getAll() {
        return parseCookieHeader(Astro.request.headers.get('Cookie') ?? '')
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) =>
          Astro.cookies.set(name, value, options))
      },
    },
  }
);
