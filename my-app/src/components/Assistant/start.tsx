
import Timer from './timer'


export default (props: { begin: Boolean }) => {

    return (
        //hour component
        <div>
            {
                props.begin && <Timer />
            }
        </div>

    )
}
