import { AppIcon, type AppRoute } from './enums';

export type NavItem = {
  label: string;
  icon: AppIcon;
  path: AppRoute;
  permissions: string[];
};

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type App = {
  id: UUID;
  name: string;
  icon: AppIcon;
  path: AppRoute;
  permissions: Permission[]; // Minimum permissions required to access the app's root route
  description?: string;
};

export type Permission = `${string}:${string}` | string;
export type Role = {
  id: UUID;
  name: string;
  permissions: Permission[];
};

export type Account = {
  id: UUID;
  name: string;
};

export type SessionUser = {
  id: UUID;
  name: string;
  email: string;
  account: Account;
  avatar?: string;
  role: {
    name: string;
    id: UUID;
  };
};
