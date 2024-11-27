import { useId } from "react"
import "./Filters.css"
import { useFilters } from "../hooks/useFilters"


export function Filters(){
    const {filters, setFilters} = useFilters()
    
    const minPriceFilteredId = useId()
    const categotyFilteredId = useId()

    const handleChangeMinPrice = (e)=>{
        
        setFilters(prevState =>({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e)=>{
        setFilters(prevState =>({
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
                value={filters.minPrice}
            />
            <span>${filters.minPrice}</span>
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


