import type { Actions } from '@sveltejs/kit';

export const actions = {
  default: async (event) => {
    console.log(event);
  }
} satisfies Actions;
