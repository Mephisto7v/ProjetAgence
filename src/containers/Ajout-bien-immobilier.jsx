import React, { useState, useEffect } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {FormContainer, Input, InputImg, Button, RightForm, LeftForm, LabelForm, DisplayImg} from '../pure-components/Formulaire/Formulaire'
import Axios from 'axios';

const formData = [
    {
        text: "Adresse",
        type: "text",
        key: "adresse"
    },
    {
        text: "Ville",
        type: "text",
        key: "ville"
    },
    {
        text: "Nom du Propriétaire",
        type: "text",
        key: "proprietaire"
    },
    {
        text: "Type du bien",
        type: "text",
        key: "typeBien"
    },
    {
        text: "Nombre de pièces",
        type: "text",
        key: "nbPiece"
    },
    {
        text: "Superficie habitable",
        type: "text",
        key: "superficie"
    },
    {
        text: "Etat de l'habitation",
        type: "text",
        key: "etat"
    },
    {
        text: "Prix de vente",
        type: "text",
        key: "prix"
    },
    {
        text: "Date de disponibilité",
        type: "date",
        key: "dateDispo"
    },
    {
        text: "Nombre de garage",
        type: "text",
        key: "nbGarage"
    }
]



const AjoutBien = () => {
    const [data, setData] = useState({})
    const [file, setFile] = useState({})

    const submitData = async () => {
		Axios.post("http://localhost:3001/api/insertBien", {
        data : data, file : file    
    })
    }
    
    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <FormContainer>
                <LeftForm>
                    {
                        formData.map(field => {
                                return <Input key={field.key} type={field.type} placeholder={field.text} onChange={(e) => {
                                    setData(prev => {
                                        prev[field.key] = e.target.value
                                        return prev;
                                    })
                                    }
                                }>{field.text} : </Input>
                        })
                    }
                </LeftForm>
                <RightForm>
                    <LabelForm>
                        <InputImg type='file' onChange={(e) => {
                            setFile(e.target)
                            console.log(file);
                        }} style={{display:'none'}} accept='image/png, image/jpeg'/>
                    </LabelForm>
                    {
                        file ? <DisplayImg path={file}></DisplayImg> : <DisplayImg></DisplayImg>
                    }
                    <Button onClick={submitData}></Button>
                </RightForm>
            </FormContainer>
        </PrincipalContainer>
        </Background>
}

export default AjoutBien