'use client';

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import { PaneConsumer } from "./PaneContext";
import { ButtonConsumer } from "./ButtonContext";

const HeroContext = createContext();

export const HeroConsumer = () => useContext(HeroContext);

export const HeroProvider = ({ children }) => {
    const[heroKey, setHeroKey] = useState();
    const[heroType, setHeroType] = useState();
    const[hero, setHero] = useState([]);
    const[contain, setContain] = useState(false);
    const[cover, setCover] = useState(false);

    const { setActive } = ButtonConsumer();

    const { setPaneKeys } = PaneConsumer();

    const updateHeroKey = (id) => {
        setHeroKey(id);
    }

    const updateContain = () => {
        setActive("Contain");
        setContain(!contain);
    }

    const updateCover = () => {
        setActive("Cover");
        setCover(!cover);
    }

    const addHero = async (key) => {
        try {
            const response = await axios.post(`http://localhost:8080/one-hero/create?tag=${key}`);
            console.log(response.data);
            const pane = await axios.get('http://localhost:8081/dom/search/all');
            setPaneKeys(pane.data);
            const newHero = {
                dataKey : response.data
            }
            setHero([...hero, newHero])
        } catch (error) {
            console.log(error);
        }
    }

    // Function to update navbar details
    const updateHero = async (updatedHero) => {
        setHero((prevHero) =>
            // updating as per the navKey
            prevHero.map((hero) => (hero.dataKey === updatedHero.dataKey ? updatedHero : hero))
        );
    };

    const deleteHero = async () => {
        try {
            const encodedKey = encodeURIComponent(heroKey);
            const url = `http://localhost:8080/one-hero/delete?dataKey=${encodedKey}`;
            await axios.delete(url);
            const pane = await axios.get('http://localhost:8081/dom/search/all');
            setPaneKeys(pane.data);
        } catch (error) {
            console.error("Error deleting navbar:", error.response || error);
        }
    };

    const updateHeroType = (type) => {
        setHeroType(type);
    }

    const addTwoHeroSection = async(key) => {
        try {
            const response = await axios.post(`http://localhost:8080/two-hero/create?tag=${key}`);
            console.log(response.data);
            const pane = await axios.get('http://localhost:8081/dom/search/all');
            setPaneKeys(pane.data);
            const newHero = {
                dataKey : response.data
            }
            setHero([...hero, newHero])
        } catch (error) {
            console.log(error);
        }
    }

    const deleteTwoHeroSection = async () => {
        try {
            const encodedKey = encodeURIComponent(heroKey);
            const url = `http://localhost:8080/delete?dataKey=${encodedKey}`;
            await axios.delete(url);
            const pane = await axios.get('http://localhost:8081/dom/search/all');
            setPaneKeys(pane.data);
        } catch (error) {
            console.error("Error deleting navbar :", error.response || error);
        }
    };

    return(
        <HeroContext.Provider value={{heroKey, setHeroKey, updateHeroKey, heroType, setHeroType, updateHeroType, hero, setHero, addHero, updateHero, contain, setContain, deleteHero, updateContain, cover, setCover, updateCover, addTwoHeroSection, deleteTwoHeroSection}}>
            {children}
        </HeroContext.Provider>
    )
}
