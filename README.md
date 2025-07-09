// README.md
# 🧮 AI Spreadsheet Prototype - Intern Assignment

> Pixel-perfect React + TypeScript implementation of a spreadsheet-like interface based on the provided Figma design.

### 🚀 Live Demo
🔗 [View Deployed App](https://your-deployment-link.com)

### 📁 GitHub Repository
🔗 [Visit Repo](https://github.com/your-username/your-repo-name)

---

## 📌 Project Overview

This assignment is a **frontend-only spreadsheet prototype** built using **React 18**, **TypeScript**, and **Tailwind CSS**, closely replicating the design provided in [Figma](https://www.figma.com/design/3nywpu5sz45RrCmwe68QZP/Intern-Design-Assigment?node-id=2-2535&t=DJGGMt8I4fiZjoIB-1).

It aims to simulate a **Google Sheets / Excel** experience with interactions, visual states, and responsive layout.

---

## ✨ Features

- ⚡ Pixel-perfect UI based on Figma
- 📊 Spreadsheet-style table using `react-table` (or custom minimal grid)
- 🧭 Functional Tabs, Filters, Buttons (logging actions)
- 🎨 Tailwind CSS utility-first styling
- 🔍 Console logs for UI actions
- 💻 ESLint & Prettier integrated
- 🧪 TypeScript Strict Mode & Type Checks

---

## 💡 Optional Enhancements (Stretch Goals)

- ⌨️ Keyboard navigation (arrow keys)
- ↔️ Column resize & hide toggles

---

## 🛠 Tech Stack

| Tech               | Description                         |
|--------------------|-------------------------------------|
| React 18           | Core UI Library                     |
| TypeScript         | Static Typing (Strict Mode Enabled) |
| Tailwind CSS       | Utility-first Styling               |
| react-table        | Powerful Table Component            |
| ESLint + Prettier  | Code Linting and Formatting         |
| Vite / CRA         | Lightning-fast Frontend Tooling     |

---

## 🧪 Getting Started

### 🔧 Installation

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### 🚴‍♂️ Run Locally

```bash
npm run dev
```

### 🧹 Lint & Type Check

```bash
npm run lint      # Check linting
npm run type-check # Run TypeScript checks
```

---

## 🔄 Folder Structure

```bash
├── public/
├── src/
│   ├── components/     # Reusable UI Components
│   ├── data/           # Sample data / mock API
│   ├── hooks/          # Custom React hooks (if needed)
│   ├── utils/          # Helpers and utilities
│   ├── App.tsx
│   └── main.tsx
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 📦 Trade-offs & Decisions

- **No State Management Library**: Local state via `useState` and `useReducer` was sufficient.
- **Table Implementation**: Used `react-table` for flexibility and performance unless otherwise mentioned.
- **Pixel-Perfect**: Minor browser-specific pixel shifts may exist, but layout follows Figma as closely as possible.
- **Stretch Goals**: Implemented only if time allowed without compromising code quality.

---

## 📸 Screenshots

| 📋 Spreadsheet View | ⚙️ Tab/Filter UI |
|---------------------|------------------|
| ![Spreadsheet](./screenshots/spreadsheet.png) | ![Tabs](./screenshots/tabs.png) |

---

## 🧠 Learnings

- Hands-on with `react-table`'s flexible API.
- Improved pixel-perfect design practices with Tailwind.
- Strengthened understanding of managing component state in TypeScript.
- Linting, formatting, and build tooling with Vite.

---

## 🧑‍💻 Author

**Vaishnavi Kale**  
💼 Full Stack Developer | React & TypeScript Enthusiast  
🔗 [Portfolio](#) | [LinkedIn](#) | [GitHub](#)

---

## 📜 License

This project is open-source and free to use.
