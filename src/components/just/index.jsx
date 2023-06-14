import React from 'react';
import { Container, Content, Res, Title, Text, Count, Btn, Img } from './style';
import img from "./img/Frame.png";

export default function Just() {
    return (
        <>
            <Res>
                <Container>
                    <Content>
                        <Count>
                            <Title>Not just another HR resource.</Title>
                            <Text>Simple. Entertaining. Informative.</Text>
                            <Btn>Download E-book</Btn>
                        </Count>
                        <Img src={img}></Img>
                    </Content>
                </Container>
            </Res>
        </>
    )
}
