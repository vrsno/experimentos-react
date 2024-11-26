import { useId, useState } from "react"
import "./Filters.css"
import PropTypes from "prop-types"

export function Filters({ onChange }){
    const [minPrice, setPrice] = useState(0)
    const minPriceFilteredId = useId()
    const categotyFilteredId = useId()

    const handleChangeMinPrice = (e)=>{
        setPrice(e.target.value)
        onChange(prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e)=>{
        onChange(prevState =>({
            ...prevState,
            category: e.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
            <label htmlFor={minPriceFilteredId}>Precio a partir de:</label>
            <input type="range"
                id={minPriceFilteredId}
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor={categotyFilteredId}>category:</label>
                <select id={categotyFilteredId} onChange={handleChangeCategory}>
                    <option value="all">Todas</option>
                    <option value="home-decoration">decoraciones</option>
                    <option value="smartphones">Celulares</option>
                </select>
            </div>
        </section>
    )
}

Filters.propTypes = {
    onChange: PropTypes.func.isRequired,
}
