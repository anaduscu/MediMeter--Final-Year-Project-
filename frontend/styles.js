/* Styling for entire App */

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

  footer1 : {
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


  // Dashboard

  dash :{
    flexDirection: 'row',
    marginTop: 30,
  },

  date : {
    color: '#1A1F53',
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    padding: 10,
    marginLeft: 20,
    marginRight: 100,
    marginTop: 35,
    marginBottom: 20,
    backgroundColor: '#24C697',
  },
  

  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 100, // Adjust this value based on the height of your footer
  },

  footer: {
    position: 'absolute',
    marginTop: 20,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#24c697',
    height: 180, // Adjust the height of the footer as needed
    alignItems: 'center',
  },

  footerButton: {
    width: 65,
    height: 55,
    marginLeft: 60,
    marginTop: 20,
    backgroundColor: '#FF443A',
    borderRadius: 10,
    alignContent: 'center',
  },

  footerButtons: {
    marginLeft: -80,
    marginTop: -10,
    flexDirection: 'row',
  },

  footerImage: {
    width: 50,
    marginLeft: 5,
    height: 50,
  },

  footerLabels: {
    marginLeft: 10,
    alignContent: 'center',
    flexDirection: 'row',
  },

  footerText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight: 5,
    width: 110,
    marginTop:15,
  },

  footerInstr: {
    color: 'white',
    backgroundColor: '#335AF8',
    padding: 8,
    fontSize: 20,
    fontWeight: 'bold',
    width: 280,
    marginTop: 10,
    marginLeft: -60,
  },

  dosageInstructions: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: 350,
    marginBottom: 20,
    marginLeft: 20,
    marginTop: 10,
    backgroundColor: '#335AF8',
    padding: 15,
  },

  // Schedule 

  sched: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginBottom: 5,
  },

  medicationItem: {
    backgroundColor: '#FFDE59',
    width: 350,
    height: 30,
    marginTop: 15,
    marginBottom: 5,
    marginLeft: 20,
    color: 'white',
    fontWeight: 'bold',
    flexDirection: 'row',
  },

  medicationName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1A1F53',
    alignContent: 'center',
    marginLeft: 10,
    marginTop: 5,
  },

  dosageInstructions: {
    fontSize: 15,
    color: '#1A1F53',
    fontWeight: 'bold',
    alignContent: 'center',
    marginLeft: 5,
    marginTop: 5,
  },

  timeofday: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    marginLeft: 20,
    flexDirection: 'row',
    backgroundColor: '#335AF8',
    padding: 3,
  },

  
  todimg: {
    flexDirection: 'row',
  },

  sun: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 5,
  },

  suncloud: {
    width: 35,
    height: 30,
    marginTop: 10,
    marginLeft: 5,
  },

  moon: {
    width: 25,
    height: 25,
    marginTop: 15,
    marginLeft: 5,
  },

  checkbox: {
    width: 32,
    height: 32,
    borderRadius: 5,
    borderWidth: 4,
    borderColor: '#24C697',
    marginLeft: -1,
    marginTop: -1,
    },


    //Add medication

    addmedication: {
      flexGrow: 1,
    },

    info3: {
      backgroundColor: '#24C697',
      width: 350,
      height: 90,
      padding: 10,
      marginTop: 25,
      marginBottom: 20,
      color: '#1A1F53',
      fontWeight: 'bold',
      fontSize: 18,
      marginLeft: 20,
    },

    info4: {
      backgroundColor: '#24C697',
      width: 230,
      height: 130,
      padding: 10,
      marginTop: 25,
      color: '#1A1F53',
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 20,
    },

    selectImage: {
      width: 100,
      height: 70,
      color: '#1A1F53',
      marginTop: 60,
      marginLeft: 20,
      borderRadius: 2,
      borderWidth: 5,
      borderColor: '#24C697',
      textAlign: 'center',
      padding: 10,
      fontWeight: 'bold',
      backgroundColor: '#FFDE59',
    },

    input2 : {
      marginLeft: 20,
    },

    upload: {
      flexDirection: 'row',
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 20,
    },

    add: {
      width: 120,
      height: 60,
      marginLeft: 10,
      marginTop: 35,
      padding: 10,
      backgroundColor: '#FF443A',
      borderRadius: 10, // Set the border radius to make it rounded
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    tabletcount: {
      width: 150,
      height: 130,
      marginLeft: 20,
      marginBottom: 10,
    },

    note: {
      color: '#FFDE59',
      fontSize: 15,
      fontWeight: 'bold',
      width: 130,
      marginLeft: 20,
    },

    tabletnumber : {
      width: 60,
      height: 40,
      marginLeft: 20,
      marginTop: -45,
    },

    currentstock: {
      width: 60,
      height: 40,
      marginLeft: 20,
      marginBottom: 10,
    },

    currenttablets: {
        color: '#FFDE59',
        fontSize: 15,
        fontWeight: 'bold',
        width: 340,
        marginLeft: 20,
        marginBottom: 10,
      },

      med : {
        flexDirection: 'row',
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20,
      },
  
      table: {
        flex: 1,
        paddingBottom: 100,
      },

    tableRow: {
      color: '#1A1F53',
      fontSize: 15,
      fontWeight: 'bold',
      width: 200,
      borderColor: 'white',
      borderWidth: 2,
    },
    
    celltitle: {
      backgroundColor: '#24C697',
      color: '#1A1F53',
      fontSize: 15,
      fontWeight: 'bold',
      width: 206,
      height: 30,
      padding: 5,
      borderTopColor: 'white',
      borderTopWidth: 2,
      borderRightColor: 'white',
      borderRightWidth: 2,
    },

    tableCell: {
      color: 'white',
      fontSize: 15,
      fontWeight: 'bold',
      width: 300,
      height: 30,
      padding: 5,
    },  

    deletemed : {
      width: 35,
      padding: 15,
      height: 35,
      marginLeft: 155,
      marginTop: -110,
      marginBottom: 10,
      backgroundColor: '#FF443A',
      borderRadius: 10, // Set the border radius to make it rounded
      justifyContent: 'center',
      alignItems: 'center',
    },

    addmed : {
      width: 45,
      padding: 15,
      height: 40,
      marginLeft: 50,
      marginTop: 40,
      backgroundColor: '#FF443A',
      borderRadius: 10, // Set the border radius to make it rounded
      justifyContent: 'center',
      alignItems: 'center',
    },

    increaseStock: {
      width: 35,
      padding: 15,
      height: 35,
      marginLeft: 155,
      marginTop: 0,
      backgroundColor: '#FF443A',
      borderRadius: 10, // Set the border radius to make it rounded
      justifyContent: 'center',
      alignItems: 'center',
    },

    emptyInventory: {
      backgroundColor: '#FFDE59',
      width: 330,
      height: 200,
      padding: 10,
      marginTop: 15,
      marginBottom: 250,
      marginLeft: 20,
      color: '#1A1F53',
      fontSize: 24,
      fontWeight: 'bold',
    },

    //Personal Info
    personalInfoItem: {
      backgroundColor: '#FFDE59',
      width: 350,
      marginLeft: 20,
      height: 250,
      marginBottom: 50,      
    },

    personalInfoText: {
      color: '#1A1F53',
      fontSize: 18,
      fontWeight: 'bold',
      width: 340,
      height: 30,
      padding: 5,
    },

    backtodash : {
      width: 100,
      height: 40,
      marginTop: -50,

    },

    listItem  : {
      marginLeft: 20,
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      marginTop: 10,
      marginBottom: 10,
    },

});





// info (green box)
// instr (white main text)
// buttoninfo (blue box)
// button 
export default styles;
