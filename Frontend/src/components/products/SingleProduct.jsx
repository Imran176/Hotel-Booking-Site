import React from "react";
import { Grid, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
import { withRouter } from "react-router";
import userService from "../../services/UserService";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});


const SingleProduct = (props) => {
  const { product, onDelete, history, type, show } = props;
  const classes = useStyles();
  console.log(props);
  return (
    <>
     {/* <Grid item xs={6}> */}
     {/* <Grid item xs={4}> */}
    {(product.type===type) &&(
      <> 
        <Grid item xs={4}>
        
            {userService.isAdmin() && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log("navigate to update");
                    history.push("/products/update/" + product._id);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => {
                    productService
                      .deleteProduct(product._id)
                      .then((data) => {
                        console.log(data);
                        onDelete();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Delete
                </Button>
              </>
            )}

          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              image={product.pic}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h7" component="h2">
                {product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">  
              Book Now!
            </Button>
          </CardActions>
        </Card>
          <hr />
        </Grid>
      </> )}
      {((product.type==="") && !(show==="2")) &&(
      <> 
        <Grid item xs={4}>
        
            {userService.isAdmin() && (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={(e) => {
                    console.log("navigate to update");
                    history.push("/products/update/" + product._id);
                  }}
                >
                  Edit
                </Button>{" "}
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={(e) => {
                    productService
                      .deleteProduct(product._id)
                      .then((data) => {
                        console.log(data);
                        onDelete();
                      })
                      .catch((err) => {
                        console.log(err);
                      });
                  }}
                >
                  Delete
                </Button>
              </>
            )}

          <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="240"
              image={product.pic}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h7" component="h2">
                {product.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {product.discription}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" variant="contained" color="secondary">  
              Book Now!
            </Button>
          </CardActions>
        </Card>
          <hr />
        </Grid>
      </> )}
    {/* </Grid> */}
     {/* </Grid> */}
    </>
  );
};

export default withRouter(SingleProduct);
