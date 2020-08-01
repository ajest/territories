import React, { useContext, createContext } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AuthContext from '../contexts/auth-context';

export default function SignInScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);

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
      <Button title="Login" onPress={() => signIn()} />
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
