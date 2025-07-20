# 🧩 Tab Title Viewer - Chrome Extension

This is a simple Chrome Extension that retrieves and displays the title of the currently active tab when you click a button in the popup.

## 📸 Demo

![Demo](demo.gif) <!-- Optional: Add a screen recording or image here -->
<img width="1919" height="1032" alt="image" src="https://github.com/user-attachments/assets/02d47bf3-e0ef-4d3b-9572-3b5ce5fca56f" />
<img width="678" height="466" alt="image" src="https://github.com/user-attachments/assets/ad0a0dc3-d301-4ce5-b680-782bfc38f7d9" />
<img width="639" height="384" alt="image" src="https://github.com/user-attachments/assets/37f8795c-36b6-40ff-87e4-461c9e273927" />


## 🚀 Features

- One-click button to fetch the current tab’s title.
- Lightweight and responsive popup UI.
- Built using HTML, CSS, and JavaScript.
- Uses Chrome's `tabs` API.

## 🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/tab-title-extension.git
   cd tab-title-extension
   
2. Open Chrome and navigate to `chrome://extensions/`.

3. Enable **Developer Mode** (top right).

4. Click **Load unpacked** and select the project folder.

5. Click on the extension icon in your Chrome toolbar to open the popup and test it.

## 📂 Project Structure

```
tab-title-extension/
├── manifest.json         # Extension manifest configuration
├── popup.html            # Popup interface
├── popup.js              # Logic to fetch tab title
├── icon.png              # Extension icon
└── README.md             # Project documentation
```

## 📄 manifest.json

The extension uses `manifest_version: 3` and requests the `tabs` permission to read the current tab’s metadata.

## 🎨 UI Preview

The popup includes:

* A stylish button
* A display area showing the current tab’s title
* Responsive design with clean visuals

## 🧑‍💻 Author

**Your Name**
LinkedIn: https://www.linkedin.com/in/debkumar-mallick-542119249/
GitHub: https://github.com/Debkumar1234

## 📃 License

This project is licensed under the [MIT License](LICENSE).
