'use client';

import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PaneContext = createContext();

export const PaneConsumer = () => useContext(PaneContext);

export const PaneProvider = ({ children }) => {

    const [paneKeys , setPaneKeys] = useState([]);

    const showPaneKeys = async () => {
        const pane = await axios.get('https://template-red.df.r.appspot.com/pane/all');
        setPaneKeys(pane.data);
    }

    useEffect(() => {showPaneKeys();}, []);

    return(
        <PaneContext.Provider value={{paneKeys, setPaneKeys, showPaneKeys}}>
            {children}
        </PaneContext.Provider>
    )
}
