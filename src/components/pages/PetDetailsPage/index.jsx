import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import PetsOrderContext from '../../../context/petsOrderContext';


import "./styles.css";


export const PetDetailsPage = (props) => {
    const {id} = useParams();

    const [pet, setPets] = useState({});

    const globalState = useContext(PetsOrderContext);

    useEffect ( () => {
        const pet= globalState.pets.find(
        (pet) => pet.id.stringValue === id 
    );
    setPets (pet);
    }, [])

    if (pet) {
         return (
        <div className="pets-page">
            <h1 className="pets-title"> {pet.name?.stringvalue} </h1>
            <img src={pet.image?.stringValue} alt="pet photo"/>
        </div>
    )
    } else {
        return <p>No pet with this id</p>
    }

}