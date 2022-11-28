import { StyleSheet } from 'react-native'

interface Props {
  type: 'ADD' | 'DELETE'
}

export const buttonStyles = StyleSheet.create({
  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#E23C44',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 24,
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
