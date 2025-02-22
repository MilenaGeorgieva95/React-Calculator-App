export default function Screen(props) {
  return (
    <input
      type="text"
      className="value"
      readOnly
      name="txt"
      value={props.value}
    />
  );
}
