import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import { Typography } from "@material-ui/core";

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
          <Typography component="h2" variant="h6" className={classes.description}>
            Here goes our Teaser and other marketing contents.
          </Typography>
        </GridItem>
      </GridContainer>
    </div>
  );
}
