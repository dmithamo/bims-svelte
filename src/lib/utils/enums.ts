export enum LogoSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large'
}

export enum AppRoute {
  login = '/auth/login',
  moneyOverview = '/money',
  moneyBudget = '/money/budget',
  moneyTransactions = '/money/transactions',
  moneySettings = '/money/settings',
  notifications = '/notifications',
  preferences = '/preferences',
  profile = '/profile'
}

export enum AppErrorCode {
  'NOT_FOUND' = 'NOT_FOUND',
  'GENERIC_ERROR' = 'GENERIC_ERROR',
  'UNAUTHORIZED' = 'UNAUTHORIZED'
}

export enum AppIcon {
  moneyOverview = 'carbon:wallet',
  moneyBudget = 'carbon:diagram',
  moneyTransactions = 'carbon:change-catalog',
  settings = 'carbon:settings',
  notifications = 'carbon:notification-filled',
  userAvatar = 'carbon:user-avatar-filled',
  close = 'carbon:close'
}
