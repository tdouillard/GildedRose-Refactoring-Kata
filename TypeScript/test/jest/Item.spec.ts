import { BASE_QUALITY_INCREMENT, LEGENDARY_ITEM_QUALITY, MAX_QUALITY, MIN_QUALITY, QUALITY_INCREMENT_FIRST_THRESHOLD, QUALITY_INCREMENT_SECOND_THRESHOLD } from "@/constants";
import { CheeseItem } from "@/core/CustomItems/CheeseItem.model";
import { ConjuredItem } from "@/core/CustomItems/ConjuredItem.model";
import { ForcedExpiracyItem } from "@/core/CustomItems/ForcedExpiracyItem.model";
import { LegendaryItem } from "@/core/CustomItems/LegendaryItem.model";
import { UsableItem } from "@/core/UsableItem.model";


describe('property verification', () => {
    let item: UsableItem;
    beforeEach(() => {
        item = new UsableItem('Test Item', 5, 5);
        item.dailyUpdate();
    });
    describe('sellIn', () => {
        it(`should decrease sellIn by ${BASE_QUALITY_INCREMENT} each day`, () => {
            expect(item.sellIn).toBe(4);
        });
    });

    describe('quality', () => {
        it(`should decrease quality by ${BASE_QUALITY_INCREMENT} each day`, () => {
            expect(item.quality).toBe(4);
        });
        it(`should be equal or less than ${MAX_QUALITY} quality value`, () => {
            const specificItem = new UsableItem('Specific Item', 5, 55);
            expect(specificItem.quality).toBeLessThanOrEqual(MAX_QUALITY);
        });
        it('should be positive quality', () => {
            item.dailyUpdate();
            expect(item.quality).toBeGreaterThanOrEqual(MIN_QUALITY);
        });
        it('should degrade twice as fast after sell by date', () => {
            item.sellIn = MIN_QUALITY;
            item.quality = 10;
            item.dailyUpdate();
            expect(item.quality).toBe(8);
        });
    });
});
describe('items specificity', () => {
    let customItem: UsableItem;
    describe('CheeseItem', () => {
        it(`should increase quality by ${BASE_QUALITY_INCREMENT} each day`, () => {
            const customItem = new CheeseItem('Aged Brie', 2, 2);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(3);
        });
    });

    describe('LegendaryItem', () => {
        beforeAll(() => {
            customItem = new LegendaryItem('Sulfuras', 5, LEGENDARY_ITEM_QUALITY);
            customItem.dailyUpdate();
        });
        it(`should never have a fixed sellIn value equal to ${MIN_QUALITY}`, () => {
            expect(customItem.sellIn).toBe(MIN_QUALITY);
        });

        it('should never has to update in quality', () => {
            expect(customItem.quality).toBe(LEGENDARY_ITEM_QUALITY);
        });
    });

    describe('ForcedExpiracyItem.model', () => {
        it(`should increase quality by ${BASE_QUALITY_INCREMENT} each day`, () => {
            customItem = new ForcedExpiracyItem('Backstage passes', 15, 20);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(21);
        });
        it(`should increase quality by ${QUALITY_INCREMENT_FIRST_THRESHOLD} when there are 10 days or less`, () => {
            const customItem = new ForcedExpiracyItem('Backstage passes', QUALITY_INCREMENT_FIRST_THRESHOLD + 1, 20);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(22);
        });
        it(`should increase quality by ${QUALITY_INCREMENT_SECOND_THRESHOLD} when there are 5 days or less`, () => {
            const customItem = new ForcedExpiracyItem('Backstage passes', QUALITY_INCREMENT_SECOND_THRESHOLD + 1, 20);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(23);
        });
        it(`should drop quality to ${MIN_QUALITY} after sellin reach ${MIN_QUALITY}`, () => {
            const customItem = new ForcedExpiracyItem('Backstage passes', MIN_QUALITY, 20);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(MIN_QUALITY);
        });
    });

    describe('Conjured items', () => {
        it('should degrade in quality twice as fast as normal items each day', () => {
            customItem = new ConjuredItem('Conjured Item', 5, 6);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(4);
            customItem = new ConjuredItem('Conjured Item', MIN_QUALITY, 6);
            customItem.dailyUpdate();
            expect(customItem.quality).toBe(2);
        });
    });
});