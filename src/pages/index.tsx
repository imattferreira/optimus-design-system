import type { NextPage } from "next"

import Button from "../package/components/Button"

const Home: NextPage = () => {
  return (
    <>
    <h1>Hello World</h1>
    <Button ml="4" mt="12" variant="warning">Test</Button>
    </>
  )
}

export default Home
