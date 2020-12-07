import React from 'react'

function Home(props: any) {
  return <div>{props.message}</div>
}

export async function getStaticProps(context: any) {
  return {
    props: {
      message: `Hello Next`,
    },
  }
}

export default Home
