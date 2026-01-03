import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius, fontSize, fontWeight } from './theme';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientBackground: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    padding: spacing.lg,
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textPrimary: {
    color: colors.textPrimary,
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
  },
  textSecondary: {
    color: colors.textSecondary,
    fontSize: fontSize.sm,
    fontWeight: fontWeight.normal,
  },
  heading: {
    fontSize: fontSize.xl,
    fontWeight: fontWeight.bold,
    color: colors.textPrimary,
  },
  subheading: {
    fontSize: fontSize.lg,
    fontWeight: fontWeight.semibold,
    color: colors.textPrimary,
  },
});
