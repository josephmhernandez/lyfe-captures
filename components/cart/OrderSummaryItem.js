import Image from "next/image";
import { Segment } from "semantic-ui-react";
import { MapStyleDict } from "../../components/createMap/MapFolder/MapConstants";
import classes from "./OrderSummaryItem.module.css";
const OrderSummaryItem = ({ item }) => {
  let total_price = item.unit_price * item.quantity;
  let formatted_total_price = `$${total_price.toFixed(2)}`;
  let formatted_quantity = `x${item.quantity}`;
  let tile_layer_image = MapStyleDict[item.tile_layer].iconImg;
  return (
    <Segment className={classes.item} raised key={item.map_id}>
      <Image
        width={150}
        height={150}
        className="ui small rounded image"
        src={tile_layer_image}
      />
      <div className={classes.name}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
      </div>
      <p>{formatted_quantity}</p>
      <p>{formatted_total_price}</p>
    </Segment>
  );
};

export default OrderSummaryItem;
