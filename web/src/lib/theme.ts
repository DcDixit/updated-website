export const THEME_STORAGE_KEY = "northline-theme-v2";

export type ThemePreference = "light" | "dark";

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  return preference === "dark" ? "dark" : "light";
}

/** Inline script to prevent theme flash - light is always the default. */
export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);var d=t==="dark";document.documentElement.classList.toggle("dark",d);document.documentElement.style.colorScheme=d?"dark":"light";}catch(e){}})();`;
