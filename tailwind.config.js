/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        'rubik-black': ['Rubik-Black'], // 'Rubik-Black' is the key from useFonts
        'rubik-black-italic': ['Rubik-BlackItalic'],
        'rubik-bold': ['Rubik-Bold'],
        'rubik-bold-italic': ['Rubik-BoldItalic'],
        'rubik-extrabold': ['Rubik-ExtraBold'],
        'rubik-extrabold-italic': ['Rubik-ExtraBoldItalic'],
        'rubik-italic': ['Rubik-Italic'],
        'rubik-light': ['Rubik-Light'],
        'rubik-light-italic': ['Rubik-LightItalic'],
        'rubik-medium': ['Rubik-Medium'],
        'rubik-medium-italic': ['Rubik-MediumItalic'],
        'rubik-regular': ['Rubik-Regular'], // This will likely be your primary one
        'rubik-regular-italic': ['Rubik-RegularItalic'],
        'rubik-semibold': ['Rubik-SemiBold'],
        'rubik-semibold-italic': ['Rubik-SemiBoldItalic'],
        'space-mono': ['SpaceMono-Regular'], // For SpaceMono if you use it
        sans: ['Rubik-Regular', 'system-ui', 'sans-serif'], // Add other fallbacks if desired
      },
    },
  },
  plugins: [],
};
