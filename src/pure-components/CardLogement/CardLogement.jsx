import React from 'react';
import styles from './CardLogement.module.css'

const GridCard = ({children}) => {
    return <div className={styles.GridCard}>
    {children}
    </div>
}

const CardContainer = ({children}) => {
    return <div className={styles.CardContainer}>
        {children}
    </div>
}

const TopInfo = ({children}) => {
    return <div className={styles.TopInfo}>
        {children}
    </div>
}

const ImgLogement = ({path}) => {
    return <img className={styles.ImgLogement} src={path} alt='pas trouver'/>
}

const InfoLogement = ({typeLogement, etatLogement, superficie, nbChambre, nbGarage, prix}) => {
    return <div className={styles.InfoLogement}>
        <div className={styles.TypeLogement}>{typeLogement} ({etatLogement})</div>
        <div className={styles.ClassiqueInfo}>{superficie} m<sup>2</sup></div>
        <div className={styles.ClassiqueInfo}>{nbChambre} Chambre{nbChambre>1 ? 's' : ''}</div>
        <div className={styles.ClassiqueInfo}>{nbGarage} Garage{nbGarage>1 ? 's' : ''}</div>
        <div className={styles.Prix}>{prix}€</div>
    </div>
}

const DownInfo = ({children}) => {
    return <div className={styles.DownInfo}>
        {children}
    </div>
}

const InfoPropietaire = ({proprietaire, adresse, ville, dateDispo}) => {
    return <div className={styles.InfoPropietaire}>
        <div className={styles.ProprietaireText}>Propriétaire : {proprietaire}</div>
        <div className={styles.PropText}>{adresse}, {ville}</div>
        <div className={styles.PropText}>Disponibilité à partir du : {dateDispo}</div>
    </div>
}

const BtnDemandeVisite = () => {
    return <div className={styles.BtnAgencement}>
        <div className={styles.BtnDemandeVisite}>Demander une visite</div>
    </div>
}

export {
    CardContainer,
    TopInfo,
    ImgLogement,
    InfoLogement,
    DownInfo,
    InfoPropietaire,
    BtnDemandeVisite,
    GridCard
}