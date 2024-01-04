import type { AppRoute } from './enums';

export type SidebarItem = {
  label: string;
  icon: string;
  path: AppRoute;
  permissions: string[];
};
