import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  const sessionId = event.cookies.get('sessionId');
  // get session data from database
  if (sessionId) {
    event.locals = {
      ...event.locals,
      user: {
        id: crypto.randomUUID(),
        name: 'D Mithamo',
        role: { id: 'fbd418df-9a68-4e42-bc30-e062805f1837', name: 'admin' },
        email: 'b@dmithamo.dev',
        account: {
          id: 'fbd418df-9a68-4e42-bc30-e062805f1837',
          name: 'Bundi IMS'
        }
      }
    };
  }
  return resolve(event);
};
