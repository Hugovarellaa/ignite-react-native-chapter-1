import { Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { homeStyles } from './styles'

export function Home() {
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.eventName}>Nome do Evento</Text>
      <Text style={homeStyles.eventDate}>Segunda, 28 de Novembro de 2022</Text>

      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <Button title="+" />
      </View>
    </View>
  )
}
