import { useState } from "react";
import PropTypes from "prop-types";


// Crear contexto
import { createContext } from "react";

export const FiltersContext = createContext();

// Crear el proveedor para proveer el contexto
export function FiltersProvider({ children }) {
    const [filters, setFilters] = useState({
        category: "all",
        minPrice: 0
    });

    return (
        <FiltersContext.Provider value={{ filters, setFilters }}>
            {children}
        </FiltersContext.Provider>
    );
}

// Validación de las propiedades de 'children' para asegurarse de que sea un nodo React
FiltersProvider.propTypes = {
    children: PropTypes.node.isRequired // 'children' debe ser un nodo React válido
};
