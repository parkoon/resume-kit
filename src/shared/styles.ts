import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  #__next {
    height: 100%;
    width: 100%;
  }
  
  html {
    width: 100%;
    height: 100%;
    font-size: 10px;
    font-family: 'Noto Sans KR', sans-serif
  }

  body {
    width: 100%;
    height: 100%;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`

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
