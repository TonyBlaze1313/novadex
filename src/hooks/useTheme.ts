import themeConfig from '../theme.config.json';

type LayoutConfig = {
  dashboardOrder: string[];
  dnaPersonality?: string;
  sidebarPosition: 'left' | 'right' | 'none';
  chartStyle: 'candle' | 'line' | 'bar' | 'area';
  tableStyle: 'compact' | 'comfortable' | 'spacious';
  mobileBreakpoint: number;
  maxContentWidth: number;
};

export function useTheme(): LayoutConfig {
  return themeConfig as LayoutConfig;
}
