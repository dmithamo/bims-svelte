import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';
import { AppErrorCode } from '$lib/utils/enums';

export const load: PageServerLoad = () => {
  return error(404, { code: AppErrorCode.NOT_FOUND, message: 'Page not found' });
};
