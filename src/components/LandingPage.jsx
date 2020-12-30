import React from "react";
import {Carousel} from 'react-bootstrap';
import "../App.css";
const LandingPage = () => {
  return (
    <div className="text">
             <img src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" style={{marginTop:"8%"}} className="textimg"/>
            <div className="text-center">
                  <h1>Welcome To Fitness Club </h1>
                  <p>I Go To The GYM To Make My Soul Happy</p>
                  </div>
       <div className="homeimg">
             <img className="homeimg" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z3ltfGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"/>
       </div>

       <div className="row">
       
           <img src="https://www.gymsites.com/wp-content/uploads/2019/05/shutterstock_710451304-e1559324701985.jpg" className="img1"/>
            
            
           <img src="https://www.gymsites.com/wp-content/uploads/2019/05/Page-Remote-Coaching-e1559324818518.jpg" className="img1"/>
                
    
          <img src="https://www.gymsites.com/wp-content/uploads/2019/05/Personal-Training7-e1559324904953-1024x1024.jpg" className="img1"/>
        
       </div>

       <div className="row-0">
       
       <img src="https://previews.123rf.com/images/themorningglory/themorningglory1904/themorningglory190400469/126633873-sport-fitness-young-girl-doing-plank-position-in-gym-work-out-women.jpg" className="img2"/>
        
    
      <img src="https://sport360.fit/en/wp-content/uploads/sites/2/2018/05/John-Britton.jpg" className="img2"/>


      <img src="https://miro.medium.com/max/1200/1*YwkbNHiiRCD3wHTUCTcZPw.jpeg" className="img2"/>
   </div>

     <div className="row-1">

              <div className="container-1">

                         <h3> MODERN EQUIPMENT </h3>
                    <p> With the right gym equipment and exercises, strength training just twice a week
                            has been shown to change the way your body looks and feels. Benefits include 
                       increased metabolism, enhanced sport performance and the prevention of injury </p>

                  <ul>

                       <li> Treadmills</li>
                       <li> Kettle Bells </li>
                       <li> Resistance Bands </li>
                       <li> Exercise Balls </li>
                       <li> Fitness benches </li>
                  </ul>

                </div>

              <div className="container-1">

                              <h3> BODYBUILDING </h3>
                         <p> Bodybuilding differs from powerlifting or Olympic lifting in that it’s judged
                              on a competitor’s physical appearance rather than physical strength.
                                                                                        </p>

                         <ul>
                                <li> Goal of the bulking phase is to build muscle</li>
                               <li> Goal of the cutting phase is dedicated to preserving muscle while losing body fat</li>
                         </ul>
                </div>
              <div className="container-1">

                          <h3> HEALTHY DIET PLAN </h3>
                       <p> Each of us Contributes to the Impact that Our Food System Has on the Planet.
                          Fruit & vegetables are good for our health, and most come with a low environmental
                                      impact. </p>
                         <ul>
                                  <li> Yogurt, cottage cheese, low-fat milk and cheese </li>
                                   <li> Meats, poultry and fish </li>
                                   <li> Apples, bananas, grapes, pears, peaches </li>
                                   <li> Potatoes, corn, green peas, green lima beans </li>
                                   <li> Olive oil, flaxseed oil and avocado oil</li>

                          </ul>
                </div>

          </div>

          <div className="footer">

                <div className="box">
                          <h2>Explore</h2>

                    <ul>
                            <a href=""><li>What We Do</li></a>
                            <a href=""><li>MOTIVATION</li></a>
                            <a href=""><li>TRAIN HARD</li></a>
                            <a href=""><li>WORKOUT ROUTINE</li></a>
                            <a href=""><li>EXPLORE FITNESS</li></a>
                    </ul>
                 </div>

                <div className="box">
                           <h2>About</h2>

                        <ul>
                            <a href=""><li>About us</li></a>
                            <a href=""><li>CHEST DAY</li></a>
                            <a href=""><li>SHOULDER DAY</li></a>
                            <a href=""><li>BISCEP</li></a>
                            <a href=""><li>TRICEP</li></a>
                            <a href=""><li>BACK/WINGS</li></a>
                            <a href=""><li>LEG DAY</li></a>
                        </ul>
                </div>
                <div className="box">
                         <h2> Equipments </h2>

                      <ul>
                         <a href=""><li>DUMBBELLS</li></a>
                         <a href=""><li>ROWING MACHINE</li></a>
                         <a href=""><li>TREADMILL</li></a>
                         <a href=""><li>CARDIOVASCULAR MACHINES</li></a>
                         <a href=""><li>CABLE CROSSOVER MACHINE</li></a>
                      </ul>
                </div>
          </div>
          <div class="footer-bottom"> 
                &copy Designed by Ammar Chawla
          </div>
    </div>
  );
};

export default LandingPage;
