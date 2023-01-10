import styled from "styled-components";

export const Background = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background-color: #00000190;
    padding: 10px;
`;
export const Content = styled.section`
    max-width: 320px;
    width: 100%;
    min-height: 300px;
    margin: auto;
    background-color: #fff;
    border: none;
    border-radius: 3px;
    box-shadow: 2px 6px 9px rgba(0 0 0 /15%);
    display: flex;
    flex-direction: column;
    padding: 6px 10px;
    position: relative;
`
export const CloseButton = styled.button`
    position: absolute;
    top: 4px;
    right: 4px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    border: none;
    border-radius: 50%;
    background-color: #ddd;
    color: #333;
    cursor: pointer;
`;
export const CloseSignal = styled.i`
    position: absolute;
    top: 4px;
    left: 4px;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    border: none;
    border-radius: 50%;
    color: green;
`;
export const TaskImage = styled.img`
    width: 100px;
    margin: 5% auto 8% auto;
` 
export const Text = styled.p`
    font-size: 13px;
    color: #888;
    text-align: justify;
    padding: 0 6px;
    word-break: break-all;
`;
export const Description = styled.section`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    padding: 0 6px;
    gap: 8px;
    .description{
        font-size: 12px;
        color: #333;
        svg{
            color: orange;           
        }
    }
`;
export const CloseTaskButton = styled.button`
    display: flex;
    align-self: left;
    justify-content: center;
    align-items: center;
    max-width: 150px;
    width: 100%;
    height: 33px;
    margin: 6px auto;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: bold;
    background-color: rgb(83, 43, 226);
    color: #fff;
    cursor: pointer;
    :hover{
        background-color: rebeccapurple;
    }
`;