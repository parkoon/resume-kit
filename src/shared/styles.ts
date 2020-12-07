import { createGlobalStyle } from 'styled-components'

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

export { GlobalStyle }
