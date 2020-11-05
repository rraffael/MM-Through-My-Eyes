import React from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Typography, CardMedia } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section} id="marketing-contents">
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Typography component="h1" variant="h2" className={classes.title}>
            Marketing contents
          </Typography>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Typography component="h2" variant="h6" className={classes.description}>
            Here goes our Teaser and other marketing contents.
          </Typography>
          <CardMedia align="center">
                <ReactPlayer url='https://player.vimeo.com/video/37877314'/>
          </CardMedia>
        </GridItem>
      </GridContainer>
    </div>
  );
}
