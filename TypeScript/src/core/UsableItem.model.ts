import { BASE_QUALITY_INCREMENT, MAX_QUALITY, MIN_QUALITY } from "@/constants";
import { Item } from "./Item.model";
import { UsableItemInterface } from "./UsableItem.interface";


export class UsableItem extends Item implements UsableItemInterface {
    constructor(name: string, sellIn: number, quality: number) {
        super(name, sellIn, quality);
        // Ensure quality is within bounds 0 to 50
        this.quality = Math.min(MAX_QUALITY, Math.max(MIN_QUALITY, quality));
    }

    getQualityIncrement(): number {
        return this.sellIn <= 0 ? BASE_QUALITY_INCREMENT * 2 : BASE_QUALITY_INCREMENT;
    }

    dailyUpdate(): void {
        this.decrementSellIn();
        this.decrementQuality();
    }

    incrementQuality(): void {
        this.quality = Math.min(MAX_QUALITY, this.quality + this.getQualityIncrement());
    }

    decrementQuality(): void {
        this.quality = Math.max(MIN_QUALITY, this.quality - this.getQualityIncrement());
    }

    decrementSellIn(): void {
        this.sellIn--;
    }

    isExpired(): boolean {
        return this.sellIn <= 0;
    }

    resetQuality(): void {
        this.quality = 0;
    }
}   
