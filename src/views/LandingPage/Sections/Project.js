import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import WhyIcon from "@material-ui/icons/Chat";
import WhoIcon from '@material-ui/icons/AccessibilityNew';
import HowIcon from '@material-ui/icons/AccountTree';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="project-section">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography component="h1" variant="h2" className={classes.title}>
              Project Information
          </Typography>
          <div align="left" className={classes.description}>
            <Typography component="h1" variant="h6"  paragraph="true">
              Through My Eyes is an immersive short film capable of sensitizing the public regarding the mistreatment of 
                pets based on the 5 freedoms of animal welfare: Freedom from hunger or thirst; Freedom from discomfort; 
                Freedom from pain; Freedom to express normal behaviour; Freedom from fear and distress.
            </Typography>
            <Typography component="h1" variant="h6" paragraph="true">
              Using an immersive short  film, we intend to confront viewers with a cruel reality,  giving a voice to pets.
            </Typography>
            <Typography component="h1" variant="h6" paragraph="true">
              We want users to question themselves about Human and Animal freedom, making them realize that no animal should 
                suffer through human hands. Our main goal is to shock people in order to make a change. 
            </Typography>
            <Typography component="h1" variant="h6" paragraph="true">
              Our project is mainly aimed at young adults who may come to make a difference, but it also targets everyone 
                who has never considered the freedoms or rights of domestic animals. 
            </Typography>
          </div>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Why?"
              description="To confront participants with a cruel reality that some try to ignore. To give a voice to pets. 
                To make users question themselves about Human freedom vs Animal freedom. To shock to make a change..."
              icon={WhyIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Who?"
              description="Young adults who may come to fight against animal abuse and people who have never considered 
                the freedoms of animals."
              icon={WhoIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="How?"
              description="An immersive audio-visual experience, that 1 user at a time have an experience in a small and 
                dark space along with a video projection and sound emission, having an reinterpretation of the topic, sharing it."
              icon={HowIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
