import React, {useState, useEffect, useReducer} from "react";
import "./LegendaryCards.css";
import styled from 'styled-components'

const Img = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
position: fixed;
z-index: -1;
`

const nilaiAwal = 0

const kurangiPersediaan = (persediaanCort, pembelianCort) => {
    switch (pembelianCort) {
        case 'buy' : return persediaanCort + 1
        default : return persediaanCort
    }
}

const Legendary = () => {
    const [persediaanXerneas, setPersediaanXerneas] = useState (7);
    const [persediaanZapdos, setPersediaanZapdos] = useState (2);
    const [persediaanSuicune, setPersediaanSuicune] = useState (15);
    const [persediaanGiratina, setPersediaanGiratina] = useState (1);
    const [persediaanLugia, setPersediaanLugia] = useState (5);
    const [persediaanMewtwo, setPersediaanMewtwo] = useState (4);

    const [haltXerneas, setHaltXerneas] = useState(false);
    const [statusXerneas, setStatusXerneas] = useState("BUY $1500");

    const [haltZapdos, setHaltZapdos] = useState(false);
    const [statusZapdos, setStatusZapdos] = useState("BUY $2250");

    const [haltSuicune, setHaltSuicune] = useState(false);
    const [statusSuicune, setStatusSuicune] = useState("BUY $1775");

    const [haltGiratina, setHaltGiratina] = useState(false);
    const [statusGiratina, setStatusGiratina] = useState("BUY $1950");

    const [haltLugia, setHaltLugia] = useState(false);
    const [statusLugia, setStatusLugia] = useState("ONLY TRADE");

    const [haltMewtwo, setHaltMewtwo] = useState(false);
    const [statusMewtwo, setStatusMewtwo] = useState("BUY $5000");

    const [count, dispatch] = useReducer(kurangiPersediaan, nilaiAwal);

    const BuyXerneas = () => {
        setPersediaanXerneas(persediaanXerneas - 1);
        if (persediaanXerneas === 1) {
            setHaltXerneas(true);
            setStatusXerneas("SOLD OUT");
        }
    }

    const BuyZapdos = () => {
        setPersediaanZapdos(persediaanZapdos - 1);
        if (persediaanZapdos === 1) {
            setHaltZapdos(true);
            setStatusZapdos("SOLD OUT");
        }
    }

    const BuySuicune = () => {
        setPersediaanSuicune(persediaanSuicune - 1);
        if (persediaanSuicune === 1) {
            setHaltSuicune(true);
            setStatusSuicune("SOLD OUT");
        }
    }

    const BuyGiratina = () => {
        setPersediaanGiratina(persediaanGiratina - 1);
        if (persediaanGiratina === 1) {
            setHaltGiratina(true);
            setStatusGiratina("SOLD OUT");
        }
    }

    const BuyLugia = () => {
        setPersediaanLugia(persediaanLugia - 1);
        if (persediaanLugia === 1) {
            setHaltLugia(true);
            setStatusLugia("SOLD OUT");
        }
    }

    const BuyMewtwo = () => {
        setPersediaanMewtwo(persediaanMewtwo - 1);
        if (persediaanMewtwo === 1) {
            setHaltMewtwo(true);
            setStatusMewtwo("SOLD OUT");
        }
    }

    useEffect(() => {
        if (persediaanXerneas > -1 && persediaanXerneas < 7) {
            alert(`useEffect triggered! You purchasing XERNEAS and owned one of ten legendary pokemons in the world!`);
        }
    }, [persediaanXerneas]);

    useEffect(() => {
        if (persediaanZapdos > -1 && persediaanZapdos < 2) {
            alert(`useEffect triggered! You purchasing ZAPDOS and owned one of ten legendary pokemons in the world!`);
        }
    }, [persediaanZapdos]);

    useEffect(() => {
        if (persediaanSuicune > -1 && persediaanSuicune < 15) {
            alert(`useEffect triggered! You purchasing SUICUNE and owned one of ten legendary pokemons in the world!`);
        }
    }, [persediaanSuicune]);

    useEffect(() => {
        if (persediaanGiratina > -1 && persediaanGiratina < 1) {
            alert(`useEffect triggered! You purchasing GIRATINA and owned one of ten legendary pokemons in the world!`);
        }
    }, [persediaanGiratina]);

    useEffect(() => {
        if (persediaanLugia > -1 && persediaanLugia < 5) {
            alert(`useEffect triggered! You successfully trading LUGIA with your pokemon!`);
        }
    }, [persediaanLugia]);

    useEffect(() => {
        if (persediaanMewtwo > -1 && persediaanMewtwo < 4) {
            alert(`useEffect triggered! You purchasing MEWTWO and owned one of ten legendary pokemons in the world!`);
        }
    }, [persediaanMewtwo]);

        return (

        <div className='halamankartu'>
            <Img src='https://giffiles.alphacoders.com/130/130884.gif'></Img>   
                <div>
                    <div className="wrapper">
                        <h2>XERNEAS</h2>
                        <img class="center-fit" src="https://images-na.ssl-images-amazon.com/images/I/51gGoRFmZbL._AC_.jpg" alt="XERNEAS"/>
                        <p></p>
                        <button className="rainbow-button" onClick={BuyXerneas} disabled={haltXerneas}>{statusXerneas}</button>
                        <p></p>
                        <p><b>Available Stock : {persediaanXerneas}</b></p>
                    </div>

                    <div className="wrapper">
                        <h2>ZAPDOS</h2>
                        <img class="center-fit" src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1562927.jpg" alt="ZAPDOS"/>
                        <p></p>
                        <button className="rainbow-button" onClick={BuyZapdos} disabled={haltZapdos}>{statusZapdos}</button>
                        <p></p>
                        <p><b>Available Stock : {persediaanZapdos}</b></p>
                    </div>

                    <div className="wrapper">
                        <h2>SUICUNE</h2>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/51oTRVDnt8L._AC_.jpg" alt="SUICUNE"/>
                        <p></p>
                        <button className="rainbow-button" onClick={BuySuicune} disabled={haltSuicune}>{statusSuicune}</button>
                        <p></p>
                        <p><b>Available Stock : {persediaanSuicune}</b></p>
                    </div>

                    <div className="wrapper">
                        <h2>GIRATINA</h2>
                        <img src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/242099.jpg" alt="GIRATINA"/>
                        <p></p>
                        <button className="rainbow-button" onClick={BuyGiratina} disabled={haltGiratina}>{statusGiratina}</button>
                        <p></p>
                        <p><b>Available Stock : {persediaanGiratina}</b></p>
                    </div>

                    <div className="wrapper">
                        <h2>LUGIA</h2>
                        <img src="https://52f4e29a8321344e30ae-0f55c9129972ac85d6b1f4e703468e6b.ssl.cf2.rackcdn.com/products/pictures/1457555.jpg" alt="LUGIA"/>
                        <p></p>
                        <button className="rainbow-button" onClick={()=>dispatch('buy')}>TRADE</button>
                        <p></p>
                        <p><b>TOTAL TRADE : {count}</b></p>
                    </div>

                    <div className="wrapper">
                        <h2>MEWTWO</h2>
                        <img src="https://images-na.ssl-images-amazon.com/images/I/61Ev4n3p1-L._AC_SL1114_.jpg" alt="MEWTWO"/>
                        <p></p>
                        <button className="rainbow-button" onClick={BuyMewtwo} disabled={haltMewtwo}>{statusMewtwo}</button>
                        <p></p>
                        <p><b>Available Stock : {persediaanMewtwo}</b></p>
                    </div>
                </div>
        </div>
        );
}

export default Legendary;