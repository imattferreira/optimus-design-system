import type { NextPage } from "next"

import { Box, Button, Icon, Text } from "../lib/components"

const Home: NextPage = () => {
  return (
    <Box m="20" p="4">
      <Text as="h1">Hello World</Text>
      <Button ml="4" mt="12" variant="warning" bgHover="blue700">Test</Button>
      <Icon as="FiAlertTriangle" fontSize="32" />
    </Box>
  )
}

export default Home
