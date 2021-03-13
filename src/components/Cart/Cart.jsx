import CartItem from "../CardItem/CardItem";
import { useCart } from "../../context/Cart-Context";
import { Fab, List, makeStyles } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FolderIcon from "@material-ui/icons/Folder";
import DeleteIcon from "@material-ui/icons/Delete";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    bottom: "auto",
    right: 5,
    position: "fixed",
    zIndex: 1,
    marginTop: 80,
  },
  fabButton: {
    position: "fixed",
    right: 50,
    margin: "0 auto",
  },
  list: {
    backgroundColor: "green",
  },
});

export default function Cart() {
  const { cart, showCartItems, setShowCartItems, showCart, removeFromCart } = useCart();

  const classes = useStyles();

  return (
    <section>
      {showCartItems && (
        <div className={classes.root}>
          <List dense={true} className={classes.list}>
            {cart.map((entry) => (
              <ListItem key={entry.superhero}>
                <ListItemAvatar>
                  <Avatar alt={entry.image} src={entry.image} />
                </ListItemAvatar>
                <ListItemText primary={entry.superhero} secondary={entry.quantity} />
                <ListItemSecondaryAction>
                  <IconButton onClick={() => removeFromCart(entry.superhero)} edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </div>
      )}
      {showCart && (
        <Fab
          onClick={() => setShowCartItems((prev) => !prev)}
          color="secondary"
          aria-label="add"
          className={classes.fabButton}
        >
          <ShoppingCartIcon />
        </Fab>
      )}
    </section>
  );
}
