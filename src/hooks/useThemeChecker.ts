import { useEffect } from "react";

export const useThemeChecker = (darkTheme: string) => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add(darkTheme);
    } else {
      document.documentElement.classList.remove(darkTheme);
    }

    const colorSchemeChangedCallback = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.documentElement.classList.add(darkTheme);
      } else {
        document.documentElement.classList.remove(darkTheme);
      }
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", colorSchemeChangedCallback);

    return () =>
      // @ts-ignore
      window.removeEventListener("change", colorSchemeChangedCallback);
  }, []);

  return {};
};
