import React from 'react';
import { Container, Difficult, Title, Text, Content, Count, Fill, Time, Img } from './style';
import img1 from "./img/Frame.png";
import img2 from "./img/Frame (1).png";
import img3 from "./img/Frame (2).png";

export default function Easy() {
    return (
        <>
            <Difficult>
                <Container>
                    <Title>It's easy as 1, 2, 3</Title>
                    <Text>Clerksy can help use your unique business needs. Here's how:</Text>
                    <Content>
                        <Count>
                            <Fill>Fill out a form and tell us what you're looking for:</Fill>
                            <Time>5 minutes</Time>
                        </Count>
                        <Img src={img1}></Img>
                        <Count>
                            <Fill>Time it will take a Clerksy rep to follow up:</Fill>
                            <Time>24 hours</Time>
                        </Count>
                        <Img src={img2}></Img>
                        <Img src={img3}></Img>
                    </Content>
                    <Content.Button>Book Free Discovery Call</Content.Button>
                </Container>
            </Difficult>
        </>
    )
}
