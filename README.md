# 📸 Instagram Clone – React (Stories View Only)

A simple **Instagram UI Clone** built using **React**, focused on the **Stories viewing feature**.  
This project recreates the Instagram-like layout and story scroll behavior using React components, Bootstrap Icons, custom CSS, and a JSON Server backend for mock data.

---

## 🚀 Features

- ✅ Instagram-style layout  
- ✅ Stories bar with horizontal scroll  
- ✅ Story cards with profile image & username  
- ✅ Story viewer on click  
- ✅ React component-based structure  
- ✅ Bootstrap Icons integration  
- ✅ Custom CSS styling  
- ✅ JSON Server for backend data  
- ✅ Basic responsive design  

---

## 🛠 Tech Stack

- React – Frontend framework  
- JavaScript (ES6)  
- CSS – Custom styling  
- Bootstrap Icons – UI icons  
- JSON Server – Fake REST API backend  

---

## 📂 Project Structure

```bash
instagram-clone/
│
├── public/
|     ├── db.json
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Stories.jsx
│   │   ├── StoryCard.jsx
│   │   └── StoryViewer.jsx
│   │
│   ├── pages/
│   │   └── Home.jsx
│   │
│   ├── styles/
│   │   └── styles.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
|
└── package.json
```


### 1️⃣ Clone the repository

git clone <https://github.com/Praveenkumar-in/instagram_clone>
cd instagram-clone


---

### 2️⃣ Install dependencies

npm install


---

### 3️⃣ Install Bootstrap Icons

npm install bootstrap-icons

Import in main.jsx or index.js:

import 'bootstrap-icons/font/bootstrap-icons.css';


---

### 4️⃣ Setup JSON Server

- Install globally:

- npm install -g json-server

- Run server:

json-server --watch db.json --port **8000

- API Endpoint:

http://localhost:5173/stories


---

### 5️⃣ Start React App

- npm run dev

or

- npm start


---

###  🗄 Sample db.json
```md
{
  "stories": [
    {
      "id": 1,
      "username": "john",
      "avatar": "https://i.pravatar.cc/100?img=1",
      "image": "https://picsum.photos/400/700?1"
    },
    {
      "id": 2,
      "username": "sara",
      "avatar": "https://i.pravatar.cc/100?img=2",
      "image": "https://picsum.photos/400/700?2"
    }
  ]
}
```
---
 ### 🎨 UI Notes

- Horizontal scroll stories row

- Circular avatars with story ring style

- Username label below avatar

- Click story opens viewer component

- Bootstrap icons used for navbar and actions



---

### 🔮 Future Improvements

- Add posts feed

- Add like & comment buttons

- Add authentication

- Add story progress bar

- Auto-play stories

- Mobile swipe gestures



---

##  👨‍💻 Author

Praveen Kumar
React Frontend Learner

This project was built as a practice project to learn React components, UI cloning, CSS layout, and JSON Server integration.


---
###
⭐ If you like this project, give it a star on GitHub!


## License
This project is licensed under the MIT License © 2026 Praveen Kumar

