import { Text, View } from 'react-native'
import { Button } from '../Button'
import { participantStyles } from './styles'

export function Participant() {
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>Hugo Varella</Text>
      <Button title="-" type="DELETE" />
    </View>
  )
}
