import { LEGENDARY_ITEM_QUALITY, MIN_QUALITY } from "@/constants";
import { UsableItem } from "../UsableItem.model";

export class LegendaryItem extends UsableItem {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
        this.sellIn = Math.min(this.sellIn, MIN_QUALITY); // Legendary items do not have to be sold
        this.quality = LEGENDARY_ITEM_QUALITY; // Legendary items have a fixed quality
    }
    dailyUpdate(): void {
        // Legendary items do not change in quality or sellIn
    }
}