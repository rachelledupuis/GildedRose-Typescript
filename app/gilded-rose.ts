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
            //SULFURAS
            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') { continue; }
            //AGED BRIE
            if (this.items[i].name === 'Aged Brie') {
                if (this.items[i].quality < 50) {
                    this.increaseQualityByOne(i);
                    if (this.items[i].sellIn <= 0 && this.items[i].quality < 50) {
                        this.increaseQualityByOne(i);
                    }
                }
            }
            //BACKSTAGE PASSES
            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
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
            if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
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