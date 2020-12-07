import React from 'react'

function Home(props) {
  return <div>{props.message}</div>
}

export async function getStaticProps(context) {
  return {
    props: {
      message: `Hello Next`,
    },
  }
}

export default Home
