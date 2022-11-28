import { Text, View } from 'react-native'
import { Button } from '../Button'
import { participantStyles } from './styles'

interface ParticipantProps {
  name: string
  onRemove: () => void
}

export function Participant({ name, onRemove }: ParticipantProps) {
  return (
    <View style={participantStyles.container}>
      <Text style={participantStyles.name}>{name}</Text>
      <Button title="-" type="DELETE" onPress={onRemove} />
    </View>
  )
}
