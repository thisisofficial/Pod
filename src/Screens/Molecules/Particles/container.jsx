import styled from "styled-components";

export const App = styled.div`
    width: 100vw;
    height: 100vh;    
    background-color: #121725;
    display: flex;
    justify-content: right;
    align-items: center;
    overflow: visible;
    @media (max-width: 800px){
        align-items:flex-start;
    }
`;

export const MainCont = styled(App)`
    width: 88%;
    height: 70%;
    justify-content: center;
    overflow: vissible;
    @media (max-width: 800px){
        width: 95%;

        height: 90%;
    }
    @media (max-width: 400px){
        width: 100%;
        height: 100%;
    }
`;

const ContBase = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0;
    margin: 0;
`;

export const ContLeft =  styled(ContBase)`
    width: 57%;
    z-index: 2;
    display: block;
    @media (max-width: 800px){
        width: 87%;
    }
    @media (max-width: 400px){
        width: 100%;
        justify-content: center;
    }
`;
export const ContRight =  styled(ContBase)`
    z-index: 1;
    background: url(${props => props.bgDesk});
    background-repeat:no-repeat; 
    background-size: cover;
    margin-left: -20%;
    overflow: visible;
    @media (max-width: 800px){
        width: 67%;
        background: url(${props => props.bgTablet});
        background-repeat:no-repeat; 
        background-size: auto;
    }
    @media (max-width: 400px){
        width: 100%;
        background: url(${props => props.bgTablet});
        background-repeat:no-repeat; 
        background-size: cover;
        margin-left: -100%;
    }
`;

export const Cont = styled(ContBase)`
    width: ${props=> props.width? props.width: props.auto? "auto": "100%"};
    height:  ${props=> props.height? props.height: props.auto? "auto": "80%"};
    display: ${props => props.flex? "flex": "block"};
    background-color: ${props => props.bg? "#121725": "none"};
    justify-content: ${props=> props.justify? props.justify: "center"};
    align-items: ${props=> props.align? props.aligh: "center"};
    margin: ${props=> props.margin? props.margin: "0"};

    @media (max-width: 400px){
        width: ${props=> props.fade? "88%": props.resetphone || props.resetphonewidth || !props.width?"100%": props.width};
        height:  ${props=> props.resetphone? "100%": props.auto? "auto": props.height? props.height: "80%"};
        background-color: ${props => props.fade? "rgba(18, 23, 37, 0.6)": "none"};
        justify-content: ${props=> props.justify && !props.resetphonewidth? !props.resetphone? props.justify: "center":"center"};
        padding-left:${props=> props.fade?"6%": "0"};
        padding-right:${props=> props.fade?"6%": "0"};
    }
`;

export const ContEsp = styled(ContBase)`
    width: 70%;
    height: ${props=>props.height};
    display: flex;
    flex-direction: column;
    justify-content: left;
    @media (max-width: 400px){
        flex-direction: column-reverse;
        justify-content: center;
        width: 100%;
    }

`;

export const Dots = styled(ContBase)`
width: 30%;
height: 15%;
display: flex;
position: relative;
overflow: hidden;
top: -5%;
left: 150%;
z-index: 3;
background: url(${props => props.Dots});
    background-repeat:no-repeat; 
    background-size: contain;

    @media (max-width: 800px){
        width: 30%;
        height: 10%;
        top: 0%;
        left: 0%;
    }
@media (max-width: 400px){
    display: none;
}

`;