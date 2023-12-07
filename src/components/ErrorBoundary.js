import React, { useState, useEffect } from "react";

function ErrorBoundary (props) {

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      setHasError(true);
    }
  }, [hasError])

  return(
    hasError ? <h1>Oops. That is not good</h1> : props.children
  )
}

export default ErrorBoundary;