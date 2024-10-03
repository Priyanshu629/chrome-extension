const titleContainer = document.getElementById("title-container");
const getTitleBtn = document.getElementById("get-title");

getTitleBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const activeTab = tabs[0];

    const title = `<p id="title">${activeTab.title}</p>`;
    titleContainer.innerHTML = title;
  });
  
});
