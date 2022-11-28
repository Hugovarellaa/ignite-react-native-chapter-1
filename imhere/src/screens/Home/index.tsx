import { StatusBar, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { homeStyles } from './styles'

export function Home() {
  return (
    <View style={homeStyles.container}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Text style={homeStyles.eventName}>Nome do Evento</Text>
      <Text style={homeStyles.eventDate}>Segunda, 28 de Novembro de 2022</Text>

      <View style={homeStyles.form}>
        <TextInput
          style={homeStyles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
        />
        <Button title="+" type="ADD" />
      </View>

      <Participant />
      <Participant />
      <Participant />
      <Participant />
    </View>
  )
}
