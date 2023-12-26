const themeData = ["dark", "light"];

const Theme = (props: {
  onThemeChange: (event: string) => void;
}): JSX.Element => {
  return (
    <>
      {themeData.map((item: string, index: number): JSX.Element => {
        return (
          <li key={`${index}_${item}`}>
            <span
              className="dropdown-item"
              onClick={() => props.onThemeChange(item)}
            >
              {item}
            </span>
          </li>
        );
      })}{" "}
    </>
  );
};

export default Theme;
