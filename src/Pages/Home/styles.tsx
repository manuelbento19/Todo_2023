import styled,{keyframes} from "styled-components";

export const Container = styled.div`
    height: 100%;
    display: flex;
    background-color: rgb(83, 43, 226);
    padding: 6px 20px;

    .content{
        padding: 15px 30px;
    }
`;
export const Main = styled.main`
    margin: 13% auto 15px auto;
    max-width: 460px;
    width: 100%;
    height: fit-content;
    background-color: #fff;
    border: 0;
    box-shadow: 10px 10px 6px rgba(0 0 0 /15%);
`;
const TurnerAnimation = keyframes`
    from{
        transform: rotate(0);
    }    
    to{
        transform: rotate(360deg);
    }
`;
export const Header = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 150px;
`;
export const TopHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    h1{
        font-size: 32px;
        color: #333;
    }
    button{
        font-size: 28px;
        color: rgb(83, 43, 226);
        border: 0;
        background-color: transparent;
        cursor: pointer;

        :hover i{
            animation: ${TurnerAnimation} 1s 0s linear infinite;
            transition: all 1s;
        }
    }
`;
export const BottomHeader = styled.div`
    width: 100%;
    form{
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    input{
        font-size: 0.9em;
        flex: 1;
        height: 38px;
        padding: 6px;
        margin-right: 20px;
        border: 2px solid #777;
        border-radius: 2px;
        outline: none;

        :focus{
            border-color: rgb(83, 43, 226);
        }
    }
    button{
        font-size: 1em;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(83, 43, 226);
        color: #fff;
        border: none;
        border-radius: 2px;
        outline: none;
        cursor: pointer;

        :hover i{
            transform: translateY(-4px);
            transition: all .6s;
        }
    }
`

export const MainSection = styled.section`
    display: flex;
    max-height: 260px;

    ul{
        width: 100%;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 12px 0;
        overflow: auto;

        ::-webkit-scrollbar{
            background-color: #eee;
            width: 8px;
        }
        ::-webkit-scrollbar-thumb{
            background-color: #ddd;
            width: 8px;
            border-radius: 5px;
        }
    }
`;