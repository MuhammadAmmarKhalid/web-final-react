import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const Styles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function packages() {
  const classes = Styles();
  return (
       <div className="package" style={{marginTop:"10%"}}>
              <h1>Training Packages</h1>

        <div className="row-01">
             <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://imagevars.gulfnews.com/2020/11/09/Dubai-Health-Authority-home-workout_175abbb9d8a_medium.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weekly Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Keep Training And Keep Learning Untill You Get It Right
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          Fees: 1500
        </Button>
        <Button size="Medium" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
        
       </div>

       <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://previews.123rf.com/images/themorningglory/themorningglory1904/themorningglory190400469/126633873-sport-fitness-young-girl-doing-plank-position-in-gym-work-out-women.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            15 Days Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Keep Dreaming BIG And Keep Training Hard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          Fees: 2500
        </Button>
        <Button size="Medium" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
        
       </div>
        
        <div className="container-2">
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://evofitness.at/wp-content/uploads/2017/05/14A.jpg"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             Monthly Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                Push YourSelf To Your Limits. That's How You Truly Grow.
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            Fees: 5000
          </Button>
         <Button size="Medium" color="primary">
            Join
          </Button>
         </CardActions>
       </Card>
         </div>
    </div>
         

    <div className="row-02">
             <div className="container-2">
         <Card className={classes.root}>

      <CardActionArea>  
        <CardMedia
          className={classes.media}
          image="https://i2.wp.com/runningonrealfood.com/wp-content/uploads/2014/01/russian-twist-running-on-real-food-workouts.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            3 Months Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              There are no shortcuts. Only Hard Work Train Hard And Be Patient.
                           It Will Pay Of.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="Medium" color="primary">
          Fees: 10,000
        </Button>
        <Button size="Medium" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
        
       </div>
        
        <div className="container-2"> 
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://www.bowflex.com/dw/image/v2/AAYW_PRD/on/demandware.static/-/Sites-nautilus-master-catalog/default/dw2b0af525/images/bowflex/home-gyms/xtreme2se/100334/xtreme2se-bowflex-chest-fly.jpg?sw=1200&sh=800&sm=fit"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             6 Months Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
                Train Untill It Hurts And Then Train Some More.
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            Fees: 20,000
          </Button>
         <Button size="Medium" color="primary">
            Join
          </Button>
         </CardActions>
       </Card>
         </div>


          
        <div className="container-2">
    <Card className={classes.root}>
       <CardActionArea>  
      <CardMedia
        className={classes.media}
       image="https://www.hotelnewsme.com/wp-content/uploads/2019/09/The-J-Club-1024x777.jpg"
       title="Contemplative Reptile"
     />
      <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             1 Year Package
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              When You Finally Find That PERFECT BAD ASS TRAINING PARTNER That Helps You Push Trough The Pain
         </Typography>
         </CardContent>
        </CardActionArea>
         <CardActions>
          <Button size="Medium" color="primary">
            Fees: 30,000
          </Button>
         <Button size="Medium" color="primary">
            Join
          </Button>
         </CardActions>
       </Card>
         </div>

    </div>
           


    <div class="footer-bottom"> 
     &copy Designed by Ammar Chawla
     </div> 
   </div>
     
  );
}
