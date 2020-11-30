import React, { Component } from "react"; 
import axios from "axios"; 
import 'antd/dist/antd.css';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components'
import './HalamanPokemon.css';

const useStyles = makeStyles({
  table: {
    maxWidth: 600,
    color: '#000000',
    border: '1em solid #000000',
  },
});

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`

const KolomPertama = styled.div
`
    display: table-cell;
    text-align: center;
    padding: 10px;
    border-collapse:collapse;
    border:1px solid #000000;
    font-family: Impact, Charcoal, sans-serif
`

const KolomKedua = styled.div
`
    display: table-cell;
    text-align: center;
    padding: 10px;
    border-collapse:collapse;
    border:1px solid #000000;
    font-size: 32px;
    -webkit-text-stroke: 1px white;
    font-family: Impact, Charcoal, sans-serif
`

const BarisPertama = styled.div
`
    font-weight: bold;
    font-size: 36px;
    text-transform: uppercase;
    margin: 10px 180px 10px 180px;
    background-color: #ddff00;
    display: table;
    padding:  100px;
    width: 80%;
    table-layout: fixed;
    border-spacing: 2px;
`

const BarisKedua = styled.div
`
    background-color: #ffff;
    display: table;
    margin: 10px 180px 10px 180px;
    padding:  100px;
    width: 80%;
    table-layout: fixed;
    border-spacing: 2px;
    border-collapse:collapse;
    background-color: transparent;
`



export default class PokedexLists extends Component{
    constructor(props) {
        super(props); 
        this.state = { 
            pokedex: [], 
            visible: false,
            imageUrl: "",
            name: "", 
            nationalPokedexNumber: "", 
            types: "", 
            series: "", 
        };
    }

    componentDidMount() { 
        axios({ 
            method: "get", 
            url: "https://api.pokemontcg.io/v1/cards?subtype=Basic", 
            headers: { 
                accept: "*/*", 
            }, 
        })
        .then((data) => { 
            console.log(data.data.cards); 
            this.setState({ 
                pokedex: data.data.cards, 
            }); 
        })
        .catch((error) => { 
            console.log(error); 
        }); 
    }

    render() {
        return (
            <div className='halamanawal-container'>
                <Img src='https://giffiles.alphacoders.com/130/130885.gif'></Img>
                    <TableContainer Component={Paper}>
                    <Table className={useStyles.table}>
                        <TableHead>
                        <BarisPertama>
                            <KolomPertama align="center">Cards</KolomPertama>
                            <KolomPertama align="center">Name</KolomPertama>
                            <KolomPertama align="center">Pokedex Number</KolomPertama>
                            <KolomPertama align="center">Types</KolomPertama>
                            <KolomPertama align="center">Series</KolomPertama>
                        </BarisPertama>
                        </TableHead>
                        <TableBody>
                        {this.state.pokedex.map((results, index) => (
                            <BarisKedua key={results.id}>
                            <KolomKedua align="center"><img class="center-fit" src={results.imageUrl}/></KolomKedua>
                            <KolomKedua align="center">{results.name}</KolomKedua>
                            <KolomKedua align="center">{results.nationalPokedexNumber}</KolomKedua>
                            <KolomKedua align="center">{results.types}</KolomKedua>
                            <KolomKedua align="center">{results.series}</KolomKedua>
                            </BarisKedua>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </div>
        );
    }
}
