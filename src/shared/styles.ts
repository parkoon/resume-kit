import { createGlobalStyle, css } from 'styled-components'

const sizes: { [key: string]: number } = {
  huge: 1200,
  large: 992,
  medium: 768,
  small: 576,
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

const ResumeGlobalStyle = createGlobalStyle`

  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
  }
  
  html {
    width: 100%;
    height: 100%;
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif

   
  }

  #__next {
    height: 100%;
    width: 100%;
  }

  body {
    width: 100%;
    height: 100%;
    color: #333;
  }

  ${Media.medium`
    html {
      font-size: 15px;
    }
  `}

  ${Media.small`
    html {
      font-size: 14px;
    }
  `}
`

const AdminGlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
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
    color: #333;
  }

`

const palette = {
  white: '#fff',
  black: '#000',
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
  solidLine() {
    return `1px solid ${this.grey[500]}`
  },
  dashedLine() {
    return `2px dashed ${this.grey[500]}`
  },
  level: {
    senior: '#4caf50',
    middle: '#ffeb3b',
    junior: '#ff9800',
    trainee: '#d84315',
  },
}

const levelColor: { [key: string]: string } = {
  low: palette.green[300],
  mid: palette.teal[400],
  high: palette.indigo[700],
}

export { ResumeGlobalStyle, AdminGlobalStyle, Media, levelColor, palette }
