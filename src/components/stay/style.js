import styled from "styled-components";



export let Date = styled.section`
background-color: #F2EFE6;
padding-top: 54px;
padding-bottom: 73px;
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

export let Title = styled.p`
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 48px;
line-height: 54px;
color: #163A24;
@media screen and (max-width: 400px) {
    text-align: center;
    width: 100%;
}
`

export let Text = styled.p`
margin-top: 26px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 27px;
color: #163A24;
@media screen and (max-width: 400px) {
    width: 100%;
    text-align: center;
}
`

export let New = styled.div``

export let Old = styled.div`
position: relative;
`

export let Input = styled.input`
height: 54px;
width: 553px;
border-radius: 255px;
background: #FFFFFF;
border: 1px solid #F2EFE6;
border-radius: 255px;
outline: none;
padding-left: 25px;
cursor: pointer;
position: relative;
color: lightblue;
@media screen and (max-width: 400px) {
    width: 50%;
    height: 50px;
    margin-left: 30%;
}
`

export let Btn = styled.button`
position: absolute;
right: 0;
height: 52px;
width: 111px;
border-radius: 160px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #FBFAF7;
background: #15762E;
border-radius: 160px;
border: 0;
transition: 0.5s;
&:hover{
    background-color: red;
    color: black;
}
&:active{
    position: absolute;
    left: 0;
    background-color: yellow;
    color: black;
}
@media screen and (max-width: 400px) {
    position: absolute;
    right: 20%;
    width: 70px;
}
`

export let Email = styled.p`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #163A24;
height: 42px;
width: 524px;
padding-top: 13px;
@media screen and (max-width: 400px) {
    width: 100%;
    text-align: center;
}
`

Email.Link = styled.a`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #198C36;
padding-left: 20px;
@media screen and (max-width: 400px) {
    
}
`