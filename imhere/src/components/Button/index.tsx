import { Text, TouchableOpacity } from 'react-native'
import { buttonStyles } from './styles'

interface ButtonProps {
  title: string
}

export function Button({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={buttonStyles.button}>
      <Text style={buttonStyles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}
