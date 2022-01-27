import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50),
];

const gildedRose = new GildedRose(items)
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();


console.log(gildedRose.items);