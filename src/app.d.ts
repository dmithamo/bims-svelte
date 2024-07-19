// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { AppErrorCode } from '$lib/utils/enums';
import type { TSessionUser } from '$lib/utils/bims.types';

declare global {
  namespace App {
    interface Error {
      code: AppErrorCode;
    }

    interface Locals {
      user: TSessionUser;
    }

    // interface PageData {}
    interface PageState {
      showModal: boolean;
    }

    // interface Platform {}
  }
}

export {};
