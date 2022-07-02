import styled from "styled-components";

export const Title = styled.p`
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size: 52px;
    text-transform: uppercase;
    color: #54E6AF;
    margin-block: 0;
    text-align: left;
    @media(max-width:800px){
        font-size: 39px;
        line-height: 46px;
    }

    @media(max-width:400px){
        text-align: center;
        font-size: 26px;
        line-height: 38px;
    }
    
`;

export const TitleEnph = styled(Title)`

    color: #FFFFFF;
    text-align: left;

    @media(max-width:400px){
        text-align: center;
    }

`;

export const Text = styled.p`
    font-family: 'Chivo', sans-serif;
    font-weight: 300;
    font-size: 18px;
    line-height: 28px;
    color: #C2CBE5;
    text-align: left;
    @media(max-width:800px){
        font-size: 16px;
        line-height: 26px;
    }

    @media(max-width:400px){
        text-align: center;
        font-size: 15px;
        line-height: 25px;
    }

`;