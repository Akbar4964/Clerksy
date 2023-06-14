import styled from "styled-components";



export let Res = styled.section`
padding-top: 130px;
`


export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Content = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
@media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export let Title = styled.p`
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
color: #163A24;
height: 108px;
width: 360px;
@media screen and (max-width: 400px) {
    font-size: 25px;
    width: 100%;
    text-align: center;
}
`

export let Text = styled.p`
padding-top: 25px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #163A24;
@media screen and (max-width: 400px) {
    font-size: 17px;
    width: 100%;
    text-align: center;
}
`

export let Btn = styled.button`
margin-top: 34px;
height: 52px;
width: 191px;
border-radius: 160px;
background: #198C36;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #FBFAF7;
border: 0;
@media screen and (max-width: 400px) {
    width: 100%;
}
`

export let Count = styled.div``

export let Img = styled.img`
@media screen and (max-width: 400px) {
    width: 100%;
}
`