import { useState } from 'react'
import { Alert, FlatList, StatusBar, Text, TextInput, View } from 'react-native'
import { Button } from '../../components/Button'
import { Participant } from '../../components/Participant'
import { homeStyles } from './styles'

export function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [newParticipants, setNewParticipants] = useState('')

  function handleAddParticipant() {
    if (participants.includes(newParticipants)) {
      setNewParticipants('')
      return Alert.alert('Opa!', 'Esse participante ja está cadastrado!')
    }
    if (newParticipants === '') {
      setNewParticipants('')
      return Alert.alert('Opa!', 'Digite um nome valido!')
    }
    setParticipants((oldState) => [...oldState, newParticipants])
    setNewParticipants('')
  }

  function handleRemoveParticipant(name: string) {
    const newParticipants = [...participants]
    newParticipants.splice(newParticipants.indexOf(name), 1)

    return Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'OK',
        onPress: () => setParticipants(newParticipants),
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ])
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
          onChangeText={setNewParticipants}
          value={newParticipants}
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
            onRemove={() => handleRemoveParticipant(item)}
          />
        )}
      />
    </View>
  )
}
