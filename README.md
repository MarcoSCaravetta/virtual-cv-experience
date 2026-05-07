# Virtual-CV-Experience
An interactive 1st-person museum walkthrough built with Babylon.js

## Tech Stack
- **Engine:** Babylon.js
- **Physics:** Havok
- **Language:** Typescript
- **Bundler:** Vite
- **3D:** Blender
- **CI/CD:** GitHub Actions
- **Hosting:** GitHub Pages

## Architecture
Finite state machine + state stack for submenus

### States
- **Push:** Opening submenus
- **Pop:** Hitting back/close removes submenu states
- **States:** 
	- `START_MENU`: Intial landing view
	- `CREDITS`, `SETTINGS`, etc.
	- `IN_GAME_MAIN`
	- `IN_GAME_PAUSE`
	- `MINIGAME_START_MENU`, `MINIGAME_MAIN`, `MINIGAME_PAUSE`, etc.

# Licensing

## Source Code
The source code in this repository is licensed under the GNU General Public License v3.0 (GPL-3.0).

## Media & Assets
All 3D models, textures, images, and personal data (resume text, headshots) are licensed under Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0).
