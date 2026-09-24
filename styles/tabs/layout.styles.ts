import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/Colors';

export const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E7EB',
    height: 72,
    paddingBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 24,
  },
  tabBarLabel: {
    fontFamily: 'Figtree-Medium',
    fontSize: 10,
    fontWeight: '500',
    marginTop: 4,
  },
  addButtonContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#FAF9F5',
  },
  tabContentWrapper: {
    flex: 1,
    width: '100%',
  },
});
