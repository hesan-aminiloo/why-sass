import { Colors } from "./colors";

import styles from "./JSExports.module.scss";

export const JSExports = () => {
  return (
    <div>
      <p>
        Used scss and css and JS to access these colors, kinda complicated but
        useful AF
      </p>
      <div className={styles["boxes"]}>
        <div
          className={styles["boxes__box"]}
          style={{
            backgroundColor: Colors.primaryColor,
          }}
        />
        <div
          className={styles["boxes__box"]}
          style={{
            backgroundColor: Colors.secondaryColor,
          }}
        />
      </div>
    </div>
  );
};
