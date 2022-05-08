import type { NextPage } from "next"

import Button from "../package/components/Button"
import Text from "../package/components/Text"

const Home: NextPage = () => {
  return (
    <>
    <Text as="h1">Hello World</Text>
    <Button ml="4" mt="12" variant="warning">Test</Button>
    </>
  )
}

export default Home
