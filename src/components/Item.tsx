import { Items, Venue } from "@/types";

interface ItemProps {
  item: Items;
  venue: Venue | undefined;
}
export function Item({ item, venue }: ItemProps) {
  return (
    <div key={item.id} className="flex gap-4">
      <div className="flex flex-col">
        <div className="text-lg font-semibold">{item.name}</div>
        <p className="text-sm text-muted-foreground">{item.description}</p>
        {item.price > 0 && <small className="text-sm font-medium leading-none">{`${venue?.currency}${item.price.toFixed(2)}`}</small>}
      </div>
      <div>
        {item?.images && <img className="rounded-sm" src={item?.images?.[0].image} width={128} height={85} />}
      </div>
    </div>
  )
}