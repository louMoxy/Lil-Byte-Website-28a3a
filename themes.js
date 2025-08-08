exports.COLOR_THEMES = {
  default: {
    colors: {
      // Light theme colors - Ooblets-inspired Palette
      primary: '#FF6B9D', // Vibrant Pink - like Ooblets' signature pink
      'primary-dark': '#E85A87', // Deeper Pink - hover states
      secondary: '#FFB347', // Warm Orange - like Ooblets' sunny vibes
      background: '#FFF8E7', // Warm Cream - cozy like Ooblets' world
      surface: '#FFFFFF', // Pure White - clean content areas
      'text-primary': '#4A3728', // Rich Brown - earthy, readable
      'text-secondary': '#7B5E3F', // Medium Brown - warm subheadings
      'accent-1': '#87CEEB', // Sky Blue - like Ooblets' cheerful blues
      'accent-2': '#98D8C8', // Mint Green - fresh, nature-inspired
      'accent-3': '#F7DC6F', // Sunny Yellow - bright and cheerful
      'accent-4': '#BB8FCE', // Lavender Purple - magical touches
      // Dark theme colors - Cozy Evening Ooblets
      'dark-background': '#2C1810', // Deep Warm Brown - cozy evening
      'dark-surface': '#3D2419', // Lighter Warm Brown - content areas
      'dark-text-primary': '#F4E4BC', // Warm Cream - main text
      'dark-text-secondary': '#D4B896', // Golden Tan - subheadings/links
      // Gradients for compatibility (Ooblets theme)
      'gradient-1': '#FF6B9D', // Vibrant Pink
      'gradient-2': '#FFB347', // Warm Orange
      'gradient-3': '#87CEEB', // Sky Blue
      'gradient-4': '#98D8C8', // Mint Green
    },
  },
  bejamas: {
    colors: {
      primary: '#FF8585',
      'gradient-1': '#7d7aff',
      'gradient-2': '#2121E2',
      'gradient-3': '#FF76B8',
      'gradient-4': '#001AFF',
    },
  },
  netlify: {
    colors: {
      primary: '#00A354',
      'gradient-1': '#00F0FF',
      'gradient-2': '#00F0FF',
      'gradient-3': '#FAFF00',
      'gradient-4': '#00F0FF',
    },
  },
  reddie: {
    colors: {
      primary: '#FF4D4D',
      'gradient-1': '#FFC700',
      'gradient-2': '#FF85DD',
      'gradient-3': '#FF85DD',
      'gradient-4': '#FF8585',
    },
  },
  greenie: {
    colors: {
      primary: '#C78500',
      'gradient-1': '#FFCC81',
      'gradient-2': '#00F37F',
      'gradient-3': '#00F37F',
      'gradient-4': '#FFCC81',
    },
  },
};

exports.FONT_THEMES = {
  'sans-serif': `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
  serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`,
  monospace: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  fredoka: `"Fredoka", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
  nunito: `"Nunito", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif`,
};
