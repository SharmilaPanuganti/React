let heading = {
  fontSize: "72px",
  color: "blue",
};
export const Inline = () => {
  return (
    <div>
      <h1 style={heading}>Inline</h1>
      <h1 className="error">hi im error</h1>
      {/* <h1 className={styles.success}>SUCCESS</h1> */}
    </div>
  );
};
