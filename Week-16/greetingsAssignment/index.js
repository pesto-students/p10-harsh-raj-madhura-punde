const fs = require('fs');
const readline = require('readline');
const generateGreeting = require('./greetings');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user for their name
rl.question('What is your name? ', (name) => {
  // Generate a personalized greeting
  const greeting = generateGreeting(name);

  // Save the generated greeting to output.txt
  fs.writeFile('output.txt', greeting, (err) => {
    if (err) {
      console.error('Error writing to output.txt:', err);
    } else {
      console.log('Greeting saved to output.txt.');
    }

    // Close the readline interface
    rl.close();
  });
});










// create a basic command-line application that reads a user's name from the console, generates a personalized greeting using a custom module, and saves it to a text file using the fs module.

// Hints/Steps(refer oly if needed):

// Set up the project folder with three files: greetings.js, app.js, and an empty text file named output.txt.
// Implement the greetings.js custom module that exports a function to generate a personalized greeting based on the user's name.
// Create the app.js file and import the necessary modules (fs and the custom greetings module).
// Use readline to prompt the user for their name in the app.js file.
// Generate a personalized greeting using the generateGreeting function from the greetings module.
// Save the generated greeting to the output.txt file using the fs.writeFile function in the app.js file.
// Handle any errors that may occur during the file writing process and display an error message if necessary.
// Test the application by running node app.js in the terminal, entering your name, and verifying that the greeting is correctly saved in the output.txt file.