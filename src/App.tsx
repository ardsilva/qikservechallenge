import { useEffect, useMemo, useState } from "react";
import axios from 'axios';
import { Sections, Venue } from "./types";
import { Header } from "@/components/Header";
import { useAppContext } from "@/context/AppContext";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Menu from '@/pages/Menu';
import Contact from '@/pages/Contact';

export function App() {
  const [loadingMenu, setLoadingMenu] = useState<boolean>(true);
  const [loadingVenue, setLoadingVenue] = useState<boolean>(true);
  const { dispatch } = useAppContext();

  const fetchMenuData = useMemo(() => async () => {
    try {
      axios.get("api/challenge/menu")
        .then((response: { data: { sections: Sections[] }; }) => {
          dispatch({ type: 'SET_MENU_ITEMS', payload: response.data.sections });
        })
        .catch((error: string) => {
          console.error('Erro ao buscar dados:', error);
        });
    } catch (error) {
      console.error('Erro ao carregar dados do menu:', error);
    } finally {
      setLoadingMenu(false);
    }
  }, [dispatch])

  const fetchVenueData = useMemo(() => async () => {
    try {
      axios.get("api/challenge/venue/9")
        .then((response: { data: Venue; }) => {
          dispatch({ type: "SET_VENUE", payload: response.data })
        })
        .catch((error: string) => {
          console.error('Erro ao buscar dados:', error);
        });
    } catch (error) {
      console.error('Erro ao carregar dados do menu:', error);
    }
    finally {
      setLoadingVenue(false)
    }
  }, [dispatch])

  useEffect(() => {
    fetchMenuData()
    fetchVenueData()
  }, [fetchMenuData, fetchVenueData])

  if (loadingMenu || loadingVenue) {
    return <div>Carregando...</div>;
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Navigate to="/"/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

