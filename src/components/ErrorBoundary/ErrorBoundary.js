function ErrorBoundary (props) {

  let { error } = props;

  return(
    error ? <h1>Oops. That is not good</h1> : props.children
  )
}

export default ErrorBoundary;