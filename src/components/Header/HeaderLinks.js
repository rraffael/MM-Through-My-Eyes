import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);
export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="#team-section"
          color="transparent"
          className={classes.navLink}
          > Team
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#idea-section"
          color="transparent"
          className={classes.navLink}
        > Idea
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#product-section"
          color="transparent"
          className={classes.navLink}
          > Product
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#work-section"
          color="transparent"
          className={classes.navLink}
          > Work
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="#report-section"
          color="transparent"
          className={classes.navLink}
          > Report
        </Button>
      </ListItem>
    </List>
  );
}
