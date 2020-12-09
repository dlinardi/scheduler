import React from "react";
import classnames from "classnames";
import "components/DayListItem.scss";

export default function DayListItem(props) {

  const formatDays = (spots) => {
    if (spots > 1) {
      return `${spots} spots remaining`;
    } else if (spots === 1) {
      return `${spots} spot remaining`;
    } else {
      return `no spots remaining`;
    }
  }

  const dayClass = classnames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": (props.spots === 0)
  });

  return (
    <li className={dayClass} onClick={() => props.setDay(props.name)}>
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{formatDays(props.spots)}</h3>
    </li>
  );
};