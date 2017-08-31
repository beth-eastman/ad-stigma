/*
* Assessment.tsx
* This component contains a list of assessments related to AD topic.
* Each list item contains a link to the appropriate assessment.
*
* Created by JackLightfoot on 08/22/2017.
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
import { AppPageInterface } from '../Main';
// import { GridList, GridTile } from 'material-ui/GridList';

// import assessments from '../../res/data/assessments';

import { AssessmentsList, assessments } from 'local-t2-assessment-suite';
const { Stigma, Depression, Anxiety, Worry, Optimism, PostTraumaticStress } = assessments;


export interface Props {
  cols: number;
  basePath: number;
  history: any;
  appPage: AppPageInterface;
  onClick: (videos: {id: number}) => void;
}

const Assessments: React.SFC<Props> = (props) => {
  const { cols } = props;

  const handleCancel = () => {
    return (err, assessment) => {
      props.history.push(props.basePath);
    }
  }

  // const handleAssessmentMounted = () => {
  //
  // };
  //
  // onAssessmentMounted={handleAssessmentMounted()}

  return(
    <div style={{margin: 5}}>
      <AssessmentsList onCancel={handleCancel()} cols={cols} >
        <Stigma />
        <Depression />
        <Anxiety />
        <Worry />
        <Optimism />
        <PostTraumaticStress />
      </AssessmentsList>
    </div>
  );

}

export default Assessments;
