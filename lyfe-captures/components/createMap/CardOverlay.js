import { Card, collapseClasses, Paper, Typography } from "@mui/material";
import classes from "./CreateMap.module.css";

const CardOverlay = (props) => {
  return (
    <Paper className={classes.paper} elevation={24}>
      <div className={classes.homeMap}>{props.children}</div>
      <div className={classes.textMap}>
        <Typography className={classes.textPrimary}>AUSTIN, TEXAS</Typography>
        <Typography className={classes.textSecondary}></Typography>
        <Typography className={classes.textCoordinates}>N40 23'37.234" W111 54'54.73"</Typography>
      </div>
    </Paper>
  );
};
export default CardOverlay;
