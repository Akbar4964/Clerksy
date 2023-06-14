import styled from "styled-components";



export let Head = styled.section`
padding-top: 130px;
padding-bottom: 121px;
`


export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Img = styled.img`
@media screen and (max-width: 400px) {
    width: 100%;
}
`

export let Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
@media screen  and (max-width: 400px) {
    display: flex;
    align-items: center;
    flex-direction: column;
} 
`

export let Count = styled.div`
`

export let Title = styled.p`
height: 108px;
width: 325px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    font-size: 24px;
    text-align: center;
} 
`

export let Text = styled.p`
margin-top: 27px;
height: 54px;
width: 374px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #163A24;
@media screen and (max-width: 400px) {
    margin-top: 10px;
    width: 100%;
    font-size: 17px;
    text-align: center;
}
`

export let H = styled.p`
margin-top: 113px;
text-align: center;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
text-align: center;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
} 
`

export let Image = styled.img`
@media screen and (max-width:400px) {
    width: 100%;
}
`
export let Images = styled.p`
margin-top: 66px;
text-align: center;
`

export let Consider = styled.div``

Consider.Title = styled.p`
height: 108px;
width: 376px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    font-size: 24px;
    text-align: center;
    line-height: 25px;
}
`