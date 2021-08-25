import MovieDetailPanel from "./MovieDetailPanel";

//show
//onClose
//children
export const Modal = ({show, onClose, children})=>{
    console.log(children);

    if(show){
        return(
            <div className="modal_container">
                <button onClick={onClose}>x</button>

                {/* <MovieDetailPanel/> */}
                {children}
            </div>
        )
    }

    return null;
}

export default Modal;