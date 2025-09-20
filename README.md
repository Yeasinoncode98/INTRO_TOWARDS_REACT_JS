# INTRO_TO_REACT_JS 🚀

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## Hi there! 👋

I’m Yeasin Arafat, a passionate web developer learning **React JS and building interactive UI experiences.  

💌 Contact: yeasinoncode98@gmail.com  
🌐 GitHub: [Yeasinoncode98](https://github.com/Yeasinoncode98)

---

## 🚀 About This Repo

This repo is all about learning React JS from scratch:

- Build interactive components  
- Learn Hooks like useState, useEffect, use()  
- Explore functional components and props  
- Practice modern React patterns

---

## 🛠 Technologies & Tools

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## 🌟 GitHub Stats

![Yeasin's GitHub stats](https://github-readme-stats.vercel.app/api?username=Yeasinoncode98&show_icons=true&theme=radical)

![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=Yeasinoncode98&layout=compact&theme=radical)

![WakaTime Stats](https://wakatime.com/share/@RedWine1207/d899477d-a33c-4b4e-b80a-7cf7ce6b185f.svg)

---

## 📦 Installation

bash
# Clone the repo
git clone https://github.com/Yeasinoncode98/INTRO_TO_REACT_JS.git
cd INTRO_TO_REACT_JS

# Install dependencies
npm install

# Start the app
npm run dev

Open your browser at http://localhost:5173 to see the app live.


🔥 Interactive Examples


Counter Component

import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>➕ Increase</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrease</button>
    </div>
  );
}

export default Counter;

📚 Learning Roadmap
<details> <summary>Click to expand 📖</summary>

React Basics: JSX, Components, Props

State Management: useState, useReducer

Side Effects: useEffect, API calls

Advanced Hooks: use(), custom hooks

Project Building: Small interactive apps

</details>
```

```
INTRO_TO_REACT_JS/
│
├── public/                  # Public assets (no processing by React)
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # Favicon
│   └── images/              # Static images, GIFs
│
├── src/                     # React source code
│   ├── assets/              # Images, icons, fonts
│   │   └── logo.png
│   │
│   ├── components/          # Reusable React components
│   │   ├── Counter.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   ├── pages/               # Full pages or views
│   │   ├── Home.jsx
│   │   └── About.jsx
│   │
│   ├── hooks/               # Custom hooks
│   │   └── useFetch.js
│   │
│   ├── context/             # React Context API files
│   │   └── ThemeContext.js
│   │
│   ├── App.jsx              # Root React component
│   ├── main.jsx             # ReactDOM render / app bootstrap
│   └── index.css            # Global styles
│
├── .gitignore               # Git ignore file
├── package.json             # NPM dependencies
├── vite.config.js           # Vite config
└── README.md                # Project README
```
