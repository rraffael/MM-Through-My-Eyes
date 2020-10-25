import React from "react";
import classNames from "classnames";
import { makeStyles, Container, Grid, Typography } from "@material-ui/core/";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/marketingPage.js";

const useStyles = makeStyles(styles);

export default function MarketingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <Container>
            <Grid>
              <Typography component="h1" align="center" gutterBottom>
                Marketing Page
              </Typography>
            </Grid>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
