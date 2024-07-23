document.addEventListener("DOMContentLoaded", function () {
  const inputText = document.getElementById("inputText");
  const findInput = document.getElementById("findInput");
  const replaceInput = document.getElementById("replaceInput");
  const replaceButton = document.getElementById("replaceButton");
  const countDisplay = document.getElementById("countDisplay");

  replaceButton.addEventListener("click", function () {
      const find = findInput.value;
      const replaceWith = replaceInput.value;
      let text = inputText.value;

      if (find && text) {
          const regex = new RegExp(find, "gi");
          const replacedText = text.replace(regex, replaceWith);
          const count = (text.match(regex) || []).length;

          inputText.value = replacedText;
          countDisplay.textContent = `Replaced ${count} occurrences.`;
      }
  });

  findInput.addEventListener("input", function () {
      const find = findInput.value;
      const text = inputText.value;

      if (find && text) {
          const regex = new RegExp(find, "gi");
          const count = (text.match(regex) || []).length;
          countDisplay.textContent = `${count} occurrences found.`;
      } else {
          countDisplay.textContent = "";
      }
  });
});
