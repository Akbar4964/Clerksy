import styled from "styled-components";


export let Scene = styled.section`
padding-top: 180px;
@media screen and (max-width: 400px) {
    padding-top: 50px;
}
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export let Count = styled.div``

export let Title = styled.p`
height: 108px;
width: 338px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
color: #163A24;
@media screen and (max-width: 400px) {
    font-size: 24px;
    width: 100%;
    text-align: center;
}
`

export let Text = styled.p`
padding-top: 27px;
height: 81px;
width: 379px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    font-size: 17px;
    text-align: center;
}
`

export let Img = styled.img`
@media screen and (max-width: 400px) {
    width: 100%;
}
`

export let Cons = styled.p`
padding-top: 112px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #163A24;
`

export let Ever = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
text-align: center;
color: #163A24;
margin-top: 27px;
`

export let Cards = styled.div`
display: flex;
align-items: center;
gap: 40px;
padding-top: 20px;
padding-bottom: 120px;
@media screen and (max-width: 400px) {
    display: flex;
    flex-direction: column;
}
`

export let Image =styled.img`
@media screen and (max-width: 400px) {
    
}
`

export let Card = styled.div`
height: 393px;
width: 353px;
background: #FBFAF7;
box-shadow: 5px 5px 20px #E9E4D5;
border-radius: 15px;
display: flex;
`

export let Box = styled.div`
margin-left: 40px;
padding-top: 50px;
`

Box.Title = styled.p`
margin-top: 20px;
height: 63px;
width: 301px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 32px;
color: #163A24;
`
Box.Text = styled.li`
margin-top: 23px;
list-style-type: disc;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
color: #163A24;
`