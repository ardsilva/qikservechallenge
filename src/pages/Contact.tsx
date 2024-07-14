import { useAppContext } from "@/context/AppContext";

export default function Contact() {
  const { state } = useAppContext();
  const store = state?.venue;
  return (
    <div className="flex items-center flex-col p-10">
      <div className="text-lg font-extrabold">{store?.name}</div>
      <div className="text-base font-semibold">{store?.address1}</div>
      <div>{store?.postcode} - {store?.city} - {store?.country}</div>
    </div>
  );
}