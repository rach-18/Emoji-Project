const resultDiv = document.querySelector(".results");

window.addEventListener("load", () => {
  createEmojiList(emojiList);
  attachListener();
})

function createEmojiList(inputList) {
  inputList.forEach((input) => {
    const parent = document.createElement("div");
    parent.classList.add("parent");

    const em = document.createElement("span");
    em.innerHTML = input.emoji;
    parent.append(em);

    const alias = document.createElement("span");
    const newAlias = input.aliases.map((alias) => alias.replaceAll("_", " "));
    alias.innerText = newAlias.join();
    parent.append(alias);

    const desc = document.createElement("span");
    desc.innerHTML = input.description;
    parent.append(desc);

    resultDiv.append(parent);
  });
}

function attachListener() {
  const input = document.querySelector("input");

  input.addEventListener("keyup", filterEmojis);
}

function filterEmojis(event) {
  const keyword = event.target.value;

  const filteredData = emojiList.filter((emoji) => {
    if (emoji.description.includes(keyword)) {
      return emoji;
    }
    else if (emoji.category.includes(keyword)) {
      return emoji;
    }
    else if (emoji.aliases.includes(keyword)) {
      return emoji;
    }
    else if (emoji.tags.includes(keyword)) {
      return emoji;
    }
  });

  resultDiv.innerText = "";
  createEmojiList(filteredData)
}