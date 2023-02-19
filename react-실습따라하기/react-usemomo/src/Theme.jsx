import React from 'react';

export default React.forwardRef(function MyTheme(props, ref) {
  return (
    <div>
      <input ref={ref} disabled></input>
    </div>
  );
});
