// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  type UUID = ReturnType<typeof crypto.randomUUID>;
  type AppErrorCode = 'NOT_FOUND' | 'UNAUTHORIZED' | 'FORBIDDEN';

  type User = {
    id: UUID;
    name: string;
    email: string;
    password: string;
    permissions: string[];
    avatar?: string;
  };

  namespace App {
    interface Error {
      code: AppErrorCode;
    }
    interface Locals {
      user: User;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
