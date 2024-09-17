import { Text, View} from 'react-native';
import { Link } from 'expo-router'

export default function Burger() {
  return (
    <View>
        <Text>🍔 This is my Burger page</Text>
        <Link href="/cheese">🧀 Cheese Page </Link>
    </View>
  );
}
