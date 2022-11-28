import { StatusBar, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { homeStyles } from './styles'

export function Home() {
  function handleAddParticipant() {
    console.log('Adicionando a participant')
  }
  function handleRemoveParticipant() {
    console.log('Removendo a participant')
  }

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
        <Button title="+" type="ADD" onPress={handleAddParticipant} />
      </View>

      <Participant name="Hugo Varella" onRemove={handleRemoveParticipant} />
      <Participant name="Fulano" onRemove={handleRemoveParticipant} />
      <Participant name="Siglano" onRemove={handleRemoveParticipant} />
      <Participant name="Jhon Doe" onRemove={handleRemoveParticipant} />
    </View>
  )
}
