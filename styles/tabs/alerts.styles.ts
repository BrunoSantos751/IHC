import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FBF8F1',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  headerTitle: {
    fontFamily: 'Figtree-ExtraBold',
    fontWeight: '800',
    fontSize: 28,
    color: '#1F2937',
  },
  markReadText: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 13,
    color: '#3D6DD7',
  },
  scrollContent: {
    paddingBottom: 40,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: '#4B5563',
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  notifCard: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    padding: 16,
    gap: 12,
    marginBottom: 12,
  },
  iconAccent: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notifBody: {
    flex: 1,
    gap: 6,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metaLabel: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  metaRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3D6DD7',
  },
  metaTime: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 11,
    color: '#9CA3AF',
  },
  notifTitle: {
    fontFamily: 'Figtree-Bold',
    fontWeight: '700',
    fontSize: 14,
    color: '#1F2937',
  },
  notifDesc: {
    fontFamily: 'Figtree-Regular',
    fontWeight: '400',
    fontSize: 13,
    color: '#4B5563',
    lineHeight: 18,
  },
  webContainer: {
    maxWidth: 960,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 32,
    paddingTop: 36,
    paddingBottom: 48,
  },
});
