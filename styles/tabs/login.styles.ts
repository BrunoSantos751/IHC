import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 40,
    paddingBottom: 24,
  },
  headerContainer: {
    alignItems: 'center',
    gap: 24,
    marginBottom: 40,
  },
  iconContainer: {
    width: 72,
    height: 72,
    backgroundColor: Colors.primary,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#0D9488',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 4,
  },
  titleContainer: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 28,
    color: Colors.textDark,
    textAlign: 'center',
    lineHeight: 32,
  },
  subtitle: {
    fontFamily: 'Figtree-Medium',
    fontWeight: '500',
    fontSize: 15,
    color: Colors.textMuted,
    textAlign: 'center',
    lineHeight: 22,
  },
  formContainer: {
    flex: 1,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginTop: -8,
  },
  forgotPasswordText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: Colors.primary,
  },
  actionContainer: {
    gap: 16,
    marginTop: 32,
  },
  loginButton: {
    marginBottom: 0,
  },
  webRoot: {
    flex: 1,
    flexDirection: 'row',
  },
  webBrandingSide: {
    flex: 1,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
  webBrandingContent: {
    maxWidth: 480,
    alignItems: 'center',
  },
  webIconContainer: {
    width: 96,
    height: 96,
    backgroundColor: Colors.white,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  webBrandingTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontSize: 48,
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 16,
  },
  webBrandingSubtitle: {
    fontFamily: 'Figtree-Medium',
    fontSize: 20,
    color: '#E6F4F1',
    textAlign: 'center',
    lineHeight: 32,
  },
  webFormSide: {
    flex: 1,
    backgroundColor: '#FAF9F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 60,
  },
  webFormWrapper: {
    width: '100%',
    maxWidth: 420,
  },
  webHeaderContainer: {
    alignItems: 'flex-start',
    marginBottom: 40,
    gap: 8,
  },
  webTitle: {
    fontSize: 32,
    textAlign: 'left',
  },
  webSubtitle: {
    fontSize: 16,
    textAlign: 'left',
  },
});
