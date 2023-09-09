export default function FButton({ children, bgColor, textColor }) {
  const style = { backgroundColor: bgColor, color: textColor };

  return (
    <>
      <button style={style}>
        {/* <h3>yes</h3> */}
        {children}
      </button>
    </>
  );
}
