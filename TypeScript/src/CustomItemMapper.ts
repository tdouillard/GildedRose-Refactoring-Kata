import { CheeseItem } from "./core/CustomItems/CheeseItem.model";
import { ConjuredItem } from "./core/CustomItems/ConjuredItem.model";
import { ForcedExpiracyItem } from "./core/CustomItems/ForcedExpiracyItem.model";
import { LegendaryItem } from "./core/CustomItems/LegendaryItem.model";
import { Item } from "./core/Item.model";
import { UsableItem } from "./core/UsableItem.model";


export const CustomInstanceMapper = (item: Item) => {
    switch (item.name) {
        case "Aged Brie":
            return new CheeseItem(item);
        case "Sulfuras, Hand of Ragnaros":
            return new LegendaryItem(item);
        case "Backstage passes to a TAFKAL80ETC concert":
            return new ForcedExpiracyItem(item);
        case "Conjured Mana Cake":
            return new ConjuredItem(item);
        default:
            return new UsableItem(item);
    }
};
