import { useAppContext } from "@/context/AppContext";


export function Header(){
  const { state } = useAppContext();
  return (
    <>
      <header className="flex justify-center gap-6" style={{ background: `${state.venue?.webSettings.navBackgroundColour}` }}>
        <div style={{ color: `${state.venue?.webSettings.backgroundColour}` }}>MENU</div>
        <div style={{ color: `${state.venue?.webSettings.backgroundColour}` }}>ENTRAR</div>
        <div style={{ color: `${state.venue?.webSettings.backgroundColour}` }}>CONTATO</div>
      </header> 
      <img 
        className="h-auto w-full" 
        src={`${state.venue?.webSettings.bannerImage}`} 
        alt=""
      />
    </>
  )
}