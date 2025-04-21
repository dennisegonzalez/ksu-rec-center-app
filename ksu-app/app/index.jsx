// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { router } from 'expo-router';

// export default function Index() {
//   return (
//     <View style={styles.container}>
//       <TouchableOpacity 
//         style={styles.button}
//         onPress={() => router.push('/event-details')}
//       >
//         <Text style={styles.buttonText}>View Event Details</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   button: {
//     backgroundColor: '#007AFF',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     borderRadius: 8,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// app/index.jsx
import { Redirect } from 'expo-router';

export default function Index() {
  return <Redirect href="(tabs)/" />;
}
