import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  user-select: none;
  -ms-user-select: none;
  outline: 0;
  margin: 0;
  padding: 0;
}

html {
  width: 100%;
  height: 100%;
  font-size: 10px;
  font-family: 'Noto Sans KR', sans-serif
}

#__next {
  height: 100%;
  width: 100%;
}

body {
  width: 100%;
  height: 100%;
}

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  a,
  button {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  button {
    padding: 0;
    border: 0;
    background: none;
  }

  input {
    padding: 0;
    color: inherit;
    border-width: 0.1rem;
  }

  textarea {
    padding: 0;
    border-radius: 0;
    resize: none;
  }

  input[type='text'],
  input[type='tel'],
  input[type='number'],
  input[type='password'],
  input[type='email'],
  input[type='search'],
  textarea {
    border-radius: 0;
    -webkit-appearance: none;
  }

  input[name='password'],
  input[type='password'] {
    &::-webkit-credentials-auto-fill-button {
      visibility: hidden;
      position: absolute;
      left: 100%;
    }
  }

  input {
    &::-ms-clear,
    &::-ms-reveal {
      display: none;
      width: 0;
      height: 0;
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }

  img {
    -webkit-user-drag: none;
  }

`

export const palette = {
  red: {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
  },
  purple: {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
  },
  indigo: {
    50: '#e8eaf6',
    100: '#c5cae9',
    200: '#9fa8da',
    300: '#7986cb',
    400: '#5c6bc0',
    500: '#3f51b5',
    600: '#3949ab',
    700: '#303f9f',
  },
  blue: {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
  },
  cyan: {
    50: '#e0f7fa',
    100: '#b2ebf2',
    200: '#80deea',
    300: '#4dd0e1',
    400: '#26c6da',
    500: '#00bcd4',
    600: '#00acc1',
    700: '#0097a7',
  },
  teal: {
    50: '#e0f2f1',
    100: '#b2dfdb',
    200: '#80cbc4',
    300: '#4db6ac',
    400: '#26a69a',
    500: '#009688',
    600: '#00897b',
    700: '#00796b',
  },
  green: {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
  },
  yellow: {
    50: '#ffeb3b',
    100: '#fffde7',
    200: '#fff9c4',
    300: '#fff59d',
    400: '#fff176',
    500: '#ffee58',
    600: '#ffeb3b',
    700: '#fdd835',
  },
  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
}

export const levelColor: { [key: string]: string } = {
  low: 'red',
  mid: 'blue',
  high: 'green',
}

const sizes: { [key: string]: number } = {
  huge: 1440,
  large: 1170,
  medium: 768,
  small: 450,
}

// Ref. https://medium.com/@samuelresua/easy-media-queries-in-styled-components-690b78f50053
const Media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (literals: TemplateStringsArray, ...placeholders: any[]) =>
    css`
      @media (max-width: ${sizes[label]}px) {
        ${css(literals, ...placeholders)};
      }
    `.join('')
  return acc
}, {} as Record<keyof typeof sizes, (l: TemplateStringsArray, ...p: any) => string>)

export { GlobalStyle, Media }
