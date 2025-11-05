import { CheeseItem } from "./core/CustomItems/CheeseItem.model";
import { ConjuredItem } from "./core/CustomItems/ConjuredItem.model";
import { ForcedExpiracyItem } from "./core/CustomItems/ForcedExpiracyItem.model";
import { LegendaryItem } from "./core/CustomItems/LegendaryItem.model";
import { UsableItem } from "./core/UsableItem.model";


export const CustomInstanceMapper = (name: string, sellIn: number, quality: number) => {
    switch (name) {
        case "Aged Brie":
            return new CheeseItem(name, sellIn, quality);
        case "Sulfuras, Hand of Ragnaros":
            return new LegendaryItem(name, sellIn, quality);
        case "Backstage passes to a TAFKAL80ETC concert":
            return new ForcedExpiracyItem(name, sellIn, quality);
        case "Conjured Mana Cake":
            return new ConjuredItem(name, sellIn, quality);
        default:
            return new UsableItem(name, sellIn, quality);
    }
};
