# Countdown Accuracy Guesser

A small React + TypeScript game where you try to stop a timer as close as possible to a target time.

The app is mainly a practice project for:

- `useRef` for mutable values that should not trigger re-renders
- React portals (`createPortal`) for rendering a modal outside the main tree
- TypeScript in React components

## How It Works

1. Choose one of the challenge cards (`1s`, `5s`, `10s`, `15s`).
2. Click **Start Timer**.
3. Click again when you think the target time has passed.
4. A result modal shows:
   - the target time
   - elapsed time between clicks
   - how early/late you were

## Stack

- React 19
- TypeScript 5
- Vite 4
- CSS (+ Tailwind setup present in the project)

## Getting Started

### Prerequisites

- Node.js 18+ (Node.js 20+ recommended)

### Install

```bash
npm install
```

### Run in development

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - create production build
- `npm run preview` - preview production build locally
- `npm run lint` - run ESLint
- `npm run format` - format files with Prettier

## Project Structure

```text
src/
  App.tsx
  main.tsx
  index.css
  components/
    Player.tsx
    TimerChallangeCard.tsx
    ResultPopup.tsx
```

## Notes

- The modal is rendered into `#modal` in `index.html` via a portal.
- `TimerChallangeCard.tsx` keeps timer click timestamps in a ref per card instance, so cards do not interfere with each other.
