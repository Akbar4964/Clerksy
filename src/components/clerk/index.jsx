import React from 'react'
import { Comp, Container, Content, HR, Count, Img, Text, Title, Link, Image } from './style';
import img from "./img/Frame.png";
import img1 from "./img/frm.png";

export default function Clerk() {
    return (
        <>
            <Comp>
                <Container>
                    <Content>
                        <Img src={img}></Img>
                        <Title>A people company.</Title>
                        {/* <Img src={img1}></Img> */}
                        <Image src={img1}></Image>
                    </Content>
                    <HR></HR>
                    <Content>
                        <Text>© 2020 Clerksy, Inc. Clerksy is a registered trademark of Clerksy, Inc.</Text>
                        <Count>
                            <Link>Privacy Policy</Link>
                            <Link>Terms of Service</Link>
                            <Link>GDPR</Link>
                            <Link>Careers</Link>
                            <Link>Press Kit</Link>
                        </Count>
                    </Content>
                </Container>
            </Comp>
        </>
    )
}
