import type { NextPage } from "next"

import { Box, Button, Form, Icon, Input, Text } from "../lib/components";
import { useForm } from "../lib/hooks";

const Home: NextPage = () => {
  const { register } = useForm();

  return (
    <Box>
      <Text as="h1">Hello World</Text>
      <Button ml="4" mt="12" variant="warning" bgHover="blue700">Test</Button>
      <Icon as="FiAlertTriangle" fontSize="32" />
      <Form onSubmit={() => null} borderWidth="sm" borderColor="red600" spacing="4">
        <Input label="Hello World" placeholder="Nome Completo" iconRight="FiAlertCircle" {...register('name', { required: true })} />
        <Input label="Hello World" placeholder="Nome Completo" iconRight="FiAlertCircle" />
      </Form>
    </Box>
  )
}

export default Home
