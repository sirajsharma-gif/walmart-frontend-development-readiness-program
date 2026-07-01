export function throttle<T extends (...args: any[]) => void>(
  func: T,
  wait: number,
) {
  let lastCallTime = 0;
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    const now = Date.now();
    const timeRemaining = wait - (now - lastCallTime);

    if (timeRemaining <= 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      lastCallTime = now;
      func(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        lastCallTime = Date.now();
        timeoutId = null;
        func(...args);
      }, timeRemaining);
    }
  };
}
