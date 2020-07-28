import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function SignInScreen({ navigation }) {
  function handleLogin() {
    console.log('Log');
  }

  return (
    <View style={styles.container}>
      <Text>Ingrese sus datos</Text>
      {/* {state.errorMessage &&
            <Text style={{ color: 'red' }}>
              {state.errorMessage}
            </Text>} */}
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        // onChangeText={(email) => setState({ email })}
        // value={state.email}
        value={''}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        // onChangeText={(password) => setState({ password })}
        // value={state.password}
        value={''}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8,
    padding: 5,
  },
});
