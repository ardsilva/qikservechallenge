import { useEffect, useState } from "react";
import axios from 'axios';
import { Sections, Venue } from "./types";
import { Header } from "@/components/Header";
// import { SearchBar } from "@/components/SearchBar";
// import { Cart } from "@/components/Cart";
// import { Menu } from "@/components/Menu";
import { useAppContext } from "@/context/AppContext";
// import { Card, CardContent } from "./components/ui/card";
import Component from "./components/Component";

export function App() {
  const [loadingMenu, setLoadingMenu] = useState<boolean>(true);
  const [loadingVenue, setLoadingVenue] = useState<boolean>(true);
  // const [search, setSearch] = useState('');
  // const [cart, setCart] = useState<Items[]>([]);
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
            //Atualiza o estado global com os dados do menu
            dispatch({ type: "SET_VENUE", payload: response.data })
            // setVenue(response.data);
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
    // <>
    //   <Header venue={venue} />
    //   <div className="container mx-4 px-4">
    //     <SearchBar setSearch={setSearch} search={search} />
    //     <div className="flex gap-4 justify-between items-start">
    //       <Card className="w-full">
    //         <CardContent>
    //           <Menu menu={menu} search={search} venue={venue} setCart={setCart}/>
    //         </CardContent>
    //       </Card>
    //       <Card className="w-auto">
    //         <CardContent>
    //           <Cart cart={cart} setCart={setCart}/>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </>
    <>
      <Header />
      <Component />
    </>
  )
}

