import React from 'react'

class ErrorBoundary extends React.Component {
  state = {
    hasErrored: false
  }

  static getDerivedStateFromError(error){
    return { hasErrored: true }
  }

  componentDidCatch(error, info){
    console.log(error)
  }

  render(){
    if(this.state.hasErrored){
      return <div>Something went wrong with the network. Please connect to continue</div>
    }

    return this.props.children
  }
}

export default ErrorBoundary