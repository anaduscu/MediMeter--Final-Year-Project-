import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const RadioButton = ({ options, selectedOption, onSelect }) => {
  return (
    <View>
      {options.map((option) => (  // Map through the options array and render a radio button for each option
        <TouchableOpacity
          key={option.value}
          style={styles.radioButton}
          onPress={() => onSelect(option.value)} // when pressed, call the onSelect function with the value of the option
        > 
        {/* // Create the circular shape of the radio button and fill it with color when selected */}
          <View style={[styles.radioCircle, { backgroundColor: selectedOption === option.value ? '#007AFF' : 'transparent' }]} /> 
          <Text style={styles.radioText}>{option.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

// Blue when selected, transparent when not selected
const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#007AFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioText: {
    fontSize: 20,
    fontWeight: 'bold', 
    color: 'white',
    width: 320,
  },
});

export default RadioButton;

// The custom radio button component in the provided code works by rendering a list of options, where each option is represented as a touchable component (`TouchableOpacity`). Each touchable component has an `onPress` handler that triggers the selection of the corresponding option.

// Here's how it works step by step:

// 1. The `RadioButton` component receives props:
//    - `options`: An array of objects representing the radio button options. Each object contains `label` (the text to display) and `value` (the value of the option).
//    - `selectedOption`: The value of the currently selected option.
//    - `onSelect`: A function to handle the selection of an option.

// 2. Inside the `RadioButton` component, it maps through the `options` array and renders a `TouchableOpacity` for each option.
//    - Each `TouchableOpacity` has an `onPress` handler that calls the `onSelect` function with the value of the corresponding option when pressed.

// 3. The `radioCircle` style is used to create the circular shape of the radio button. It uses `backgroundColor` to fill the circle with color when selected.
//    - If the `selectedOption` matches the `value` of the current option, the circle background color is set to a specified color (e.g., `#007AFF`). Otherwise, it remains transparent.

// 4. The `radioText` style is applied to the text of each option.

// 5. In the parent component (`MyComponent`), you initialize state to keep track of the `selectedOption`.
//    - When an option is selected, the `handleSelectOption` function updates the `selectedOption` state with the value of the selected option.

// 6. The `RadioButton` component is rendered with the provided `options`, `selectedOption`, and `onSelect` props.

// 7. The selected option value is displayed below the radio buttons using a `Text` component.

// In summary, the custom radio button component provides a user interface for selecting one option from a list of options. It handles the selection state and triggers a callback function (`onSelect`) when an option is selected.