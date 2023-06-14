import React from 'react';
import { Container, Run, Title, Text, Content, Count, Img } from './style';
import header__img from "./img/header__img.png"

export default function Header() {
    return (
        <>
            <Run>
                <Container>
                    <Content>
                        <Count>
                            <Title>Running the show has never been so easy.</Title>
                            <Text>Ready to put the human back in HR? Clerksy helps you set the stage with an inclusive and compliant workplace.</Text>
                        </Count>
                        <Img src={header__img}></Img>
                    </Content>
                </Container>
            </Run>
        </>
    )
}
