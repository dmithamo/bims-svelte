import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get('sessionid');
  // get session data from database
  if (sessionId) {
    event.locals = {
      ...event.locals,
      user: {
        id: crypto.randomUUID(),
        name: 'D Mithamo',
        role: 'admin',
        email: 'b@dmithamo.dev'
      }
    };
  }
  return resolve(event);
};
