export default function test({ icon, value, color, height, fontSize, background, border, radius, padding, position, bottom, right, marginTop, marginBottom, width, weight, topIcon, onClick }) {
  return (
    
  <button
  onClick={onClick} style={{ width: width ? width : "200px",
  height: height ? height : "43px", color: color, fontWeight:weight, fontSize: fontSize, background: background, border: border, borderRadius: radius, padding: padding, position: position, bottom: bottom, right:right,marginTop: marginTop, marginBottom: marginBottom}}>
    {icon ? (
        <>
          <div className="row">
            <div className="col-10">{value}</div>
            <div className="col-2">
              <img
                style={{ position: "absolute", right: "20px", top: topIcon ? topIcon : "6px" }}
                src={icon}
              />
            </div>
          </div>
        </>
      ) : (
        <span>{value}</span>
      )}
  </button>
  );
}