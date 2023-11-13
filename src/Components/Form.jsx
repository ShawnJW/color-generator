import { useState } from "react";

const Form = ({addColor}) => {
    // Set up color state value.
    // It will be used to store the color value.
    const [ color, setColor ] = useState( "" );
    // Set up handleChange function to update the color state value.
    // It will be used in input element.
    const handleChange = ( event ) => {
        // Get the value of input element.
        const color = event.target.value;
        // Update the color state value.
        setColor( color );
    };
    // Create a function to handle form submission.
    // It will be used in form element.
    const handleSubmit = ( event ) => {
        // Prevent default behavior of form submission.
        event.preventDefault();
        // Add the Color to the ColorList component.
        addColor( color );

    };
    return (
        <section className='container'>
            <h4>Color Palette Generator</h4>
            <form className='color-form' onSubmit={ handleSubmit }>
                <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
                <input
                    type="text" name={ color }
                    placeholder="#fff"
                    value={color}
                    onChange={ ( e ) => setColor(e.target.value) } />
                <button
                    className='btn'
                    type='submit'
                    style={{background: color}}>Get Palette</button>
            </form>
        </section>
    );
}

export default Form;