import styled from "styled-components"


export let Difficult = styled.section`
background-color: #F2EFE6;
`


export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Title = styled.p`
padding-top: 114px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 47px;
line-height: 54px;
text-align: center;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    text-align: center;
    font-size: 24px;
    padding-top: 70px;
}
`

export let Text = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #163A24;
margin-top: 27px;
@media screen and (max-width: 400px) {
    width: 100%;
    font-size: 17px;
    text-align: center;
}
`

export let Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 60px;
@media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export let Count = styled.div``

export let Fill = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #163A24;
height: 54px;
width: 260px;
`

export let Time = styled.p`
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 32px;
text-align: center;
color: #163A24;
padding-top: 13px;
`

export let Img = styled.img``

Content.Button = styled.button`
height: 52px;
width: 244px;
background: #198C36;
border-radius: 160px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #FBFAF7;
border: 0;
margin-left: 38.5%;
margin-bottom: 124px;
@media screen and (max-width: 400px) {
    width: 200px;
    margin-left: 22%;
    margin-top: 30px;
    margin-bottom: 70px;
}
`