import styled from 'styled-components'

export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 120px;
    flex-shrink: 0;
    border-radius: 14px;
    background: ${props => props.reverseArrow ? 'transparent'  : ' var(--templates-5-color-1, rgba(0, 0, 0, 0.80))'};
    cursor: pointer;
    border: ${props => props.reverseArrow ? '1px solid #fff' : 'none'};
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

    ${props => props.reverseArrow && `
       img{
        transform: rotateY(180deg);
        }
    `}
`;