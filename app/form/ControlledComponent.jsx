const commonStyle = {
  marginBottom: "10px",
  display: "flex",
  flexDirection: "column",
};

export const ControlledComponent = () => {
  return (
    <>
      <form>
        <div style={commonStyle}>
          <label htmlFor="name">name</label>
          <input style={{width:'100px'}} id="name" type="text" />
        </div>
        <div style={commonStyle}>
          <label htmlFor="color">favorite Color</label>
          <input style={{width:'100px'}} id="color" type="text" />
        </div>
        <div style={commonStyle}>
          <label htmlFor="essay">essay</label>
          <textarea id="essay" style={{ width: "500px", height: "150px" }} />
        </div>
      </form>
    </>
  );
};
