import React from "react";
import { makeStyles, Typography, Paper } from "@material-ui/core";
import WhyIcon from "@material-ui/icons/Chat";
import WhoIcon from '@material-ui/icons/AccessibilityNew';
import HowIcon from '@material-ui/icons/AccountTree';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import UserExperience from "assets/img/UserExperience.png";
import styles from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.js";
import Carousel from "react-slick";
import Card from "components/Card/Card.js";
// Images for storyboard carousel
import storyboard1 from "assets/img/storyboard/1.jpg";
import storyboard2 from "assets/img/storyboard/2.jpg";
import storyboard3 from "assets/img/storyboard/3.jpg";
import storyboard4 from "assets/img/storyboard/4.jpg";
import storyboard5 from "assets/img/storyboard/5.jpg";
import storyboard6 from "assets/img/storyboard/6.jpg";
import storyboard7 from "assets/img/storyboard/7.jpg";
import storyboard8 from "assets/img/storyboard/8.jpg";
import storyboard9 from "assets/img/storyboard/9.jpg";
import storyboard10 from "assets/img/storyboard/10.jpg";
import storyboard11 from "assets/img/storyboard/11.jpg";
import storyboard12 from "assets/img/storyboard/12.jpg";
import storyboard13 from "assets/img/storyboard/13.jpg";
import storyboard14 from "assets/img/storyboard/14.jpg";
import storyboard15 from "assets/img/storyboard/15.jpg";
import storyboard16 from "assets/img/storyboard/16.jpg";
import storyboard17 from "assets/img/storyboard/17.jpg";
import storyboard18 from "assets/img/storyboard/18.jpg";
import storyboard19 from "assets/img/storyboard/19.jpg";
import storyboard20 from "assets/img/storyboard/20.jpg";
import storyboard21 from "assets/img/storyboard/21.jpg";
import storyboard22 from "assets/img/storyboard/22.jpg";
import storyboard23 from "assets/img/storyboard/23.jpg";
import storyboard24 from "assets/img/storyboard/24.jpg";
import storyboard25 from "assets/img/storyboard/25.jpg";
import storyboard26 from "assets/img/storyboard/26.jpg";
import storyboard27 from "assets/img/storyboard/27.jpg";
//Images for making-of carousel
import makingof1 from "assets/img/making-of/1.jpg";
import makingof2 from "assets/img/making-of/2.jpg";
import makingof3 from "assets/img/making-of/3.jpg";
import makingof4 from "assets/img/making-of/4.jpg";
import makingof5 from "assets/img/making-of/5.jpg";
import makingof6 from "assets/img/making-of/6.jpg";
import makingof7 from "assets/img/making-of/7.jpg";
import makingof8 from "assets/img/making-of/8.jpg";
import makingof9 from "assets/img/making-of/9.jpg";

const useStyles = makeStyles(styles);
export default function ProductSection() {
  const classes = useStyles();
  const settings = {
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true
  };
  const storyBoards = [
    [storyboard1, "Storyboard1"],
    [storyboard2, "Storyboard2"],
    [storyboard3, "Storyboard3"],
    [storyboard4, "Storyboard4"],
    [storyboard5, "Storyboard5"],
    [storyboard6, "Storyboard6"],
    [storyboard7, "Storyboard7"],
    [storyboard8, "Storyboard8"],
    [storyboard9, "Storyboard9"],
    [storyboard10, "Storyboard10"],
    [storyboard11, "Storyboard11"],
    [storyboard12, "Storyboard12"],
    [storyboard13, "Storyboard13"],
    [storyboard14, "Storyboard14"],
    [storyboard15, "Storyboard15"],
    [storyboard16, "Storyboard16"],
    [storyboard17, "Storyboard17"],
    [storyboard18, "Storyboard18"],
    [storyboard19, "Storyboard19"],
    [storyboard20, "Storyboard20"],
    [storyboard21, "Storyboard21"],
    [storyboard22, "Storyboard22"],
    [storyboard23, "Storyboard23"],
    [storyboard24, "Storyboard24"],
    [storyboard25, "Storyboard25"],
    [storyboard26, "Storyboard26"],
    [storyboard27, "Storyboard27"],
  ];
  const makingOf = [
    [makingof1, "Making-of-1"],
    [makingof2, "Making-of-2"],
    [makingof3, "Making-of-3"],
    [makingof4, "Making-of-4"],
    [makingof5, "Making-of-5"],
    [makingof6, "Making-of-6"],
    [makingof7, "Making-of-7"],
    [makingof8, "Making-of-8"],
    [makingof9, "Making-of-9"],
  ];
  return (
    <div className={classes.section} id="project-section">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography component="h1" variant="h2" className={classes.title}>
              Project Information
          </Typography>
          <div align="justify" >
            <Typography component="h2" variant="h6"  paragraph="true" className={classes.description}>
              Through My Eyes is an immersive short film capable of sensitizing the public regarding the mistreatment of 
                pets based on the 5 freedoms of animal welfare: Freedom from hunger or thirst; Freedom from discomfort; 
                Freedom from pain; Freedom to express normal behaviour; Freedom from fear and distress.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              Using an immersive short  film, we intend to confront viewers with a cruel reality,  giving a voice to pets.
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              We want users to question themselves about Human and Animal freedom, making them realize that no animal should 
                suffer through human hands. Our main goal is to shock people in order to make a change. 
            </Typography>
            <Typography component="h2" variant="h6" paragraph="true" className={classes.description}>
              Our project is mainly aimed at young adults who may come to make a difference, but it also targets everyone 
                who has never considered the freedoms or rights of domestic animals. 
            </Typography>
          </div>
        </GridItem>
      </GridContainer>
      <div className={classes.section}> 
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
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Typography component="h2" variant="h4" className={classes.description}>
                Story Board
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {storyBoards.map(i => (
                    <div>
                      <img src={i[0]} alt={i[1]} className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Typography component="h2" variant="h4" className={classes.description}>
                User Experience
              </Typography>
              <img src={UserExperience} width = "100%" height="auto"/>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <Typography component="h2" variant="h4" className={classes.description}>
                Making-of
              </Typography>
            </GridItem>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  {makingOf.map(i => (
                    <div>
                      <img src={i[0]} alt={i[1]} className="slick-image" />
                    </div>
                  ))}
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
