import { Text, View } from 'react-native';
import { Link } from 'expo-router';


export default function Index() {
  return (
    <View>
        <Text>This is my index pagepage 🐽</Text>
        <Link href="/burger">🍔 Burger page </Link>
        <Link href="/cheese">🧀 Cheese Page </Link>
    </View>
  );
}
