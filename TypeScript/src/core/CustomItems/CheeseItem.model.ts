import { UsableItem } from "../UsableItem.model";

export class CheeseItem extends UsableItem {

    dailyUpdate(): void {
        this.decrementSellIn();
        this.incrementQuality();
    }
}