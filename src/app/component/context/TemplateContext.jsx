'use client';

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { ButtonConsumer } from "./ButtonContext";

const TemplateContext = createContext();

export const TemplateConsumer = () => useContext(TemplateContext);

export const TemplateProvider = ({ children }) => {
    const[template, setTemplate] = useState([]);
    const { setActive } = ButtonConsumer();

    const fetchTemplate = async () => {
        try {
            const response = await axios.get("http://localhost:8080/template/all");
            setTemplate(response.data);
        } catch (error) {
            console.error("Failed : "+error);
        }
    }

    const updateTag = async (id) => {
        const encodedKey = encodeURIComponent(id);
        const tag = await axios.get(`http://localhost:8081/dom/search/nodeByEntry/tag?dataKey=${encodedKey}`);
        console.log("Tag Name : "+tag.data);
        setActive(tag.data);
    }

    return(
        <TemplateContext.Provider value={{template, setTemplate, fetchTemplate, updateTag}}>
            {children}
        </TemplateContext.Provider>
    )
}
