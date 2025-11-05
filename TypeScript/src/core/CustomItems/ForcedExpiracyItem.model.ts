import { BASE_QUALITY_INCREMENT, FIRST_THRESHOLD_DAYS, QUALITY_INCREMENT_FIRST_THRESHOLD, QUALITY_INCREMENT_SECOND_THRESHOLD, SECOND_THRESHOLD_DAYS } from "@/constants";
import { UsableItem } from "../UsableItem.model";

export class ForcedExpiracyItem extends UsableItem {

    getQualityIncrement(): number {
        // Increase quality based on sellIn thresholds
        if (this.sellIn <= SECOND_THRESHOLD_DAYS) {
            return QUALITY_INCREMENT_SECOND_THRESHOLD;
        } else if (this.sellIn <= FIRST_THRESHOLD_DAYS) {
            return QUALITY_INCREMENT_FIRST_THRESHOLD;
        }
        return BASE_QUALITY_INCREMENT;
    }

    dailyUpdate(): void {
        this.decrementSellIn();
        this.isExpired() ? this.resetQuality() : this.incrementQuality();
    }
}
