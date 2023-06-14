import styled from "styled-components";



export let Found = styled.section`
padding-top: 114px;
background-color: #F2EFE6;
padding-bottom: 140px;
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Title = styled.p`
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #163A24;
height: 108px;
width: 739px;
margin: 0 auto;
@media screen and (max-width: 400px) {
    width: 100%;
    font-size: 24px;
    text-align: center;
}
`

export let Text = styled.p`
padding-top: 27px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #163A24;
height: 54px;
width: 760px;
margin: 0 auto;
@media screen and (max-width: 400px) {
    font-size: 17px;
    width: 100%;
    text-align: center;
}
`

export let Img = styled.img`
margin-top: 20px;
@media screen and (max-width: 400px) {
    width: 100%;
    padding-top: 50px;
}
`