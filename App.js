import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const App = () => {
  const [randomNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [userGuess, setUserGuess] = useState('');
  const [guessCount, setGuessCount] = useState(0);
  const [guessStatus, setGuessStatus] = useState('');

  const handleGuess = () => {
    if (userGuess == '') {
      return;
    }
    setGuessCount(guessCount + 1);
    if (userGuess < randomNumber) {
      setGuessStatus('Number is higher');
    } else if (userGuess > randomNumber) {
      setGuessStatus('Number is lower');
    } else {
      setGuessStatus(`You guessed the number in ${guessCount} attempts!`);
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Text>Guess the number between 1 and 100</Text>
      <TextInput
        placeholder="Enter your guess"
        keyboardType="number-pad"
        style={{ fontSize: 20, marginTop: 20, marginBottom: 20 }}
        onChangeText={(value) => setUserGuess(value)}
        value={userGuess}
      />
      <Button title="Guess" onPress={handleGuess} />
      <Text>{guessStatus}</Text>
    </View>
  );
};

export default App;
