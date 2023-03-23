import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Props {
  name: string;
  onRemoveParticipant: () => void;
}

export function Participant({ name, onRemoveParticipant }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemoveParticipant}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
