import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
background-color: #F5F5F5;
border-radius: 20px;
box-shadow: 0px 10px 20px -10px rgba(0,0,0,0.75);
color: #B3B8CD;
position: relative;
width: 50%;
margin: auto;
margin-top: 150px;
@media screen and (max-width: 500px) {
       margin: auto;
}
`

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

const Image = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
  width: 60%;
  height: 10%;
  margin: 20px;
  
`
const Title = styled.h5`
  margin: auto;
  color:black;
  font-size:1vw
`
const SelectKelas = styled.select`
	font-size: 16px;
	font-family: sans-serif;
	font-weight: 700;
	color: #444;
	line-height: 1.3;
	padding: .2em 1em;
	width: 40%;
	margin: 0;
	border: 1px solid #aaa;
	box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
	border-radius: .7em;
	appearance: none;
	background-color: #fff;
	background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
	  linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);
	background-repeat: no-repeat, repeat;
	background-position: right .7em top 50%, 0 0;
    background-size: .65em auto, 100%;
    margin: 30px
`
const Rowcard = styled.div
`
    display: table;
    width: 100%;
    table-layout: fixed;
    border-spacing: 0px;
    text-align: center;
`

const ColumnCard = styled.div
`
    display: table-cell;
    text-align: center;

`

function CardInfo(props){
    return(
        <div>
            <Image src={props.src}/><br/>
            <a>{props.nama}</a><br/>
            <a>{props.nim}</a>
        </div>

    )
}

export default function index() {
  return (
    <div className='hero-container'>
      <Img src='https://giffiles.alphacoders.com/398/3987.gif'></Img> 
        <Rowcard>
            <ColumnCard>
            <Container>
              <Title>
                  <CardInfo nama="Desy Krisdian R. W. A." nim="21120117120020" src="https://scontent.fsub9-1.fna.fbcdn.net/v/t1.0-9/13418866_1726198377636676_4427437545356754731_n.jpg?_nc_cat=110&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGZXnW57_uF3Ye6QaEpCAlxjVFLUB7NAMCNUUtQHs0AwF-13l8Bd-WVufskcZE17ITXfrf_pwofR0hGs_DamdTb&_nc_ohc=BeoIHLrOmcwAX-o65Ca&_nc_ht=scontent.fsub9-1.fna&oh=d954b71f6f16dc77584d836854b75288&oe=5FDFDCDF"/>
              </Title>
              <SelectKelas>
                  <option value="0">INFORMATION</option>
                  <option value="1">▼	Gender : Female</option>
                  <option value="2">▼	Age : 21</option>
                  <option value="3">▼	Place Of Birth : Kendal</option>
                  <option value="4">▼ Pokemon : Bulbasaur</option>
              </SelectKelas>
              </Container>
            </ColumnCard>
            <ColumnCard>
            <Container>
              <Title>
                  <CardInfo nama="Divianis Oktaviyani" nim="21120117120017" src="https://divianis.my.id/assets/img/profile.jpg"/>
              </Title>
              <SelectKelas>
                  <option value="0">INFORMATION</option>
                  <option value="1">▼	Gender : Male</option>
                  <option value="2">▼	Age : 22</option>
                  <option value="3">▼	Place Of Birth : Kediri </option>
                  <option value="4">▼	Pokemon : Mewtwo</option>
              </SelectKelas>
              </Container>
            </ColumnCard>
        </Rowcard>
    </div>
  );
}