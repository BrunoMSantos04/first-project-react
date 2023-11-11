import styled from 'styled-components'
import bg2 from '../../assets/bg image2.svg'


export const Container = styled.div`
    background: url("${bg2}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh - 170px;
`;

export const Img = styled.img`
    margin-top: 30px;


`;


export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 24px;
    width: 342px;
    height: 58px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border: none;
    outline: none;

p{
    color: #FFF;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    }

button{
    background: none;
    cursor: pointer;
    width: 24px;
    height: 28px;
    flex-shrink: 0;
    border: none;
    outline: none;
}


`;