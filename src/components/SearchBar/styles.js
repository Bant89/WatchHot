import styled from 'styled-components'

export const Input = styled.input`
    display: block;
    width: 95%;
    padding: 8px 16px;
    line-height: 25px;
    font-size: 14px;
    font-weight: 500;
    font-family: inherit;
    border-radius: 6px;
    color: #fc1717;
    border: 1px solid #ff6363;
    background: white;
    transition: border .3s ease;
    &::placeholder {
        color: #ff8a8a;
    }
    &:focus {
        outline: none;
        border-color: #eb3131;
    }
`;
