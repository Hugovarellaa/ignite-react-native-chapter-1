import { FlatList, StatusBar, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { homeStyles } from './styles'

export function Home() {
  const participants = [
    'Hugo',
    'Rodrigo',
    'Diego',
    'Biro',
    'Fulano',
    'Mayk',
    'Jack',
    'João',
    'Maria',
    'Ana',
  ]

  function handleAddParticipant() {
    console.log('Adicionando a participant')
  }
  function handleRemoveParticipant() {
    console.log('Removendo a participant')
  }

  return (
    <View style={homeStyles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
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

      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={(item) => item}
        ListEmptyComponent={() => (
          <Text style={homeStyles.listEmpty}>
            Ninguém chegou no evento ainda? Adicione participantes da sua lista
          </Text>
        )}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={handleRemoveParticipant}
          />
        )}
      />
    </View>
  )
}
