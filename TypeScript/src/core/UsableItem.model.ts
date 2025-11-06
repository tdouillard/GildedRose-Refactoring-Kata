import { BASE_QUALITY_INCREMENT, MAX_QUALITY, MIN_QUALITY } from "@/Constants";
import { Item } from "./Item.model";
import { UsableItemInterface } from "./UsableItem.interface";


export class UsableItem implements UsableItemInterface {
    protected item: Item
    constructor(item: Item) {
        this.item = item;
        this.item.quality = Math.min(MAX_QUALITY, Math.max(MIN_QUALITY, item.quality));
    }

    get sellIn(): number {
        return this.item.sellIn;
    }

    get quality(): number {
        return this.item.quality;
    }

    set quality(value: number) {
        this.item.quality = value;

    }

    set sellIn(value: number) {
        this.item.sellIn = value;
    }

    getQualityIncrement(): number {
        return this.item.sellIn < 0 ? BASE_QUALITY_INCREMENT * 2 : BASE_QUALITY_INCREMENT;
    }

    dailyUpdate(): void {
        this.decrementSellIn();
        this.decrementQuality();
    }

    incrementQuality(): void {
        this.item.quality = Math.min(MAX_QUALITY, this.item.quality + this.getQualityIncrement());
    }

    decrementQuality(): void {
        this.item.quality = Math.max(MIN_QUALITY, this.item.quality - this.getQualityIncrement());
    }

    decrementSellIn(): void {
        this.item.sellIn--;
    }

    isExpired(): boolean {
        return this.item.sellIn < 0;
    }

    resetQuality(): void {
        this.item.quality = 0;
    }
}   
