import PropTypes from "prop-types"
import "./Footer.css"

export function Footer( { filters }){
    return (
        <footer className="footer">
            {/* <h4>Prueba tecnica de React * -</h4>
            <span>@miguelito</span>
            <h5>Shooping Cart con useContent & reduceContent</h5> */}
            {
                JSON.stringify(filters, null, 2)
            }
        </footer>
    )
}

Footer.propTypes = {
    filters: PropTypes.func.isRequired,
}