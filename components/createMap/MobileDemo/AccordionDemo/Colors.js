import Image from "next/image";
import { ActionIcon } from "@mantine/core";
import classes from "./Colors.module.css";
import { MapStyleDict } from "../../MapFolder/MapConstants";
import { useDispatch } from "react-redux";
import { mapActions } from "../../../../store/map-slice";
import _ from "lodash";

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
    if (!_.get(MapStyleDict, `${key}.isOverlay`, false)) {
      MapStyleList.push(MapStyleDict[key]);
    }
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
