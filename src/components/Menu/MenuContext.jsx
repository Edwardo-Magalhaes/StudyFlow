// MenuContext.jsx
import React, { createContext, useState } from 'react';

// Criação do contexto
export const MenuContext = createContext();

// Provedor do contexto
export const MenuProvider = ({ children }) => {
    const [isExpanded, setIsExpanded] = useState(true); // Estado para controlar o menu

    const toggleMenu = () => {
        setIsExpanded(!isExpanded); // Alterna entre expandido e encolhido
    };

    return (
        <MenuContext.Provider value={{ isExpanded, toggleMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
