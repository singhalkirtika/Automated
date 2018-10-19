import React from 'react';
import Header from './HeaderComponent';
import { Card, CardImg, CardImgOverlay, CardTitle} from 'reactstrap';

function About(){
  return(
    <div>
       <div>
         <Header/>
       </div>
        <div className="container">
          <h1 className="mt-4">About Us</h1>
          <div>
          <Card>
              <CardImg width="100%" src="assets/aman.jpg"/>
              <CardTitle>Aman</CardTitle>
          </Card>
          </div>
        </div>
    </div>
  );

}

export default About;
