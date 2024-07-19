export const isPathActive = ({
  path,
  currentPath,
  exact = true
}: {
  path: string;
  currentPath: string;
  exact?: boolean;
}): boolean => (exact ? currentPath.endsWith(path) : currentPath.startsWith(path));
