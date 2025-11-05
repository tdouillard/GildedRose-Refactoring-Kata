import { Item } from "./Item.model";


export interface UsableItemInterface extends Item {
    dailyUpdate(): void;
}
