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

    increaseQualityByOne(n){
        this.items[n].quality = this.items[n].quality + 1;
    }

    decreaseSellInByOne(n){
        this.items[n].sellIn = this.items[n].sellIn - 1;
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            const itemType = this.items[i].name;
            const sulfuras = 'Sulfuras, Hand of Ragnaros';
            const agedBrie = 'Aged Brie';
            const backstagePasses = 'Backstage passes to a TAFKAL80ETC concert';
            const quality = this.items[i].quality
            //SULFURAS
            if (itemType === sulfuras) { continue; }
            //AGED BRIE
            if (itemType === agedBrie) {
                if (this.items[i].quality < 50) {
                    this.increaseQualityByOne(i);
                    if (this.items[i].sellIn <= 0 && this.items[i].quality < 50) {
                        this.increaseQualityByOne(i);
                    }
                }
            }
            //BACKSTAGE PASSES
            if (itemType === backstagePasses) {
                if (this.items[i].quality < 50 && this.items[i].sellIn >= 0) {
                    this.increaseQualityByOne(i);
                    if (this.items[i].quality < 50 && this.items[i].sellIn < 11) {
                        this.increaseQualityByOne(i);
                        if (this.items[i].quality < 50 && this.items[i].sellIn < 6) {
                            this.increaseQualityByOne(i);
                        }
                    }
                } else if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                }
            }
            //MISC ITEMS
            if (itemType !== backstagePasses && itemType !== agedBrie && itemType !== sulfuras) {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1;
                    if (this.items[i].sellIn <= 0 && this.items[i].quality > 0) {
                        this.items[i].quality = this.items[i].quality - 1; 
                    }
                } 
            }
            this.decreaseSellInByOne(i);
        }
        return this.items;
    }
}