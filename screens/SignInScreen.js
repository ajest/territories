import React, { useContext, useState, useEffect } from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import AuthContext from '../contexts/auth-context';

export default function SignInScreen({ navigation }) {
  const { signIn, getErrors } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  // ! Pasar errores a formulario

  return (
    <View style={styles.container}>
      <Text>Ingrese sus datos</Text>
      {/* {errors && <Text style={{ color: 'red' }}>{errors}</Text>} */}
      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(email) =>
          setCredentials({ ...credentials, email: email })
        }
        value={credentials.email}
      />
      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={(password) =>
          setCredentials({ ...credentials, password: password })
        }
        value={credentials.password}
      />
      <Button title="Login" onPress={() => signIn(credentials)} />
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
