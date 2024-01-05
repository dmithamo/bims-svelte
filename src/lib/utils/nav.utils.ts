export const pathIsActive = ({
  path,
  currentPath
}: {
  path: string;
  currentPath: string;
}): boolean => currentPath.endsWith(path);
