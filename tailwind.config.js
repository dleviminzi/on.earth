const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'regent-st-blue': {
          '50': '#fbfdfd',
          '100': '#f6fafb',
          '200': '#e9f3f6',
          '300': '#dcecf1',
          '400': '#c2dee6',
          '500': '#a8d0db',
          '600': '#97bbc5',
          '700': '#7e9ca4',
          '800': '#657d83',
          '900': '#52666b'
        },
        'red-damask': {
          '50': '#fdf8f6',
          '100': '#fbf0ec',
          '200': '#f6dad0',
          '300': '#f0c4b4',
          '400': '#e5987c',
          '500': '#da6c44',
          '600': '#c4613d',
          '700': '#a45133',
          '800': '#834129',
          '900': '#6b3521'
        },
        'cherokee': {
          '50': '#fffdfa',
          '100': '#fffbf5',
          '200': '#fff5e6',
          '300': '#ffefd6',
          '400': '#ffe4b8',
          '500': '#ffd899',
          '600': '#e6c28a',
          '700': '#bfa273',
          '800': '#99825c',
          '900': '#7d6a4b'
        },
        'limed-spruce': {
          '50': '#f5f5f6',
          '100': '#eaeced',
          '200': '#cbcfd1',
          '300': '#acb2b5',
          '400': '#6d787e',
          '500': '#2f3e46',
          '600': '#2a383f',
          '700': '#232f35',
          '800': '#1c252a',
          '900': '#171e22'
        },
        'slate-gray': {
          '50': '#f5f6f6',
          '100': '#ebedee',
          '200': '#cdd3d4',
          '300': '#aeb9ba',
          '400': '#728486',
          '500': '#354f52',
          '600': '#30474a',
          '700': '#283b3e',
          '800': '#202f31',
          '900': '#1a2728'
        },
        'alabaster': {
          '50': '#ffffff',
          '100': '#ffffff',
          '200': '#fefefe',
          '300': '#fefefe',
          '400': '#fdfdfd',
          '500': '#fcfcfc',
          '600': '#e3e3e3',
          '700': '#bdbdbd',
          '800': '#979797',
          '900': '#7b7b7b'
        },
        'beige': {
          '50': '#fffffe',
          '100': '#fefefd',
          '200': '#fdfdf9',
          '300': '#fcfcf6',
          '400': '#f9f9ef',
          '500': '#f7f7e8',
          '600': '#deded1',
          '700': '#b9b9ae',
          '800': '#94948b',
          '900': '#797972'
        },
        'lavender': {
          '50': '#fdfdff',
          '100': '#fafaff',
          '200': '#f3f4ff',
          '300': '#ecedff',
          '400': '#dedfff',
          '500': '#d0d1ff',
          '600': '#bbbce6',
          '700': '#9c9dbf',
          '800': '#7d7d99',
          '900': '#66667d'
        },
        'navy': {
          '50': '#f5f6f7',
          '100': '#ecedef',
          '200': '#ced3d7',
          '300': '#b1b8bf',
          '400': '#77838f',
          '500': '#3c4e5f',
          '600': '#364656',
          '700': '#2d3b47',
          '800': '#242f39',
          '900': '#1d262f'
        },
        'coral': {
          '50': '#fff8f9',
          '100': '#fff2f3',
          '200': '#ffdde0',
          '300': '#ffc9cd',
          '400': '#ffa1a8',
          '500': '#ff7883',
          '600': '#e66c76',
          '700': '#bf5a62',
          '800': '#99484f',
          '900': '#7d3b40'
        }

      },
    },
  },
  plugins: [],
}
