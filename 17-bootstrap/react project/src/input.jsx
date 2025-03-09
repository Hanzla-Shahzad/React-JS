export default function Inputs(props) {
  return (
    <>
      <input
        type="text"
        placeholder="Enter items as you like"
        onKeyDown={props.handleInput}
      />
    </>
  );
}
