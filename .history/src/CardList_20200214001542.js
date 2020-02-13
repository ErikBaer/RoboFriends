import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {

    const cardsArray = robots.map((user,i) => {
        return (
        <Card 
        key={robots[0].id} 
        id={robots[i].id} 
        name ={robots[i].name} 
        email={robots[i].email} 
        />
        )
    })

    return (
        <Fraction>
            {cardsArray}
        </Fraction> 
    );
}

export default CardList;