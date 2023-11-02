const Banner = ({
  width,
  height,
  title,
  icon,
  customClassIcon,
  customClassGrey,
  customClassBlack,
  customClassTitle,
}) => {
  const Icons = icon;
  return (
    <div>
      <div className={customClassGrey}>
        <div className={customClassBlack}>
          <Icons
            width={width}
            height={height}
            fill="white"
            className={customClassIcon}
          />
        </div>

        <p className={customClassTitle}>{title}</p>
      </div>
    </div>
  );
};

export default Banner;
