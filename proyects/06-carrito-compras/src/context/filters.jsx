import { createContext } from "react";
import PropTypes from "prop-types";
//crear contexto
export const FiltersContext = createContext()

// crear provider para proveer

export function FiltersProvider({children}){
    return (
        <FiltersContext.Provider value={{
            category: "all",
            minPrice: 0
        }} >
            {children}
        </FiltersContext.Provider>
    )
}

FiltersProvider.propTypes = {
    children: PropTypes.node.isRequired,  // 'children' debe ser un nodo React, que puede ser cualquier cosa que React pueda renderizar
};