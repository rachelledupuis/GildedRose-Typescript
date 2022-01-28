import { Item, GildedRose } from '../app/gilded-rose';

const items: Array<Item> = [
    new Item('Item1', 5, 2),
            new Item('Item2', 1, 10),
            new Item('Item3', 2, 10),
            new Item('Item4', 4, 20),
            new Item('Item5', -1, 4),
            new Item('Item6', -1, 10),
            new Item('Item 7', 3, 10),
            new Item('Item 8', 1, 1),
            new Item('Aged Brie', 1, 10),
            new Item('Aged Brie', 2, 20),
            new Item('Aged Brie', 0, 10),
            new Item('Aged Brie', 5, 30),
            new Item('Aged Brie', -1, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 4),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 6, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 46),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 30),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 35),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 80)
];

const gildedRose = new GildedRose(items)
gildedRose.updateQuality();
gildedRose.updateQuality();
gildedRose.updateQuality();

console.log(gildedRose.items);