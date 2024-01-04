import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
  login: async ({ request, cookies, url }) => {
    const formData = await request.formData();
    const username = formData.get('username');
    const password = formData.get('password');

    if (!(username === 'b@dmithamo.dev' && password === 'password')) {
      return fail(400, {
        invalidCredentials: true,
        submitted: true,
        username
      });
    }

    cookies.set('sessionid', crypto.randomUUID(), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7 // 1 week
    });

    redirect(303, url.searchParams.get('redirect') || '/');
  }
} satisfies Actions;
