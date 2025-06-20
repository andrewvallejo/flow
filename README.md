<p align="center">
  <img src="public/flow.svg" width="100" alt="Flow logo" />
</p>

<h1 align="center">Flow</h1>
<p align="center"><em>Designed for flow — sleek, modern navigation for smooth form building.</em></p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" />
</p>

<p align="center">
  <sub>Live preview</sub>
  <br />
  <a href="https://flow-av.vercel.app" target="_blank"><code>flow-av.vercel.app</code></a>
</p>

---

## Features

- **Add Pages**

    - Use the “Add Page” button to append a new page to the end
    - Insert a new page between existing ones using the dynamic "+" buttons

- **Drag-and-Drop Reordering**

    - Rearrange pages smoothly with intuitive drag-and-drop interaction

- **Active Page Highlighting**

    - The current page is visually emphasized for clear navigation context

- **Context Menu (UI Only)**

    - Each page includes a menu with options to **Rename**, **Duplicate**, **Copy**, or **Delete**
    - These actions are currently UI-only (no data persistence)

- **Keyboard Navigation**
    - Navigate the taskbar using **Tab** and **Enter** for accessibility and speed

---

## Getting Started

Install dependencies and start the development server:

```bash
# With pnpm (preferred)

pnpm install
pnpm dev
```

<details>
  <summary><strong>Or use yarn or npm</strong></summary>

  <br>

  <pre>
  <code>
  # With yarn
  yarn install
  yarn dev

  # With npm
  npm install
  npm run dev
  </code>
  </pre>

</details>

---

## Project Info

Flow was created as part of a take-home assessment.
It demonstrates interactive UI patterns without backend integration or persistent data.
<sup>All functionality is handled client-side using in-memory state only, meaning changes are lost on page refresh.</sup>
