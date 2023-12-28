import clsx from "clsx";

import styles from "./LoopsAndMixins.module.scss";

const badgeColors = ["primary", "secondary", "warning", "error", "success"];

export const LoopsAndMixins = () => {
  return (
    <div>
      <p>Yes! loops give you superpowers</p>
      {badgeColors.map((badgeColor) => (
        <div
          key={badgeColor}
          className={clsx(styles["badge"], styles[`badge--${badgeColor}`])}
        />
      ))}
    </div>
  );
};
