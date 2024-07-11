import { useEffect, useState } from "react";
import axios from 'axios';
import { Sections, Venue } from "./types";
import { Header } from "@/components/Header";
import { useAppContext } from "@/context/AppContext";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from '@/pages/Menu';
import Login from '@/pages/Login';
import Contact from '@/pages/Contact';

export function App() {
  const [loadingMenu, setLoadingMenu] = useState<boolean>(true);
  const [loadingVenue, setLoadingVenue] = useState<boolean>(true);
  const { dispatch } = useAppContext();

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        axios.get("api/challenge/menu")
          .then((response: { data: { sections: Sections[] }; }) => {
            //Atualiza o estado global com os dados do menu
            dispatch({ type: 'SET_MENU_ITEMS', payload: response.data.sections });
            // setMenu(response.data.sections);
          })
          .catch((error: string) => {
            console.error('Erro ao buscar dados:', error);
          });

      } catch (error) {
        console.error('Erro ao carregar dados do menu:', error);
      } finally {
        setLoadingMenu(false);
      }

    };

    fetchMenuData()

  }, [dispatch]);

  useEffect(() => {
    const fetchVenueData = async () => {
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
    };

    fetchVenueData()

  }, [dispatch]);

  if (loadingMenu || loadingVenue) {
    return <div>Carregando...</div>;
  }


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

