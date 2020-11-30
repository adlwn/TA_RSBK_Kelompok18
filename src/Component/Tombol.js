import style from "styled-components";

export const Tombol = style.button`
color: white;
width: 180px;
height: 30px;
border:none;
border:solid 2px black;
border-radius: 5px;
background: rgba(0, 0, 0,0);
font-size: 14px;
margin: 10px 20px;
background-color: ${props => props.color};
&:hover {
    cursor:pointer;
    background-color: ${props => props.darkColor};
} 
`;