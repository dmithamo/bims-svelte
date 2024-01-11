export enum LogoSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum AppRoute {
  login = '/auth/login',
  logout = '/auth/logout',
  moneyOverview = '/money',
  moneyBudget = '/money/budget',
  moneyTransactions = '/money/transactions',
  moneySettings = '/money/settings',
  notifications = '/notifications',
  account = '/account',
  profile = '/profile',
  timelinesOverview = '/timelines',
  timelinesSettings = '/timelines/settings',
  assetsOverview = '/assets',
  assetsSettings = '/assets/settings'
}

export enum AppErrorCode {
  'NOT_FOUND' = 'NOT_FOUND',
  'GENERIC_ERROR' = 'GENERIC_ERROR',
  'UNAUTHORIZED' = 'UNAUTHORIZED'
}

export enum AppIcon {
  moneyOverview = 'solar:wallet-2-outline',
  moneyOverviewActive = 'solar:wallet-2-bold',
  moneyBudget = 'solar:pie-chart-2-broken',
  moneyBudgetActive = 'solar:pie-chart-2-bold',
  moneyTransactions = 'solar:card-transfer-outline',
  moneyTransactionsActive = 'solar:card-transfer-bold',
  accountSettings = 'solar:shield-user-outline',
  accountSettingsActive = 'solar:shield-user-bold',
  notifications = 'solar:bell-outline',
  notificationsActive = 'solar:bell-bold',
  userAvatar = 'solar:user-circle-outline',
  userAvatarActive = 'solar:user-circle-bold',
  close = 'carbon:close',
  login = 'uiw:login',
  logout = 'uiw:logout',
  id = 'solar:user-id-outline',
  idActive = 'solar:user-id-bold',
  timelinesOverview = 'solar:calendar-outline',
  timelinesOverviewActive = 'solar:calendar-bold',
  assetsOverview = 'solar:safe-square-outline',
  assetsOverviewActive = 'solar:safe-square-bold',
  settings = 'solar:settings-linear',
  settingsActive = 'solar:settings-bold'
}
