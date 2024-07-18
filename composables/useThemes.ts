import { type Theme, themes } from '@/lib/registry/themes';

interface Config {
  theme?: Theme['name'];
  radius: number;
  name: string;
}

export function useThemes() {
  const { value: color } = useColorMode();
  const isDark = color === 'dark';

  const defaultTheme = useConfig().value.theme;
  const config = useCookie<Config>('theme', {
    default: () => ({
      theme: defaultTheme.color as Color,
      radius: defaultTheme.radius,
      name: defaultTheme.name,
    }),
  });

  const theme = computed(() => config.value.theme);
  const radius = computed(() => config.value.radius);
  const name = computed(() => config.value.name);

  const themeClass = computed(() => `theme-${theme.value}`);

  function setTheme(themeName: Theme['name']) {
    config.value.theme = themeName;
  }

  function setRadius(newRadius: number) {
    config.value.radius = newRadius;
  }

  function setName(newName: string) {
    config.value.name = newName;
  }

  const themePrimary = computed(() => {
    const t = themes.find(t => t.name === theme.value);
    return `hsl(${t?.cssVars[isDark ? 'dark' : 'light'].primary})`;
  });

  return {
    themeClass,
    theme,
    setTheme,
    radius,
    setRadius,
    themePrimary,
    name,
    setName,
  };
}
