nick_v3.1 – Web Game MVP

1. Overview

Project Goal

To create a glitchy, trippy, 80s-style memory archive experience at nickbianco.com, blending real-life memory fragments with surreal terminal UI elements. The goal is not to glorify or center Nick as the main character, but to creatively explore memory, mystery, and identity through minimalist, lo-fi interactivity.

⸻

2. Technology Stack

Frontend Only:
	•	HTML5
	•	CSS3 (custom font + CRT/glitch effects)
	•	Vanilla JavaScript

Multimedia:
	•	MP4/WebM video
	•	MP3 audio (boot sequence voice)

Deployment Options:
	•	Netlify (preferred)
	•	Vercel
	•	GitHub Pages

Requirements
	•	Modern browser (Chrome, Safari, Edge)
	•	Mobile compatible (not optimized, but functional)
	•	No backend required

⸻

3. Project File Structure

/nick_v3.1
│
├── index.html                 ← Loads boot screen & game
├── /css/
│   └── style.css              ← CRT / glitch styling
├── /js/
│   └── main.js                ← Scene control
├── /assets/
│   ├── /audio/
│   │   └── boot_sequence.mp3  ← Your uploaded voiceover
│   ├── /videos/
│   │   ├── xmas01.mp4         ← Real memory 1
│   │   └── camera16.mp4       ← Real memory 2
└── /fonts/
    └── PerfectDOSVGA.ttf      ← Retro font

File Explanations & API Docs
	•	index.html: Main entry point, plays boot sequence.
	•	style.css: Retro CRT styles, animation, and type effects.
	•	main.js: Types boot lines to terminal, transitions to scene1.
	•	scene1.html: First memory scene with embedded video.
	•	boot_sequence.mp3: Glitchy voiceover loaded at start.
	•	xmas01.mp4, camera16.mp4: User-uploaded memory videos.
	•	PerfectDOSVGA.ttf: 80s-style terminal font.

⸻

4. Detailed Requirements & Logic

Content

Boot Screen Logic
	•	Voiceover synced with text output (terminal effect)
	•	Boot sequence ends with >> [LOADING…]
	•	Delays 3 seconds, auto-redirects to scene1.html

Scene1.html
	•	Plays xmas01.mp4 full screen
	•	Optional unmute / pause
	•	Minimal controls, just the video

Optional Scene2.html (Future)
	•	camera16.mp4
	•	Additional overlays / choice prompts

⸻

Environment Variables

None needed for MVP. Future variables could include:

VIDEO_BASE_PATH=/assets/videos
AUDIO_BOOT_TRACK=/assets/audio/boot_sequence.mp3
FONT_PATH=/fonts/PerfectDOSVGA.ttf

These could be used in future JS refactors for scalable routing.

⸻

5. Future Expansion Ideas
	•	Add glitch overlays (WebGL / canvas)
	•	Add choice-based terminal UI
	•	Add memory node selector menu
	•	Add journal entries / text overlays
	•	Add looping audio ambience layers

⸻

6. Deployment Notes

To launch at nickbianco.com:
	1.	Connect repo or upload folder to Netlify
	2.	Set root folder to /
	3.	Connect custom domain to Netlify

Live in under 5 minutes.

⸻

This is the MVP doc for nick_v3.1. All assets, code, and logic above can be fully deployed with no server or build system required.