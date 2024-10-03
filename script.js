const messages = [
  "Love all, trust a few, do wrong to none",
  "Follow the Wind, you will never be lost",
  "We can only learn to love by loving",
  "Life is like a Sakura Fubuki fleeting yet beautiful ",
  "Life lived best is one that is loved",
];

const generateMessage = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  randomMessages = messages[randomIndex];
  console.log(randomMessages);
};

generateMessage();
