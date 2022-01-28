export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

   /*  increaseQualityByOne(n){
        this.items[n].quality = this.items[n].quality + 1;
    }

    decreaseSellInByOne(n){
        this.items[n].sellIn = this.items[n].sellIn - 1;
    } */

    updateQuality() {
        this.items.forEach(function(item) {
            const itemType = item.name;
            const sulfuras = 'Sulfuras, Hand of Ragnaros';
            const agedBrie = 'Aged Brie';
            const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
            
            //SULFURAS
            if (itemType == sulfuras) { }
            //AGED BRIE
            if (itemType == agedBrie) {
                if (item.quality < 50) {
                    item.sellIn = item.sellIn + 1;
                    if (item.sellIn <= 0 && item.quality < 50) {
                        item.sellIn = item.sellIn + 1;
                    }
                }
            }
            //BACKSTAGE PASSES
            if (itemType == backstagePasses) {
                if (item.quality < 50 && item.sellIn >= 0) {
                    item.sellIn = item.sellIn + 1;
                    if (item.quality < 50 && item.sellIn < 11) {
                        item.sellIn = item.sellIn + 1;
                        if (item.quality < 50 && item.sellIn < 6) {
                            item.sellIn = item.sellIn + 1;
                        }
                    }
                } else if (item.sellIn < 0) {
                    item.quality = 0;
                }
            }
            //MISC ITEMS
            if (itemType !== backstagePasses && itemType !== agedBrie && itemType !== sulfuras) {
                if (item.quality > 0) {
                    item.quality = item.quality - 1;
                    if (item.sellIn <= 0 && item.quality > 0) {
                        item.quality = item.quality - 1; 
                    }
                } 
            }
            item.sellIn = item.sellIn - 1;
        })
        return this.items;
    }
}