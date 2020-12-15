import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection
} from "streamlit-component-lib";
import React, { ReactNode } from "react"
import Cytoscape from "cytoscape"
import CytoscapeComponent from "react-cytoscapejs"
//import COSEBilkent from "cytoscape-cose-bilkent"

//Cytoscape.use(COSEBilkent)

interface State {
  numClicks: number
}

/**
 * This is a React-based component template. The `render()` function is called
 * automatically when your component should be re-rendered.
 */
class MyComponent extends StreamlitComponentBase<State> {
  public state = { numClicks: 0 }
  public render = (): ReactNode => {
    // Arguments that are passed to the plugin in Python are accessible
    // via `this.props.args`. Here, we access the "name" arg.
    const name = this.props.args["name"]
    const elements = [
       { data: { id: 'one', label: 'Node 1' }},
       { data: { id: 'two', label: 'Node 2' }},
       { data: { source: 'one', target: 'two', label: 'Edge from Node1 to Node2' } }
    ];
    //const layout = { name: 'cose-bilkent' };
    // Show a button and some text.
    // When the button is clicked, we'll increment our "numClicks" state
    // variable, and send its new value back to Streamlit, where it'll
    // be available to the Python program.
    return (
      <span>
        Hello, {name}! &nbsp;
        <button onClick={this.onClicked} disabled={this.props.disabled}>
          Click Me!
        </button>
        <CytoscapeComponent
          // @ts-ignore
          cy={(cy) => { this.cy = cy }}
          elements={elements}
          style={{ width: '100%', height: '800px', backgroundColor: '#22c6f0' }}
        />
        <h1>hello</h1>
      </span>
    )
  }

  /** Click handler for our "Click Me!" button. */
  private onClicked = (): void => {
    // Increment state.numClicks, and pass the new value back to
    // Streamlit via `Streamlit.setComponentValue`.
    this.setState(
      prevState => ({ numClicks: prevState.numClicks + 1 }),
      () => Streamlit.setComponentValue(this.state.numClicks)
    )
  }
}

// "withStreamlitConnection" is a wrapper function. It bootstraps the
// connection between your component and the Streamlit app, and handles
// passing arguments from Python -> Component.
//
// You don't need to edit withStreamlitConnection (but you're welcome to!).
export default withStreamlitConnection(MyComponent)
