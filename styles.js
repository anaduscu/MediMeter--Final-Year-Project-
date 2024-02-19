/* Styling for entire App */
// styles.js
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //all pages
  container: { 
    flex: 1,
    backgroundColor: '#1A1F53',
    alignItems: 'left',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    marginLeft: 20,
  },
  logo: {
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 20,
    marginTop: 20,
    width: 95,
    height: 95,
  },

  instr: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    width: 350,
    marginBottom: 40,
  },

  buttoninfo: {
    backgroundColor: '#335AF8',
    width: 205,
    height: 90,
    fontSize: 18,
    padding: 20,
    marginTop: 15,
    marginBottom: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  nextstep: {
    flexDirection: 'row',
  },

  leftdown: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginLeft: -15,
  },

  rightdown: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginRight: 15,
  },

  continue: {
    width: 130,
    height: 40,
    alignSelf: 'flex-end', // Align the component to the right
    marginRight: 10, 
    marginTop: 15,
    marginRight: 35,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },
  continueText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  // landing page

  medimeter: {
    width: 220,
    height: 50,
    padding: 20,
    marginTop: 15,
    marginBottom: 30,
  },
  // Add more styles as needed
});

// info (green box)
// instr (white main text)
// buttoninfo (blue box)
// button 
export default styles;
