export const lightColors = {
  // Brand Colors
  primary: '#1e3a8a',
  primaryDark: '#1e40af',
  accent: '#dc2626',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Status Colors
  statusInTransit: '#22c55e',
  statusAssigned: '#22c55e',
  statusVerified: '#22c55e',
  
  // Neutral Colors
  background: '#ffffff',
  surface: '#ffffff',
  card: '#ffffff',
  
  // Text Colors
  textPrimary: '#0f172a',
  textSecondary: '#64748b',
  textTertiary: '#94a3b8',
  textInverse: '#ffffff',
  
  // Border Colors
  border: '#e2e8f0',
  borderLight: '#f1f5f9',
  
  // Gradient
  gradientStart: '#ffffff',
  gradientEnd: '#fce7f3',
  
  // Tab Bar
  tabActive: '#000000',
  tabInactive: '#94a3b8',
};

export const darkColors = {
  // Brand Colors
  primary: '#3b82f6',
  primaryDark: '#2563eb',
  accent: '#dc2626',
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  
  // Status Colors
  statusInTransit: '#22c55e',
  statusAssigned: '#22c55e',
  statusVerified: '#22c55e',
  
  // Neutral Colors
  background: '#0f172a',
  surface: '#1e293b',
  card: '#1e293b',
  
  // Text Colors
  textPrimary: '#f1f5f9',
  textSecondary: '#cbd5e1',
  textTertiary: '#94a3b8',
  textInverse: '#0f172a',
  
  // Border Colors
  border: '#334155',
  borderLight: '#475569',
  
  // Gradient
  gradientStart: '#0f172a',
  gradientEnd: '#1e293b',
  
  // Tab Bar
  tabActive: '#ffffff',
  tabInactive: '#64748b',
};

export let colors = lightColors;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  full: 9999,
};

export const fontSize = {
  xxs: 10,
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
};

export const fontWeight = {
  normal: '400' as const,
  medium: '500' as const,
  semibold: '600' as const,
  bold: '700' as const,
};

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
};

export const setTheme = (theme: 'light' | 'dark') => {
  colors = theme === 'dark' ? darkColors : lightColors;
};

export const getColors = () => colors;
