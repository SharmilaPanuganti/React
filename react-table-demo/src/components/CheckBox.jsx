import React from "react";

export const Checkbox = React.forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultref = React.useRef();
  const resolvedRef = ref || defaultref;

  React.useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  return (
    <>
      <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
  );
});
