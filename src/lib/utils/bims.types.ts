import type { AppRoute } from './enums';

export type NavItem = {
  label: string;
  icon: AppIcon;
  path: AppRoute;
  permissions: string[];
};
