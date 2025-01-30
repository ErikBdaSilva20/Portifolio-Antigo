import styled from "styled-components"

const ButtonNavigate = styled.button`
background:rgba(180, 0, 0, 0.68); 
border-radius: 15px;
display: flex;
align-items: center;
padding: 15px;
font-weight: bold;
font-size: 1.5rem;
color: white;
border:none;
box-shadow: 10px 10px 10px  rgba(255, 0, 0, 0.29);

cursor: pointer;
&:hover{
  opacity: 0.8;
}
&:active{
  opacity: 0.4;
}
`
export default ButtonNavigate