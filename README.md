# ✨ Tic-Tac-Toe Game (Next.js)

A modern, fully interactive Tic-Tac-Toe game built with **Next.js** and **React**, featuring:

- 🌓 Dark/Light Mode Toggle  
- 🎉 Confetti Animation on Win  
- ✅ Highlighted Winning Line  
- 🔄 Game Reset Button  
- ⚡ Clean Responsive Design  

---

## 🖥️ Preview

![Tic-Tac-Toe Screenshot](./tic.png)

---

## 🚀 Features

- **React Hooks**: `useState`, `useEffect`
- **Confetti Animation**: Uses [`react-confetti`](https://www.npmjs.com/package/react-confetti)
- **Winning Line Highlight**: Visually highlights winning squares
- **Dark Mode**: Simple toggle using global class
- **Responsive UI**: Grid-based board layout

---

## 📁 Folder Structure

```
tic-tac-toe/
├── app/
│   └── page.js               # Main game logic
├── components/
│   ├── Board.js              # Board layout
│   └── Square.js             # Individual square component
├── styles/
│   └── globals.css           # Global styles
├── public/
│   └── screenshot.png        # (Optional) Screenshot for README
├── package.json
└── README.md
```

---

## 📦 Installation

1. **Clone the repo**:

```bash
git clone https://github.com/your-username/tic-tac-toe-next.git
cd tic-tac-toe-next
```

2. **Install dependencies**:

```bash
npm install
```

3. **Run the app locally**:

```bash
npm run dev
```

4. Open your browser at [http://localhost:3000](http://localhost:3000)

---

## 🧩 Dependencies

- [`next`](https://nextjs.org/)
- [`react`](https://react.dev/)
- [`react-confetti`](https://www.npmjs.com/package/react-confetti)
- [`@react-hook/window-size`](https://www.npmjs.com/package/@react-hook/window-size)

Install with:

```bash
npm install react-confetti @react-hook/window-size
```

---

## 🧠 How It Works

- The board is a 3x3 grid using an array of 9 values.
- Clicking a square updates it with `"X"` or `"O"` based on turn.
- After each move, the app checks for a win or draw.
- If there's a winner:
  - 🎉 Confetti is triggered.
  - ✅ Winning squares are highlighted.
- A "Play Again" button resets the board.

---

## 📸 Screenshots

> You can add a screenshot in the `/public` folder and reference it above if desired.

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change or add (e.g., AI opponent, score tracking, multiplayer).

---

## 📄 License

This project is open-source and free to use under the [MIT License](https://choosealicense.com/licenses/mit/).

---

## 👨‍💻 Author

Developed by **[Your Name]**  
📧 Contact: your.email@example.com  
🔗 GitHub: [@your-username](https://github.com/your-username)

---