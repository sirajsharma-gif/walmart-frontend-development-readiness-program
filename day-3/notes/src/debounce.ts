export function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
) {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    timeoutId && clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };
}
