const facts = [
  "I love drawing and creating digital art!",
  "My favorite sport is horse riding.",
  "I enjoy coding small games.",
  "I like to bake cakes on weekends."
];

const factParagraph = document.getElementById("fact");
const button = document.getElementById("changeButton");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factParagraph.textContent = facts[randomIndex];
});

#FFB6C1
