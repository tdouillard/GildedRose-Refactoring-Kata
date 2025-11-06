import { LEGENDARY_ITEM_QUALITY, MIN_QUALITY } from "@/Constants";
import { UsableItem } from "../UsableItem.model";
import { Item } from "../Item.model";

export class LegendaryItem extends UsableItem {
    constructor(item: Item) {
        super(item);
        this.sellIn = Math.min(this.sellIn, MIN_QUALITY); // Legendary items do not have to be sold
        this.quality = LEGENDARY_ITEM_QUALITY; // Legendary items have a fixed quality
    }
    dailyUpdate(): void {
        // Legendary items do not change in quality or sellIn
    }
}