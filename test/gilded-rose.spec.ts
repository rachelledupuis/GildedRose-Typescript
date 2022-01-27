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
            new Item('Item5', -1, 4),
            new Item('Item6', -1, 10),
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
            new Item('Item5', -4, 0),
            new Item('Item6', -4, 4),
            new Item('Aged Brie', -2, 15),
            new Item('Aged Brie', -1, 24),
            new Item('Aged Brie', -3, 16),
            new Item('Aged Brie', 2, 33),
            new Item('Aged Brie', -4, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 2, 13),
            new Item('Backstage passes to a TAFKAL80ETC concert', -3, 0),
            new Item('Backstage passes to a TAFKAL80ETC concert', 1, 29),
            new Item('Backstage passes to a TAFKAL80ETC concert', 3, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 12, 33),
            new Item('Backstage passes to a TAFKAL80ETC concert', 12, 50),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', 10, 80)
          ]);

        expect(gildedRose).to.deep.equal(gildedRoseOutput);
    });

    it('Sulfuras values should not change', function() {
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

    it('brie should increase quality by 1 if sellIn > 0', function() {
        const items: Array<Item> = [
            new Item('Aged Brie', 5, 5),
            new Item('Aged Brie', 1, 10),
        ];
        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality();
        const gildedRoseOutput = new GildedRose([
            new Item('Aged Brie', 4, 6),
            new Item('Aged Brie', 0, 11),
        ]);
        expect(gildedRose).to.deep.equal(gildedRoseOutput);
    });

    it('brie should increase quality by 2 if sellIn <= 0', function() {
        const items: Array<Item> = [
            new Item('Aged Brie', 0, 5),
            new Item('Aged Brie', 0, 10),
            new Item('Aged Brie', -5, 40)
        ];
        const gildedRose = new GildedRose(items)
        gildedRose.updateQuality();
        const gildedRoseOutput = new GildedRose([
            new Item('Aged Brie', -1, 7),
            new Item('Aged Brie', -1, 12),
            new Item('Aged Brie', -6, 42),
        ]);
        expect(gildedRose).to.deep.equal(gildedRoseOutput);
    });

})