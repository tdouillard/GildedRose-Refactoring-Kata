import { UsableItem } from "../UsableItem.model";

export class ConjuredItem extends UsableItem {

    getQualityIncrement() {
        return super.getQualityIncrement() * 2;
    }
    dailyUpdate(): void {
        this.decrementSellIn();
        this.decrementQuality();
    }
}