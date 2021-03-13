import { Box } from "@material-ui/core";
import React from "react";
import CardItem from '../CardItem/CardItem';
import { allSuperHeros } from '../../data';

function CardList() {

  return (
    <Box
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
    >
      { allSuperHeros.map((hero, index) => {
        return <CardItem hero={hero} key={index} />
      })}
    </Box>
  );
}

export default CardList;
