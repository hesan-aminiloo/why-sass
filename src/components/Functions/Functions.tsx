import clsx from "clsx";
import styles from "./Functions.module.scss";

export const Functions = () => {
  return (
    <div className="container">
      <p>We use a function to convert colors from HEX to RGB</p>
      <div className={styles["boxes"]}>
        <div
          className={clsx(styles["boxes__box"], styles["boxes__box--blue"])}
        />
        <div
          className={clsx(styles["boxes__box"], styles["boxes__box--red"])}
        />
        <div
          className={clsx(styles["boxes__box"], styles["boxes__box--green"])}
        />
      </div>
    </div>
  );
};
