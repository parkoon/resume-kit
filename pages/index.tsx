import React from 'react'
import path from 'path'
import fs from 'fs'

function Home(props: any) {
  return (
    <div>
      {props.message} {props.json}
    </div>
  )
}

export async function getStaticProps(context: any) {
  const jsonPath = path.join(process.cwd(), '/db/sample.json')
  const jsonData = fs.readFileSync(jsonPath, 'utf-8')
  return {
    props: {
      message: `Hello Next`,
      json: jsonData,
    },
  }
}

export default Home
