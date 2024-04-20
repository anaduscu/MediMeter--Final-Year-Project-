import React, { useState } from 'react';
import { Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const AddMedication = () => {
  const [name, setName] = useState('');
  const [dosageInstructions, setDosageInstructions] = useState('');
  const [frequency, setFrequency] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [image, setImage] = useState(null);

  const getImageFromCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Sorry, we need camera permissions to make this work!');
      return;
    }

  };

  const pickImage = async () => {
    await getImageFromCamera();

    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const handleAddMedication = () => {
    pickImage();
    // Here you can send the data to the database
    // You can use fetch or any other method to make a POST request to your backend API
    // Include name, dosageInstructions, frequency, dietaryRestrictions, and image
  };

  return (
    <View>
      <Text>Add Medication</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Dosage Instructions"
        value={dosageInstructions}
        onChangeText={text => setDosageInstructions(text)}
      />
      <TextInput
        placeholder="Frequency"
        value={frequency}
        onChangeText={text => setFrequency(text)}
      />
      <TextInput
        placeholder="Dietary Restrictions"
        value={dietaryRestrictions}
        onChangeText={text => setDietaryRestrictions(text)}
      />
      <TouchableOpacity onPress={pickImage}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <Button title="Add Medication" onPress={handleAddMedication} />
    </View>
  );
};

export default AddMedication;
