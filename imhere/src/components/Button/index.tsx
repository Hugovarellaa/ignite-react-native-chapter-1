import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { buttonStyles } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  title: string
  type: 'ADD' | 'DELETE'
}

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={type === 'ADD' ? buttonStyles.buttonAdd : buttonStyles.buttonDelete}
      {...rest}
    >
      <Text style={buttonStyles.textButton}>{title}</Text>
    </TouchableOpacity>
  )
}
