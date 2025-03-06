<p align="center">
    <a href="https://github.com/LucaCDRocha/magic-escape-vr">
        <img src="./public/assets/favicon.png" alt="Magic escape Logo" align="center" width="200" height="200" />
    </a>
    x
    <a href="https://github.com/Chabloz/a-frame-vite-vue-boilerplate">
        <img src="./logo.svg" alt="VAV Logo" align="center" width="200" height="200" />
    </a>
</p>
<h1 align="center">Magic escape VR</h1>

<p align="center">
    <img src="https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js" />
    <img src="https://img.shields.io/badge/A%E2%80%93Frame-1.7-brightgreen?style=for-the-badge&labelColor=%23ef2d5e&color=%23ef2d5e" alt="A-Frame" />
    <img src="https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Threejs" />
    <img src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
</p>

<p align="center">
    <a href="https://magic-escape.luca-cdrocha.ch/">>> DEMO <<</a>
</p>

---

This is a VR escape room game made with A-Frame. The game is a simple escape room where you have to explore the rooms and change the colors of the lights to find clues and solve the puzzles to escape.

## Interaction support

- **Desktop** – Aim with the cursor and click left to interact with objects. For changing room color use right click and move the wand in the direction of a color
- **VR/AR** – Use the tip of the wand to interact with objects. For changing room color press any button of the right controller and touch a color with the tip of the wand

## Movement modes support

- **Desktop** – Keyboard for move (_WASD_ or Arrows keys) + Mouse for look control (Drag and drop)
- **Mobile** – 1x Finger touch to go forward + 2x Fingers touch to go backward + Gaze cursor for click
- **VR/AR** – walk + Teleport (Grip for grab and laser for click) + Gaze cursor for click in AR

---

## Quickstart

### Create a folder for your project and move to it

### Clone (or fork, or download)

```sh
git clone https://github.com/LucaCDRocha/magic-escape-vr.git .
```

### Install dependencies

```sh
npm ci
```

### Dev

```sh
npm run dev
```

### Build

```sh
npm run build
```

## Notes for local dev on VR headset

1. Check that your development device and your VR headset are connected on **the same network**.

2. Expose you local development:

```sh
npm run dev-expose
```

3. In your VR headset, browse to the local development adress `[ip]:[port]`.

> [!NOTE]
> The certificate is self-signed, so you will probably have to confirm access to the resource in your browser.
