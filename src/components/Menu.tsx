import { Items, Sections, Venue } from "../types";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Item } from "./Item";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface MenuProps {
  menu: Sections[];
  search: string;
  venue: Venue | undefined;
  setCart: React.Dispatch<React.SetStateAction<Items[]>>;
}


function getFiltered(items: Items[], search: string) {
  return items.flat(Infinity).filter(it => it.name.includes(search));
}

function handleAddToBasket(item: Items, setCart: React.Dispatch<React.SetStateAction<Items[]>>) {
  setCart((oldArray => [...oldArray, item]));
}

export function Menu({ menu, search, venue, setCart }: MenuProps) {
  return (
    <div className="">
      <Carousel>
        <CarouselContent className="flex justify-start gap-4 p-4 text-center">
          {
            menu.map(element => (
              <div className="">
                <CarouselItem>
                  <Avatar>
                    <AvatarImage src={element.images[0].image} width={82} height={82} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </CarouselItem>
                <div>{element.name}</div>
              </div>
            ))
          }
        </CarouselContent>
      </Carousel>
      <Accordion type="single" collapsible>
        {
          menu.map(repo => (
            <AccordionItem value={String(repo.id)}>
              <AccordionTrigger className="scroll-m-20 text-2xl font-semibold">{repo.name}</AccordionTrigger>
              <div key={repo.id}>
                {getFiltered(repo.items, search).map((item) => (
                  item.modifiers ? (<Dialog>
                    <DialogTrigger asChild>
                      <Button asChild className="none">
                        <AccordionContent>
                          <Item item={item} venue={venue} />
                        </AccordionContent>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>Hello</DialogContent>
                  </Dialog>) : (
                    <Button variant={"outline"} asChild className="flex" onClick={() => handleAddToBasket(item, setCart)}>
                      <AccordionContent>
                        <Item item={item} venue={venue} />
                      </AccordionContent>
                    </Button>
                  )
                ))}
              </div>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}