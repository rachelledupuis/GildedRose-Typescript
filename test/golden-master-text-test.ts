import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item('Item 8', 1, 1),
];

const gildedRose = new GildedRose(items)
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();


console.log(gildedRose.items);