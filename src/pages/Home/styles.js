import styled from 'styled-components'
import bg1 from '../../assets/bg image1.svg'
import { Link } from 'react-router-dom'



export const Container = styled.div`
    background: url("${bg1}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 140vh;
`;

export const Img = styled.img`
    margin-top: 30px;


`;

export const Itens = styled.div`
    border-radius: 61px 61px 0px 0px;
    background: linear-gradient(157deg, rgba(255, 255, 255, 0.60) 0.84%, rgba(255, 255, 255, 0.60) 0.85%, rgba(255, 255, 255, 0.15) 100%);
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    height: 150vh;
`;

export const H1 = styled.h1`
    color: #FFF;
    text-align: center;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 80px;
`;

export const LabelInput = styled.p`
    color: #EEE;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    margin-left: 25px;
`;

export const Input = styled.input`
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;
    padding-left: 25px;
    font-size: 24px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #FFF;
    margin-bottom: 34px;
`;

export const Button = styled(Link)`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    flex-shrink: 0;
    border-radius: 14px;
    background: var(--templates-5-color-1, rgba(0, 0, 0, 0.80));
    cursor: pointer;
    border: none;
    color: #FFF;
    font-size: 17px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.5;
    }
`;
