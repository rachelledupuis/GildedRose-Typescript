import 'chai/register-should';
import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should match the golden master', function() {
        const items: Array<Item> = [
            new Item('Item1', 5, 2),
            new Item('Item2', 1, 10),
            new Item('Item3', 2, 10),
            new Item('Item4', 4, 20),
            new Item('Aged Brie', 1, 10),
            new Item('Aged Brie', 2, 20),
            new Item('Aged Brie', 0, 10),
            new Item('Aged Brie', 5, 30),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 4),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 10),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 80)
        ];
        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const gildedRoseOutput = new GildedRose([
            new Item('Item1', 2, 0),
            new Item('Item2', -2, 5),
            new Item('Item3', -1, 6),
            new Item('Item4', 1, 17),
            new Item('Aged Brie', -2, 15),
            new Item('Aged Brie', -1, 24),
            new Item('Aged Brie', -3, 16),
            new Item('Aged Brie', 2, 33),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13),
            new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 29),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 80)
          ]);

        expect(gildedRose).to.deep.equal(gildedRoseOutput);
    });

    it('should not change the values of Sulfuras', function() {
        const items: Array<Item> = [
            new Item('Sulfuras, Hand of Ragnaros', 5, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 50),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80)
        ];
        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        gildedRose.updateQuality();
        const gildedRoseOutput = new GildedRose([
            new Item('Sulfuras, Hand of Ragnaros', 5, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 50),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80)
        ]);
        expect(gildedRose).to.deep.equal(gildedRoseOutput);
    });

})