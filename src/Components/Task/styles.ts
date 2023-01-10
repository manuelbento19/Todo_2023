import styled from "styled-components";

export const Card = styled.li`
    display: flex;
    position: relative;
    gap: 4px;
    cursor: pointer;

    input{
        display: none;
        appearance: none;
        height: 15px;
        width: 15px;
        border: 1px solid #ddd;
        position: relative;
        cursor: pointer;
        ::before {
            position: absolute;
            font-size: 12px;
            top: -2px;
            left: -2px;
        }
        :checked::before{
            content: '✔️';
        }
    }
    :hover input{
        display: block;
    }
    div{
        height: 100%;
        flex: 1;
        padding: 6px;
        border-radius: 2px;
        background-color: #eee;
        display: flex;
        position: relative;
        p{
            word-break: break-all;
            color: #555;
            font-size: 13px;
            font-weight: 200;
        }
        span{
            font-size: 7.6px;
            position: absolute;
            bottom: -11px;
            right: 2px;
        }
        svg{
            font-size: 10px;
            color: green;
        }
    }
    
    button{
        width: 30px;
        background: transparent;
        color: rgb(83, 43, 226);
        border: none;
        font-size: 20px;
        cursor: pointer;
        }
`