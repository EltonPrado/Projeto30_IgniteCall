import { Button, TextInput } from '@ignite-ui/react'
import { Form } from './styles'
import { ArrowArcRight } from 'phosphor-react'

export function ClaimUsernameForm() {
  return (
    <Form as="form">
      <TextInput size="sm" prefix="ignite.com/" placeholder="seu usuário" />
      <Button size="sm" type="submit">
        Reservar
        <ArrowArcRight />
      </Button>
    </Form>
  )
}
