import React from 'react';
import { GreatThings } from 'moving-letters'
import '../App.css';
import './HalamanAwal.css';
import styled from 'styled-components'

const Img = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`
const Pgf = styled.h5`
  font-size: 26px;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #000000;
  -webkit-text-fill-color: #ffffff;
  letter-spacing: 1px;
  font-family: Impact, Charcoal, sans-serif;
`

function HalamanAwal() {
  return (
    <div className='halamanawal-container'>
        <Img src='https://giffiles.alphacoders.com/916/91657.gif'></Img>   
        <React.Fragment>
          <GreatThings text='Pokedex Card Pedia' />
          <Pgf>This page is a small amount of pokemon cards in registered pokedex, not all of them available on the nearly store, so grab it fast before it's too late !</Pgf>
        </React.Fragment>
    </div>
  );
}
export default HalamanAwal;
