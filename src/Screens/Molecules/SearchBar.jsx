import React, { useState } from 'react'
import styled from 'styled-components'

const Cont = styled.div`
    width: 100%;
    height: 40%;
    margin-bottom: 30px;
    padding: 0;

`;
 

const SearchCont = styled.div`
    width: 100%;
    height: 50px;
    min-height: 90%;
    margin: 0;
    padding: 0;
    display: inline-flex;
    @media (max-width: 400px){
        height: 50px;
        display: block;
    }
`;
const FieldsCont = styled.div`
    width: 70%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding-left: 30px;
    border-radius: 40px 0% 0% 40px;
    background-color: #2C344B;
    align-items: center;
    justify-content: left;
    flex-direction: column;
    @media (max-width: 400px){
        width: calc(100% - 30px);
        height: 50%;
        border-radius: 40px 40px 40px 40px;
        margin-bottom: 20px;
    }

`;
const SubmitCont = styled.div`
    width: 30%;
    height: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
    border-radius: 0% 40px 40px 0%;
    background-color: #2C344B;
    align-items: center;
    display: flex;
    justify-content: center;

    @media (max-width: 400px){
        width: 100%;
        height: 50%;
        border-radius: 40px 40px 40px 40px;
        background-color: transparent;
    }

`;
const Text = styled.input`
    background-color: transparent;
    color: #C2CBE5;
    border: none;
    width: 100%;
    height: 100%;
    font-family: 'Chivo';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    &&:focus{
        border: none;
    }
    @media (max-width: 400px){
        width: calc(100% -30px);

    }
`;

const Submit = styled.button`
    background-color:#54E6AF;
    width: 95%;
    height: 90%;
    cursor: pointer;
    transition: 0.2s;
    border-radius: 30px;
    opactity: 100%;
    border: none;
    &&:hover{
        background: #B3FFE2;
        box-shadow: 0px 25px 20px -20px rgba(84, 230, 175, 0.497913);
        transition: 0.1s;
    }

    &&:active{
        opacity: 75%;
    }
    @media (max-width: 400px){
        width: 100%;

    }
`;

const SubmitText = styled.p`
    color: #121725;
    font-family: 'Chivo';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
`;
const Error = styled.p`
    color: #FB3E3E;
    font-family: 'Chivo';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    margin-top: 5px;
`;




export function SearchBar() {
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
  return (
    <Cont>
        <SearchCont>
            <FieldsCont>
                <Text type="text" placeholder='Email address'
                value={email}
                onChange={
                    (event) => {
                        setEmail(event.target.value);
                    }}/>
            <Error>
                {error}
            </Error>
            </FieldsCont>
            <SubmitCont>
                <Submit onClick={
                    () => {
                        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
                        if(email=== null || email=== ""){
                            setError("Oops! You forgot to write your email.");
                        }
                        else if(regexExp.test(email)){
                            setError("");
                        }
                        else{
                            setError("Oops! Please check your email.");
                        }
                    }
                }   >
                    <SubmitText>Request Access</SubmitText>
                </Submit>
            </SubmitCont>
        </SearchCont>

    </Cont>

  )
}
