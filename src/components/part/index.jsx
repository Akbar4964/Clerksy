import React from 'react'
import { Container, Content, Count, Head, Img, Title, Text, Consider, H, Image, Images } from './style';
import img1 from "./img/put__img1.png";
import img2 from "./img/put__img2.png";
import img3 from "./img/put__img3.png";

export default function Part() {
    return (
        <>
            <Head>
                <Container>
                    <Content>
                        <Img src={img1}></Img>
                        <Count>
                            <Title>Put the human back in HR.</Title>
                            <Text>Your employees are the real stars. Show the love and help them perform!</Text>
                        </Count>
                    </Content>
                    <Content>
                        <Consider>
                            <Consider.Title>You don’t have to play all the parts.</Consider.Title>
                            <Text>Sales, accounting, HR— Oh My! You can’t do it all - let Clerksy help.</Text>
                        </Consider>
                        <Img src={img2}></Img>
                    </Content>
                    <H>We partner with the best</H>
                    <Images>
                        <Image src={img3}></Image>
                    </Images>
                </Container>
            </Head>
        </>
    )
}
