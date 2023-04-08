import React, { Fragment } from "react";
import Image from "next/image";
import { ActionIcon, Radio } from "@mantine/core";
import classes from "./Colors.module.css";
import { MapStyleDict } from "../../MapFolder/MapConstants";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../../store/map-slice";

const Colors = () => {
  const dispatch = useDispatch();
  const iconSize = 50;

  const colorChange = (event) => {
    //dispatch to change map style
    let color = event.target.attributes.value;
    dispatch(mapActions.setTileLayer({ tileLayer: color.value }));
  };

  let MapStyleList = [];
  for (var key in MapStyleDict) {
    MapStyleList.push(MapStyleDict[key]);
  }
  return (
    <div className={classes.container}>
      {MapStyleList.map((style) => {
        return (
          <ActionIcon
            title={style.id}
            key={style.iconImg}
            onClick={colorChange}
            size={iconSize}
            value={style.id}
          >
            <Image src={style.iconImg} layout="fill" value={style.id} />
          </ActionIcon>
        );
      })}
    </div>
  );
};

export default Colors;
