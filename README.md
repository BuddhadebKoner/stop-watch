   # Responsive Timer with Animated Countdown

This project is a **responsive timer application** built with **React** and styled using **Tailwind CSS**. It allows users to set a timer with hours, minutes, and seconds, automatically adjusts invalid inputs, and includes a polished animated countdown for desktop users.

---

## Features

### 1. **Dynamic Timer Input**
- Set hours (`hr`), minutes (`min`), and seconds (`sec`).
- Automatically adjusts inputs to valid values:
  - `61 seconds` converts to `1 min 1 sec`.
  - `61 minutes` converts to `1 hr 1 min`.
  - Maximum hours are capped at `24`.

### 2. **Countdown Timer**
- Reverse counting begins when the timer is started.
- Displays the remaining time in `hh:mm:ss` format.

### 3. **Responsive Design**
- Mobile-friendly layout with a compact, clean design.
- Larger, animated countdown display on desktop devices for a premium look.

### 4. **Premium Styling**
- Gradient background with subtle glowing animations.
- Tailwind CSS utilities used for responsiveness and aesthetics.
- Animated countdown text (`pulse`) for desktop users.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/timer-app.git
   cd timer-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

---

## Usage

1. Enter the desired time in **hours**, **minutes**, and **seconds**.
2. Click **Start Timer** to begin the countdown.
3. Watch the countdown reverse to zero.
4. Click **Reset Timer** to reset the input fields.

---

## Folder Structure

```
timer-app/
├── src/
│   ├── App.jsx       # Main application logic
│   ├── index.css     # Global styles (includes Tailwind CSS)
│   └── main.jsx      # React DOM rendering
├── public/           # Static assets
├── package.json      # Project metadata and dependencies
└── README.md         # Documentation
```

---

## Technologies Used

- **React**: For building the interactive UI.
- **Tailwind CSS**: For responsive and creative styling.
- **Vite**: For fast development and build tools.

---

## Features to Enhance (Optional)

- **Sound Notification**: Play a sound when the timer ends.
- **Dark/Light Mode**: Add a theme toggle for different styles.
- **Pause and Resume Timer**: Allow users to pause and restart the timer.

---

## Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Preview

### Desktop View:
- Animated countdown with a large, visually appealing timer.

### Mobile View:
- Compact and easy-to-use input form.