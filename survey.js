const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  rl.question("What's an activity you like doing? ", (activity) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (meal) => {
        rl.question("What's your favourite thing to eat for that meal? ", (food) => {
          rl.question("Which sport is your absolute favourite? ", (sport) => {
            rl.question("What is your superpower? ", (superpower) => {
              rl.question("In a few words, tell us what you are amazing at! ", (amazing) => {
                console.log(`My name is ${name}. I like to ${activity} and listen to ${music} while doing it. My favourite meal is ${meal} and my favourite thing to eat for that meal is ${food}. My absolute favourite sport is ${sport}. My superpower is ${superpower}. I am amazing at ${amazing}.`);
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});