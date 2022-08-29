import { Card, collapseClasses, Paper, Typography } from "@mui/material";
import classes from "./CreateMap.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const CardOverlay = (props) => {
  const textPrimary = useSelector((state) => state.map.textPrimary);
  const textSecondary = useSelector((state) => state.map.textSecondary);
  const textCoordinates = useSelector((state) => state.map.textCoordinates);
  const [showTextPrimary, setShowTextPrimary] = useState(true);
  const [showTextSecondary, setShowTextSecondary] = useState(true);
  const [showTextCoordinates, setShowTextCoordinates] = useState(true);
  const styleTextPrimary = {
    position: "relative",
    fontFamily: "Semplicita",
    fontSize: "1.5rem",
    color: "black",
    padding: "-1.5rem",
  };
  const styleTextSecondary = {};
  const styleTextCoordinates = {};

  useEffect(() => {
    if (textPrimary) {
      setShowTextPrimary(true);
    } else {
      setShowTextPrimary(false);
    }

    if (textSecondary) {
      setShowTextSecondary(true);
    } else {
      setShowTextSecondary(false);
    }

    if (textCoordinates) {
      setShowTextCoordinates(true);
    } else {
      setShowTextCoordinates(false);
    }
  }, [textPrimary, textSecondary, textCoordinates]);

  return (
    <Paper className={classes.paper} elevation={24}>
      <div className={classes.homeMap}>{props.children}</div>
      <div className={classes.textMap}>
        {showTextPrimary && (
          <Typography className={classes.textPrimary}>{textPrimary}</Typography>
        )}
        {showTextSecondary && (
          <Typography className={classes.textSecondary}>
            {textSecondary}
          </Typography>
        )}
        {showTextCoordinates && (
          <Typography className={classes.textCoordinates}>
            {textCoordinates}
          </Typography>
        )}
      </div>
    </Paper>
  );
};
export default CardOverlay;
