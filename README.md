# Pollution Sensor Project — MQ135 + Arduino

This repository contains a demo website documenting an MQ135 air-quality sensor project using an Arduino Uno and a 16x2 LCD.

Files added:
- `index.html` — main website (responsive, animated)
- `css/styles.css` — site styles
- `js/main.js` — small frontend helpers (AOS init, nav toggle, copy code)
- `assets/` — placeholder images (add your photos here)

Preview locally
1. Open `index.html` in a browser directly, or run a small local server from the project root:

PowerShell (Windows):
```powershell
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Customize
- Replace `assets/person-placeholder.png` with your team photos.
- Update the team names and bios inside `index.html`.
- Copy the Arduino sketch from the code block on the page into the Arduino IDE to upload to your board.

Publish
- You can host this site using GitHub Pages: push the repo to GitHub and enable Pages from the `main` branch (use the repository root).

What I need from you to finish polishing
- Team member names and short bios
- Photos for team members and a project logo (optional)
- Preferred color accent (hex) or a sample site to match
- Any project photos (wiring, breadboard, final build) to display in the wiring section

Next steps I can do for you
- Add image gallery and lightbox for project photos
- Add downloadable PDF build guide
- Add a section with step-by-step assembly photos
- (Advanced) Add a simple backend and WebSocket or REST endpoint to show live sensor telemetry on the site
