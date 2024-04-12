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
    marginBottom: 5,
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
    height: 85,
    fontSize: 18,
    padding: 20,
    marginTop: 25,
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
    marginTop: 45,
    marginLeft: -15,
  },

  rightdown: {
    width: 100,
    height: 100,
    marginTop: 35,
    marginRight: -15,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },

  continue: {
    width: 130,
    height: 40,
    alignSelf: 'flex-end', // Align the component to the right
    marginTop: 15,
    marginRight: 35,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },

  

  // landing page

  medimeter: {
    width: 220,
    height: 50,
    padding: 20,
    marginTop: 15,
    marginBottom: 30,
  },
  
  // decision page

  info: {
    backgroundColor: '#24C697',
    width: 350,
    height: 130,
    padding: 20,
    marginTop: 15,
    marginBottom: 30,
    color: '#1A1F53',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 20,
  },

  decision: {
    marginLeft: 85,
  },

  login: {
    width: 100,
    height: 40,
    alignSelf: 'flex-start', // Align the component to the right
    marginLeft: 65, 
    marginTop: 10,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },

  signup: {
    width: 100,
    height: 40,
    alignSelf: 'flex-end', // Align the component to the right
    marginRight: 65, 
    marginTop: -10,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },

  logininfo: {
    backgroundColor: '#335AF8',
    width: 200,
    height: 110,
    fontSize: 18,
    padding: 20,
    marginTop: 10,
    marginRight: 10,
    marginBottom: 15,
    color: 'white',
    fontWeight: 'bold',
  },

  signupinfo: {
    backgroundColor: '#335AF8',
    width: 200,
    height: 110,
    fontSize: 18,
    padding: 20,
    marginTop: 30,
    marginBottom: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  // welcome page

  instr: {
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
    width: 360,
    marginBottom: -10,
    marginTop: 10,
  },

  back: {
    backgroundColor: '#24C697',
    width: 232,
    height: 130,
    padding: 20,
    marginTop: 15,
    marginBottom: 30,
    color: '#1A1F53',
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 3,
  },

  footer : {
    backgroundColor: '#1A1F53',
    justifyContent: 'center',
    marginLeft: -20,
    flexDirection: 'row',
    marginBottom: -20,
    borderTopColor: 'white', // You can customize the color
    borderTopWidth: 2,
    borderTopLength: 2,
    marginVertical: 5,
  },

  arrow1 : {
    width: 80,
    height: 80,
    marginTop: 45,
  },

  arrow2 : {
    width: 80,
    height: 80,
    marginTop: 15,
    marginRight: 15,
  },

  backbutton: {
    width: 100,
    height: 40,
    marginTop: 100,
    marginLeft: -70,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },

  continuebutton: {
    width: 100,
    height: 40,
    marginLeft: 60,
    marginTop: -15,
    backgroundColor: '#FF443A',
    borderRadius: 10, // Set the border radius to make it rounded
    justifyContent: 'center',
    alignItems: 'center',
  },

  next: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: -1,
  },

  // signup page

  form : {
    marginLeft: 20,
    width: 350,
    marginBottom: -10,
    marginTop: -15,
  },

  input: {
    width: 300,
    height: 35,
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  inputTitle: {
    color: 'white',
    fontSize: 15,
    marginBottom: 10,
  },

  subheading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    width: 330,
    marginTop: 15,
  },

  keyboardinstr: {
    marginLeft: 0,
    padding: 10,
    paddingRight: 20,
    fontSize: 14,
    width: 329,
    height: 80,
  },

  signupbutton: {
    marginTop: 45,
    marginLeft: 15,
  },

  bluebox: {
    fontSize: 15,
    height: 75,
    width: 230,
    padding: 10,
  },

  // step2

  info2: {
    backgroundColor: '#24C697',
    width: 350,
    height: 110,
    padding: 10,
    marginTop: 25,
    marginBottom: 90,
    color: '#1A1F53',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 20,
  },

  nextstep2: {
    marginTop: -90,
  },

  buttoninfo2: {
    fontSize: 16,
    height: 85,
  },

  button2 : {
    marginLeft: 130,
    marginTop: -45,
  },

  loginInfo: {
    width: 350,
    height: 110,
    fontSize: 18,
  },
    
    // radioButtonContainer: {
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   backgroundColor: 'lightgray', // Background color when unchecked
    //   borderWidth: 1,
    //   borderRadius: 5,
    //   padding: 10,
    //   marginBottom: 10,
    // },
    // checked: {
    //   backgroundColor: 'white', // Background color when checked
    //   borderColor: 'green',
    // },
    // radioText: {
    //   marginLeft: 10,
    // },

    


    //Questions 

    radioInstructions: {
      color: 'white',
      fontSize: 18,
      height: 160,
      fontWeight: 'bold',
      width: 350,
      marginBottom: 20,
      marginLeft: 20,
      marginTop: 10,
      backgroundColor: '#335AF8',
      padding: 15,
    },
  
    radioText: {
      fontSize: 15,
      fontWeight: 'bold', 
      color: '#FFDE59',
      marginLeft: 20,
    },

    question1 : {
        backgroundColor: '#24C697',
        width: 338,
        height: 50,
        padding: 10,
        marginBottom: 10,
        color: '#1A1F53',
        fontWeight: 'bold',
        fontSize: 23,
        marginLeft: 20,
    },

    question2 : {
      backgroundColor: '#24C697',
      width: 338,
      height: 80,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      color: '#1A1F53',
      fontWeight: 'bold',
      fontSize: 23,
      marginLeft: 20,
  },

  pillbox: {
    width: 150,
    height:50,
    marginTop: -55,
    marginBottom: 10,
    marginLeft: 40,
  },

  bottom: {
    flexDirection: 'row',
    marginBottom: 70
  },

  example: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    width: 338,
    marginBottom: 90,
    marginLeft: 215,
    marginTop: -85,
  },

  question3 : {
    backgroundColor: '#24C697',
    width: 358,
    height: 105,
    padding: 10,
    marginBottom: 10,
    color: '#1A1F53',
    fontWeight: 'bold',
    fontSize: 23,
    marginLeft: 20,
  },

  phone : {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    width: 338,
    marginBottom: 10,
    marginLeft: 20,
  },

  trusted : {
    marginBottom: 70,
    marginLeft: 20,
    marginTop: -10,
  },


});





// info (green box)
// instr (white main text)
// buttoninfo (blue box)
// button 
export default styles;
