# 💕 Valentine's Day App 💕

A fun and romantic React application for Valentine's Day! This app features a random generator for love messages, reasons, and date ideas, ending with a playful "Will you be my Valentine?" question where the No button tries to escape on hover.

## Features

- 🎲 **Random Generator**: Generate random love messages, reasons why you love them, and date ideas
- 💝 **Valentine Question**: A fun interactive question with a moving "No" button
- 🎨 **Beautiful Design**: Valentine-themed colors and smooth animations
- 📱 **Responsive**: Works on desktop and mobile devices

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd valentine-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## How to Use

1. **Generator Screen**: Click on any of the three buttons (Message, Reason, or Date Idea) to generate random content
2. **Ready Button**: Click "Ready for the question?" when you're done exploring
3. **Valentine Question**: Try to click "No" - it will move away when you hover over it! 😄
4. **Celebration**: Click "Yes" to see a celebration message!

## Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

You can customize the messages, reasons, and date ideas by editing `src/data/content.js`. Add your own personal touches to make it even more special!

### Adding Audio Files

The app supports background music and celebration sounds:

1. **Background Music**: Add "Perfect" by Ed Sheeran (or any romantic song) as `perfect.mp3` to the `public/` folder. The music will loop continuously throughout the app.

   **To add "Perfect" by Ed Sheeran:**
   - Purchase/download the song legally (iTunes, Amazon Music, etc.)
   - Convert to MP3 if needed
   - Rename the file to `perfect.mp3`
   - Place it in the `public/` folder

2. **Celebration Sound**: Add a celebration sound file named `celebration-sound.mp3` to the `public/` folder. This sound plays when the user clicks "Yes!" on the Valentine question.

**Recommended Sources for Free Audio:**
- [Pixabay Music](https://pixabay.com/music/search/romantic/) - Free romantic music
- [Free Music Archive](https://freemusicarchive.org/) - Royalty-free music
- [Freesound](https://freesound.org/) - Free sound effects

**Note**: Supported audio formats include MP3, WAV, and OGG. Make sure the files are named exactly as specified above.

## Technologies Used

- React 19
- Vite
- CSS3 (animations and styling)

## Enjoy! 💖

Have fun and happy Valentine's Day!
