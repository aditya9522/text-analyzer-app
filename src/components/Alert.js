import React from 'react'

function Alert(props) {
  const convertToUpperCase = (data) => {
    return data.charAt(0).toUpperCase() + data.slice(1);
  };

  return (
    <div style={{height:'50px'}}>
      {props.alert && <div className={`alert alert-${props.alert.type} show`} role="alert">
          {props.alert.type === 'success' ? '✔️ ':'⚠️ '}<strong>{convertToUpperCase(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert
