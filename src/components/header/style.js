import styled from "styled-components";



export let Run = styled.section`
background-color: #163A24;
display: flex;
align-items: center;
justify-content: space-between;
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Title = styled.p`
height: 196px;
width: 391px;
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 65px;
color: #FBFAF7;
@media screen and (max-width:400px) {
    width: 100%;
    font-size: 20px;
}
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

export let Text = styled.p`
margin-top: 18px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #FBFAF7;
height: 81px;
width: 475px;
@media screen and (max-width:400px) {
    width: 100%;
    margin-top: 0;
}
`

export let Img = styled.img`
@media screen and (max-width: 400px) {
    width: 100%;
}
`