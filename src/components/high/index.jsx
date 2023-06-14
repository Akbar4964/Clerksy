import React from 'react';
import { Container, Inform, Title, Img, Count, Text, Counter } from './style';
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

export default function High() {
    return (
        <>
            <Inform>
                <Container>
                    <Title>HR Production of the Highest Quality</Title>
                    <Count>
                        <Counter>
                            <Img src={img1}></Img>
                            <Text>Educates & Informs Employee Expectations</Text>
                        </Counter>
                        <Counter>
                            <Img src={img2}></Img>
                            <Text>Protects Your Business Just in Case</Text>
                        </Counter>
                        <Counter>
                            <Img src={img3}></Img>
                            <Text>Manages & Stores Important Documents</Text>
                        </Counter>
                        <Counter>
                            <Img src={img4}></Img>
                            <Text>Create a Healthy Work Environment</Text>
                        </Counter>
                    </Count>
                </Container>
            </Inform>
        </>
    )
}
