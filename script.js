const name = "Teri Klosky";
const age = 31;
const birthday = "November 4";
const pineapplePizza = false;
const lifeEvents = [
  "I was born in Michigan.",
  "I just moved to St.Petersburg,Florida.",
  "I love to travel",
  "I am a certified open water scuba diver.",
];

if (pineapplePizza === true) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else if (pineapplePizza === false) {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !==5`);
  } else {
    counter++;
    console.log(
      `5===5.It took ${counter} iterations ro randomly generate the number 5`
    );
    break;
  }
}
