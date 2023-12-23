module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        'marvel': {
          'primary': '#C72523',
          'primary-focus': '#951E22',
          'primary-content': '#ffffff',
          'secondary': '#4D8AB5',
          'secondary-focus': '#1E2639',
          'secondary-content': '#ffffff',
          'accent': '#C72523',
          'accent-focus': '#951E22',
          'accent-content': '#ffffff',
          'neutral': '#4D8AB5',
          'neutral-focus': '#1E2639',
          'neutral-content': '#ffffff',
          'base-100': '#ffffff',
          'base-200': '#f9fafb',
          'base-300': '#d1d5db',
          'base-content': '#1f2937',
          'info': '#266EF6',
          'success': '#35B535',
          'warning': '#FFD300',
          'error': '#C60404',
        },
      },
    ],
  },
}