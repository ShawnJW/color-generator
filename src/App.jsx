import Form from "./Components/Form";
import ColorList from "./Components/ColorList";
import Values from "values.js";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const App = () => {
    const [ colors, setColors ] = useState( new Values("#f15025").all(10) );
    const addColor = ( color ) => {
        try {
            const newColors = new Values( color ).all( 10 );
            setColors( newColors );
        } catch ( error ) {
            toast.error( error.message, { position: "top-center" } );
        }
    }
  return (
      <main>
        <h1>Color Palette Generator</h1>
        <Form addColor={addColor}/>
        <ColorList colors={colors}/>
          <ToastContainer position='top-center' />
      </main>
  );
};
export default App;
