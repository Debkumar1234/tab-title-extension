document.getElementById('getTitle').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    const tab = tabs[0];
    document.getElementById('title').textContent = tab.title;
  });
});
