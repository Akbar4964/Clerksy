import React from 'react';
import { Container, Found, Title, Text, Img } from './style';
import img from "./img/1.png"

export default function Find() {
    return (
        <>
            <Found>
                <Container>
                    <Title>Employees come in all shapes and sizes. Find the right fit.</Title>
                    <Text>Focus on casting and screening. Let Clerksy handle contracts, resolve any on set-conflicts and make sure you are compliant with work and safety boards.</Text>
                    <Img src={img}></Img>
                </Container>
            </Found>
        </>
    )
}