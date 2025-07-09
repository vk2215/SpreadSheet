// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom colors for Status pills
        statusInProcessBg: '#FEF9C3', // Light yellow/cream
        statusInProcessText: '#A16207', // Darker yellow/orange text
        statusNeedToStartBg: '#FEF08A', // Brighter yellow
        statusNeedToStartText: '#A16207', // Darker yellow/orange text
        statusCompleteBg: '#D1FAE5', // Light green
        statusCompleteText: '#065F46', // Darker green text
        statusBlockedBg: '#FEE2E2', // Light red
        statusBlockedText: '#991B1B', // Darker red text

        // Custom colors for Priority pills
        priorityHighBg: '#FEE2E2', // Light red (same as Blocked status)
        priorityHighText: '#991B1B', // Darker red text (same as Blocked status)
        priorityMediumBg: '#FEF9C3', // Light yellow (same as In-process status)
        priorityMediumText: '#A16207', // Darker yellow text (same as In-process status)
        priorityLowBg: '#DBEAFE', // Light blue
        priorityLowText: '#1E40AF', // Darker blue text

        // General UI colors (if not already defined)
        gobGreen: '#34A853', // Example green from the "New Action" button
        gobDarkGreenHover: '#2F8C48',
        gobDarkGray: '#D3D3D3',
        lightGreenCell: '#D3E1D4', // Background for the 'All Orders' cell
        darkGreenText: '#005D00',  
      },
    },
  },
  plugins: [],
}