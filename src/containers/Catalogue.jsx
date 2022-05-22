import React, { useEffect, useState } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard, CardContainer, TopInfo, ImgLogement, InfoLogement, DownInfo, InfoPropietaire, BtnCatalogue, PopUp, BtnContainer} from '../pure-components/CardLogement/CardLogement'
import {Input, Button} from '../pure-components/Formulaire/Formulaire'
import Axios from 'axios'

const formDataVente = [
    {
        text: "Date de la vente",
        type: "date",
        key: "date_vente"
    },
    {
        text: "Commission",
        type: "text",
        key: "com"
    }
]

const formDateVisite = [
    {
        text: "Date de la visite",
        type: "date",
        key: "date_visite"
    }
]

const Catalogue = () => {
    const[logements, setLogements] = useState([]);
    const[isActivePopUp, setPopUp] = useState(false);
    const[btnSelector, setBtnSelector] = useState(false);
    const[fields, setField] = useState([]);
    const [data, setData] = useState({})

    useEffect(() => {
        Axios.get("http://localhost:3001/api/getLogement").then((response) => {
        setLogements(response.data);
        console.log(response.data);
    })
    },[])

    const submitDataVente = async () => {
        showPopUp();
		Axios.post("http://localhost:3001/api/Vente", {
        data : data, idLogement : fields.id_logement
    })
    setData(null);
    }
    
    const submitDataVisite = async () => {
        showPopUp();
		Axios.post("http://localhost:3001/api/AjoutVisite", {
        data : data, idLogement : fields.id_logement
    })
    setData(null);
    }

    const showPopUp = (isDemande, field) => {
        setPopUp(!isActivePopUp)
        setBtnSelector(isDemande)
        setField(field)
    }

    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <GridCard>
                {
                    logements && logements.map(field => {
                        const img = require('../assets/'+ field.img_logement);
                     return <CardContainer>
                        <TopInfo>
                            <ImgLogement path={img}></ImgLogement>
                            <InfoLogement typeLogement={field.type_maison} etatLogement={field.etat_habitation} superficie={field.superficie_habitable} nbChambre={field.nbre_pieces} nbGarage={ field.nbGarage} prix={field.prix_mev}></InfoLogement>
                        </TopInfo>
                        <DownInfo>
                            <InfoPropietaire proprietaire={field.nom_proprietaire} adresse={field.adresse} ville={field.ville} dateDispo={field.date_dispo.substring(0, field.date_dispo.indexOf('T'))}></InfoPropietaire>
                        </DownInfo>
                        <BtnContainer>
                            <BtnCatalogue onClick={() => showPopUp(true,field)}>Demander une visite</BtnCatalogue>
                            <BtnCatalogue onClick={() => showPopUp(false,field)}>Est Vendu</BtnCatalogue>
                        </BtnContainer>
                    </CardContainer>
                    })
                }
            </GridCard>
        </PrincipalContainer>
        {
            isActivePopUp ? btnSelector ? <PopUp closePopup={showPopUp}>
                {
                    formDateVisite.map(field => {
                        return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                            setData(prev => {
                                prev[field.key] = e.target.value
                                return prev;
                            })
                            }
                        }>{field.text} : </Input>
                    })
                }
            <Button onClick={submitDataVisite}>Valider la visite</Button>
            </PopUp>
            :   
            <PopUp closePopup={showPopUp}>
                {
                    formDataVente.map(field => {
                        return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                            setData(prev => {
                                prev[field.key] = e.target.value
                                return prev;
                            })
                            }
                        }>{field.text} : </Input>
                    })
                }
            <Button onClick={submitDataVente}>Valider la modification</Button>
            </PopUp>
            : null
        }
    </Background>
}

export default Catalogue