import React, { useState } from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import { AllCardContainer, CardContainer, ImgLogement, InfoAgence, InfoPropietaire } from '../pure-components/CardGestion/CardGestion'
import logementIMG from '../assets/logement.png'

const GestionFinanciere = () => {
    const PrixVente = 655000;
    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <AllCardContainer>
                <CardContainer>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoPropietaire proprietaire='Albert Giderot' adresse='12 rue albert duprès' ville='21784 Robinsson-sur-Avons'></InfoPropietaire>
                        <InfoAgence PrixVente={PrixVente} Comission={1000 + PrixVente*0.02}></InfoAgence>
                </CardContainer>
                <CardContainer>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoPropietaire proprietaire='Albert Giderot' adresse='12 rue albert duprès' ville='21784 Robinsson-sur-Avons'></InfoPropietaire>
                        <InfoAgence PrixVente={PrixVente} Comission={1000 + PrixVente*0.02}></InfoAgence>
                </CardContainer>
                <CardContainer>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoPropietaire proprietaire='Albert Giderot' adresse='12 rue albert duprès' ville='21784 Robinsson-sur-Avons'></InfoPropietaire>
                        <InfoAgence PrixVente={PrixVente} Comission={1000 + PrixVente*0.02}></InfoAgence>
                </CardContainer>
            </AllCardContainer>
        </PrincipalContainer>
        </Background>
}

export default GestionFinanciere