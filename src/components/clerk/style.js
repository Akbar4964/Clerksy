import styled from "styled-components";


export let Comp = styled.section`
padding-top: 44px;
padding-bottom: 20px;
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
    justify-content: center;
}
`

export let Img = styled.img``

export let Image = styled.img`
@media screen and (max-width: 400px) {
    display: none;
}
`

export let Title = styled.p`
font-family: 'Recoleta';
font-style: normal;
font-weight: 600;
font-size: 24px;
line-height: 36px;
text-align: center;
color: #163A24;
`

export let Count = styled.div`
display: flex;
align-items: center;

`

export let HR = styled.hr`
margin-top: 43px;
`

export let Text = styled.p`
margin-top: 27px;
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
color: #163A24;
`

export let Link = styled.a`
font-family: 'Noto Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: right;
color: #198C36;
padding: 0 14px;
margin-top: 25px;
`