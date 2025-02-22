export default function SquareButton(props) {
  let classes = "num";
  if (props.extraClass) {
    classes += " " + props.extraClass;
  }

  return (
    <>
      <span className={classes}>
        <i>{props.text}</i>
      </span>
    </>
  );
}
