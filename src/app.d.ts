// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { AppErrorCode } from '$lib/utils/enums';
import type { SessionUser } from '$lib/utils/bims.types';

declare global {
  namespace App {
    interface Error {
      code: AppErrorCode;
    }
    interface Locals {
      user: SessionUser;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
