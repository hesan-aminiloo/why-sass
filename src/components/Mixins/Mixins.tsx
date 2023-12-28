import styles from "./Mixins.module.scss";

export const Mixins = () => {
  const list = new Array(100).fill("item");

  return (
    <div>
      <p>With mixins, you don't have to repeat yourself, SCROLL here</p>
      <div className={styles["long-list"]}>
        {list.map((_, i) => (
          <div className={styles["long-list__item"]} key={i} />
        ))}
      </div>
    </div>
  );
};
