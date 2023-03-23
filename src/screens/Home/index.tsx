import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";
import {
  Alert,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./styles";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState("");
  function handleAddParticipant() {
    if (participants.includes(participantsName)) {
      return Alert.alert("Participant already added");
    }

    setParticipants((oldState) => [...oldState, participantsName]);
    setParticipantsName("");
  }

  function handleRemoveParticipant(name: string) {
    const removedParticipants = participants.filter(
      (participant) => participant !== name
    );

    return Alert.alert("Remover", `Deseja remover o participante ${name} ?`, [
      {
        text: "sim",
        onPress: () => {
          setParticipants(removedParticipants);
          Alert.alert(`Participante deletado com sucesso! ${name}`);
        },
      },
      {
        text: "Cancelar",
        style: "cancel",
      },
    ]);
  }

  const dateFormatted = format(new Date(), "EEEE dd 'de' MMMM 'de' yyy", {
    locale: ptBR,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>

      <Text style={styles.eventDate}>{dateFormatted}</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={(text) => setParticipantsName(text)}
          value={participantsName}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddParticipant}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((item) => (
          <Participant
            key={item}
            name={item}
            onRemoveParticipant={() => handleRemoveParticipant(item)}
          />
        ))}
      </ScrollView> */}

      <FlatList
        data={participants}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            onRemoveParticipant={() => handleRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          // Quando nao tem nada Cadastrado no data={}
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista
            de evento
          </Text>
        )}
      />
    </View>
  );
}
