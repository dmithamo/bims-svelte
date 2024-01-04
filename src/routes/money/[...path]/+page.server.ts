import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../../$types';

export const load: PageServerLoad = () => {
  error(404, { message: 'Page not found', code: 'NOT_FOUND' });
};
