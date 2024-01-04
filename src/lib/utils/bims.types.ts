import type { AppRoute } from './enums';

export type SidebarItem = {
  label: string;
  icon: AppIcon;
  path: AppRoute;
  permissions: string[];
};
