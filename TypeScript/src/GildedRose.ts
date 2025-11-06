import { UsableItem } from "@/core/UsableItem.model";
import { Item } from "./core/Item.model";
import { CustomInstanceMapper } from "./CustomItemMapper";

export class GildedRose {
  items: Array<Item>;
  customItemsMap: Array<UsableItem> = [];

  constructor(items = [] as Array<Item>) {
    this.items = items;
    this.customItemsMap = this.items.map((item) => CustomInstanceMapper(item));
  }

  updateQuality(): void {
    this.customItemsMap.forEach((item) => {
      item.dailyUpdate();
    });

  }
}
