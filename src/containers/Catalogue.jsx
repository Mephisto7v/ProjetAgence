import React from 'react'
import Background from '../pure-components/Background/Background'
import { PrincipalContainer } from '../pure-components/MiddlePart/MiddlePart'
import { NavBar } from '../pure-components/NavBar/NavBar'
import {GridCard, CardContainer, TopInfo, ImgLogement, InfoLogement, DownInfo, InfoPropietaire, BtnDemandeVisite} from '../pure-components/CardLogement/CardLogement'
import logementIMG from '../assets/logement.png'

const Catalogue = () => {
    return <Background>    
        <NavBar></NavBar>
        <PrincipalContainer>
            <GridCard>
                <CardContainer>
                    <TopInfo>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoLogement typeLogement='Maison' etatLogement='Neuf' superficie='167' nbChambre='4' nbGarage='1' prix='690 200'></InfoLogement>
                    </TopInfo>
                    <DownInfo>
                        <InfoPropietaire proprietaire='M. Albert Giderot' adresse='12 rue albert duprès' ville='Robinsson-sur-Avons' dateDispo='20/07/2022'></InfoPropietaire>
                    </DownInfo>
                    <BtnDemandeVisite></BtnDemandeVisite>
                </CardContainer>
                <CardContainer>
                    <TopInfo>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoLogement typeLogement='Maison' etatLogement='Neuf' superficie='167' nbChambre='4' nbGarage='1' prix='690 200'></InfoLogement>
                    </TopInfo>
                    <DownInfo>
                        <InfoPropietaire proprietaire='M. Albert Giderot' adresse='12 rue albert duprès' ville='Robinsson-sur-Avons' dateDispo='20/07/2022'></InfoPropietaire>
                    </DownInfo>
                    <BtnDemandeVisite></BtnDemandeVisite>
                </CardContainer>
                <CardContainer>
                    <TopInfo>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoLogement typeLogement='Maison' etatLogement='Neuf' superficie='167' nbChambre='4' nbGarage='1' prix='690 200'></InfoLogement>
                    </TopInfo>
                    <DownInfo>
                        <InfoPropietaire proprietaire='M. Albert Giderot' adresse='12 rue albert duprès' ville='Robinsson-sur-Avons' dateDispo='20/07/2022'></InfoPropietaire>
                    </DownInfo>
                    <BtnDemandeVisite></BtnDemandeVisite>
                </CardContainer>
                <CardContainer>
                    <TopInfo>
                        <ImgLogement path={logementIMG}></ImgLogement>
                        <InfoLogement typeLogement='Maison' etatLogement='Neuf' superficie='167' nbChambre='4' nbGarage='1' prix='690 200'></InfoLogement>
                    </TopInfo>
                    <DownInfo>
                        <InfoPropietaire proprietaire='M. Albert Giderot' adresse='12 rue albert duprès' ville='Robinsson-sur-Avons' dateDispo='20/07/2022'></InfoPropietaire>
                    </DownInfo>
                    <BtnDemandeVisite></BtnDemandeVisite>
                </CardContainer>
            </GridCard>
        </PrincipalContainer>
    </Background>
}

export default Catalogue