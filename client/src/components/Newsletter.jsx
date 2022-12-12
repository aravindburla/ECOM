import { Send } from "@material-ui/icons"
import { Button, Container, Desc, Input, InputContainer, Title } from "./Newsletterstyle.js"

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        <InputContainer>
        <Input placeholder="your email"/>
        <Button>
            <Send/>
        </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter