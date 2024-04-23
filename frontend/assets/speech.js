import RNFS from 'react-native-fs';

// Example usage:
const readFileContents = async (filePath) => {
  try {
    const contents = await RNFS.readFile(filePath, 'utf8');
    console.log('File contents:', contents);
  } catch (error) {
    console.error('Error reading file:', error);
  }
};

// Call the function with the file path
readFileContents('path_to_your_file.txt');
