import type { NextPage } from "next"

import { Button, Text } from "../lib/components"

const Home: NextPage = () => {
  return (
    <>
    <Text as="h1">Hello World</Text>
    <Button ml="4" mt="12" variant="warning" bgHover="blue700">Test</Button>
    </>
  )
}

export default Home
