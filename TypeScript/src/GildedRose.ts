import { UsableItem } from "@/core/UsableItem.model";
import { Item } from "./core/Item.model";
import { CustomInstanceMapper } from "./CustomItemMapper";

export class GildedRose {
  items: Array<Item>;
  customItemsMap: Array<UsableItem> = [];

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.customItemsMap = items.map(item => CustomInstanceMapper(item.name, item.sellIn, item.quality));
  }

  updateQuality(): void {
    this.customItemsMap.forEach((item) => {
      item.dailyUpdate();
    });

  }
}
