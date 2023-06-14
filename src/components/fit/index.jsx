import React from 'react';
import { Container, Scene, Content, Count, Title, Text, Img, Cons, Ever, Card, Box, Cards, Image } from './style';
import frame from "./img/Frame.png";
import frame1 from "./img/Frame (1).png";
import frame2 from "./img/Frame (2).png";
import frame3 from "./img/Frame (3).png";

export default function Fit() {
    return (
        <>
            <Scene>
                <Container>
                    <Content>
                        <Count>
                            <Title>How the scenes fit together</Title>
                            <Text>Employee Training & Development, Diversity & Inclusion Programs, and Conflict Resolution.</Text>
                        </Count>
                        <Img src={frame}></Img>
                    </Content>
                    <Cons>Consider everyone's best interest</Cons>
                    <Ever>HR is for everyone. Clerksy can help you.</Ever>
                    <Cards>
                        <Card>
                            <Box>
                                <Image src={frame1}></Image>
                                <Box.Title>Protect Your Company</Box.Title>
                                <Box.Text>Compliance Audits & Training</Box.Text>
                                <Box.Text>Employee Data Storage</Box.Text>
                                <Box.Text>Policy Drafting</Box.Text>
                            </Box>
                        </Card>
                        <Card>
                            <Box>
                                <Image src={frame2}></Image>
                                <Box.Title>Protect Your Company</Box.Title>
                                <Box.Text>Compliance Audits & Training</Box.Text>
                                <Box.Text>Employee Data Storage</Box.Text>
                                <Box.Text>Policy Drafting</Box.Text>
                            </Box>
                        </Card>
                        <Card>
                            <Box>
                                <Image src={frame3}></Image>
                                <Box.Title>Protect Your Company</Box.Title>
                                <Box.Text>Compliance Audits & Training</Box.Text>
                                <Box.Text>Employee Data Storage</Box.Text>
                                <Box.Text>Policy Drafting</Box.Text>
                            </Box>
                        </Card>
                    </Cards>
                </Container>
            </Scene>
        </>
    )
}
