import React from 'react';

export default function alert(props) {
  return (
    props.alert && <div>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <strong>{props.alert.message}</strong> :{props.alert.type}
 
</div>
    </div>
  );
}
