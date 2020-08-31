import React from 'react';

const InputForm = ({toBlob ,close, setFields, fields}) =>{
  //const [fields, setFields] = useState({'pieces':'', 'size':'', 'weight':'','stamp':''});

  const addText = () =>{
    setFields(fields);
    toBlob();
    close(false);
  }

  return(
    <div className="modal">
    
    <div className="form-container">
    <div className="close">
          <span onClick={() => close(false)}> X </span>
        </div>     
        <div className="form-field">
          <label> Pieces </label>
          <input type="text"  maxLength="8" value={fields.pieces} onChange={(e) => setFields ( {...fields,'pieces' : e.target.value }) }  />
        </div>
        <div className="form-field">
          <label> Size </label>
          <input type="text"  maxLength="15" value={fields.size} onChange={(e) => setFields ( {...fields,'size' :  e.target.value  }) }  />
        </div>
        <div className="form-field">
          <label> Weight </label>
          <input type="text"  maxLength="15" value={fields.weight} onChange={(e) => setFields ( {...fields,'weight' : e.target.value  }) } />
        </div>
        <div className="form-field">
          <label> Stamp </label>
          <input type="text"  maxLength="15" value={fields.stamp} onChange={(e) => setFields ( {...fields,'stamp' :  e.target.value }) }  />
        </div>
        <div className="form-field">
          <button className="btn-primary" onClick={addText}> add </button>
        </div>
    </div>
    </div>
  );
}
export default InputForm;