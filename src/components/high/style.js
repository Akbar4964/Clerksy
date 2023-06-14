import styled from "styled-components";



export let Inform = styled.section`
background-color: #163A24;
padding-bottom: 140px;
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Title = styled.p`
padding-top: 66px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #FBFAF7;
@media screen and (max-width: 400px) {
    font-size: 30px;
    width: 100%;
    text-align: center;
}
`

export let Count = styled.div`
padding-top: 70px;
display: flex;
align-items: center;
gap: 100px;
justify-content: center;
@media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export let Img = styled.img``

export let Text = styled.p`
margin-top: 28px;
height: 27px;
width: 198px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #FBFAF7;
`

export let Counter = styled.div`
text-align: center;
`