import { AppIcon, type AppRoute } from './enums';

export type NavItem = {
  label: string;
  icon: AppIcon;
  iconActive: AppIcon;
  path: AppRoute;
  permissions: string[];
};

export type UUID = ReturnType<typeof crypto.randomUUID>;

export type TApp = {
  id: UUID;
  name: string;
  icon: AppIcon;
  path: AppRoute;
  permissions: TPermission[]; // Minimum permissions required to access the app's root route
  description?: string;
};

export type TPermission = `${string}:${string}` | string;
export type TRole = {
  id: UUID;
  name: string;
  permissions: TPermission[];
};

export type TAccount = {
  id: UUID;
  name: string;
};

export type TSessionUser = {
  id: UUID;
  name: string;
  email: string;
  account: TAccount;
  avatar?: string;
  role: {
    name: string;
    id: UUID;
  };
};
