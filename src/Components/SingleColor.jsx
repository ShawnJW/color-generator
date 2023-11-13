import { toast } from "react-toastify";
const SingleColor = ( { index, color } ) => {
    const { weight, hex } = color;
    const saveToClipboard = async () => {
        if(navigator.clipboard) {
            try {
                await navigator.clipboard.writeText( hex );
                toast.success( `Copied ${ hex } to clipboard` );
            } catch (error) {
                toast.error( error.message, { position: "top-center" })
            }
        }
    }
    return (
        <article className={ index > 10 ? 'color color-light' : 'color' }
                 style={ { background: `#${ hex }` } }
                 onClick={ saveToClipboard }>
            <p className='percent-value'>{ weight }%</p>
            <p className='color-value'>#{ hex }</p>
        </article>
    );
};

export default SingleColor;