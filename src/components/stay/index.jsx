import React from 'react';
import { Btn, Container, Content, Date, Email, Input, New, Old, Text, Title } from './style';


export default function Stay() {
    return (
        <>
            <Date>
                <Container>
                    <Content>
                        <New>
                            <Title>Stay up to date!</Title>
                            <Text>Sign up for the latest Clerksy news.</Text>
                        </New>
                        <Old>
                            <Input></Input>
                            <Btn>Sign Up</Btn>
                            <Email>By submitting your email you agree to receive updates about Clerksy. You can unsubscribe at any time. View our full
                                <Email.Link>Privacy Policy.</Email.Link>
                            </Email>
                        </Old>
                    </Content>
                </Container>
            </Date>
        </>
    )
}
