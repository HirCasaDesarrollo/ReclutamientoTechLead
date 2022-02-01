import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from '../components/home/Home';
import { LegendariesScreen } from '../components/legendaries/LegendariesScreen';
import { PokedexScreen } from '../components/pokedex/PokedexScreen';
import { Navbar } from '../components/ui/Navbar';

export const AppRouter = () => {
    return( 
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/ReclutamientoTechLead" element={<Home />} />
                <Route path="/pokedex" element={<PokedexScreen />} />
                <Route path="/legendaries" element={<LegendariesScreen />} />
            </Routes>
        </BrowserRouter>
    );
};
