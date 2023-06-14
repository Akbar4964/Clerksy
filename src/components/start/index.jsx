import React from 'react';
import { Btn, Button, Clersky, Consider, Container, Count, Img, Text, Title } from './style';
import img from "./img/Frame.png";
import img1 from "./img/Frame (1).png";

export default function Start() {
    return (
        <>
            <Clersky>
                <Count>
                    <Img src={img}></Img>
                    <Container>
                        <Consider>
                            <Title>Get Started With Clerksy</Title>
                            <Text>Make sure your business puts people first.</Text>
                            <Button>
                                <Btn>Book a Free Discovery Call</Btn>
                            </Button>
                        </Consider>
                    </Container>
                    <Img src={img1}></Img>
                </Count>
            </Clersky >
        </>
    )
}
