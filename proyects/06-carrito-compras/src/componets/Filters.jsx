import { useState } from "react"
import "./Filters.css"
import PropTypes from "prop-types"

export function Filters({ onChange }){
    const [minPrice, setPrice] = useState(0)
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
            <label htmlFor="price">Precio a partir de:</label>
            <input type="range"
                id="price"
                min="0"
                max="1000"
                onChange={handleChangeMinPrice}
            />
            <span>${minPrice}</span>
            </div>
            <div>
                <label htmlFor="category">category:</label>
                <select id="category" onChange={handleChangeCategory}>
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
