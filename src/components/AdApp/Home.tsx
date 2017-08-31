/*
* Home.tsx
* This component displays the Home content. Home displays an image and
* text introducing the app.
*
* Created by Bethany Eastman on 08/22/2017.
*
* ADStigma
*
* Copyright © 2009-2017 United States Government as represented by
* the Chief Information Officer of the National Center for Telehealth
* and Technology. All Rights Reserved.
*
* Copyright © 2009-2017 Contributors. All Rights Reserved.
*
* THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
* REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
* COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
* AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
* THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
* INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
* REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
* DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
* HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
* RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
*
* Government Agency: The National Center for Telehealth and Technology
* Government Agency Original Software Designation: ProductName001
* Government Agency Original Software Title: ProductName
* User Registration Requested. Please send email
* with your contact information to: robert.a.kayl.civ@mail.mil
* Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
*
*/
import * as React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui';

const Home: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title="Stigma" subtitle="Overview" />}
      >
        <img style={{maxHeight: 500, margin: '0 auto', display: 'block'}} src={require('../../res/images/AdApp/ad_stigma_topics_lg.png')} alt="" />
      </CardMedia>
      <CardText>
        Institutional and personal stigma can interfere with getting needed help by creating an atmosphere of fear and intimidation. Learn how to stop focusing on worse case scenarios when it comes to help-seeking. Watch videos of those who have overcome their fear of negative consequences for using health resources they needed to cope with PTSD, depression and other challenges.
      </CardText>
    </Card>
  );

}

export default Home;
