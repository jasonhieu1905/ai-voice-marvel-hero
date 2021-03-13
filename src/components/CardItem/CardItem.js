import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useCart } from "../../context/Cart-Context";

const useStyles = makeStyles({
  root: {
    width: 345,
    marginTop: 20,
  },
  media: {
    height: 100,
  },
});

function CardItem({ hero }) {
  const classes = useStyles();
  const { addToCart } = useCart();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={hero.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {hero.superhero}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {hero.characters}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => addToCart(hero.superhero, hero.image)}
        >
          Add To Card
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
