import React from "react";
import { IconList } from "../atoms/IconList";
import { IconMaskAnimated } from "../atoms/IconMaskAnimated";

export const DasBrauchtIhrIcons = () => {
  return (
    <IconList
      icons={[
        {
          src: <IconMaskAnimated />,
          label: "Mundschutz",
        },
        {
          src: "img/icons/scroll-solid.svg",
          label: "Zettel",
        },
        {
          src: "img/icons/pen-solid.svg",
          label: "Stift",
        },
        {
          src: "img/icons/mobile-alt-solid.svg",
          label: "Smartphone",
        },
      ]}
    />
  );
};
