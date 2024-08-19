import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%,#000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerList = styled.div`
    background: #fff;
    padding: 30px 20px;
    min-width: 601px;
    min-height: 350px;
    border-radius: 5px;

`

export const ContainerGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    width: calc(120% - 20px);
    margin: 0 10px;
`
export const Input = styled.input`
    border: 2px solid rgba(209, 211, 212, 0.4);
    border-radius: 5px;
    height: 40px;
    margin-right: 10px;
    padding-left: 10px;
`
export const Button = styled.button`
   background: #8052ec;
   border-radius: 5px;
   font-weight: 900;
   font-size: 17px;
   line-height: 2px;
   height: 40px;
   border: none;
   color: #fff;
   width: 171px;
   cursor: pointer;

   &:hover{
    background: #4c3b8f;    
   }

`
export const ListIcons = styled.div`
    background: #e4e4e4 ;
    box-shadow: 1px 4px 10px rgba(0,0,0,0.2);
    border-radius: 5px;
    height: 60px;
    margin-top: 20px;

`