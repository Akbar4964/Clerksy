import styled from "styled-components";



export let Nav = styled.section`
background-color: #163A24;
padding-top: 21px;
padding-bottom: 25px;
`

export let Container = styled.div`
max-width: 1240px;
padding: 0 20px;
margin:  0 auto;
`

export let Menu = styled.ul`
display: flex;
justify-content: space-between;
align-items: center;
`
export let Img = styled.img`
color: #fff;
@media screen and (max-width:400px) {
    width: 30%;
}
`
export let Content = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap: 24px;
@media screen and (max-width:400px) {
    display: flex;
    align-items: center;
    justify-content: none;
    gap: 7px;
}
`

export let Text = styled.div`
color: #fff;
@media screen and (max-width: 400px) {
    padding-left: 10px;
}
`

export let Btn = styled.button`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 22px;
text-align: center;
color: #FBFAF7;
background-color: #198C36;
height: 52px;
width: 141px;
border-radius: 160px;
border: 0;
@media screen and (max-width:400px) {
    width: 100px;
    height: 50px;
}
`