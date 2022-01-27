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

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
            //SULFURAS
            if (this.items[i].name === 'Sulfuras, Hand of Ragnaros') { continue; }
            //AGED BRIE
            if (this.items[i].name === 'Aged Brie') {
                if (this.items[i].quality < 50) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].sellIn <= 0 && this.items[i].quality < 50) {
                        this.items[i].quality = this.items[i].quality + 1;
                    }
                }
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
            //BACKSTAGE PASSES
            if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                if (this.items[i].quality < 50 && this.items[i].sellIn >= 0) {
                    this.items[i].quality = this.items[i].quality + 1;
                    if (this.items[i].quality < 50 && this.items[i].sellIn < 11) {
                        this.items[i].quality = this.items[i].quality + 1;
                        if (this.items[i].quality < 50 && this.items[i].sellIn < 6) {
                            this.items[i].quality = this.items[i].quality + 1;
                        }
                    }
                } else if (this.items[i].sellIn < 0) {
                    this.items[i].quality = 0;
                }
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }

            //MISC ITEMS
            if (this.items[i].name !== 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name !== 'Aged Brie' && this.items[i].name !== 'Sulfuras, Hand of Ragnaros') {
                if (this.items[i].quality > 0) {
                    this.items[i].quality = this.items[i].quality - 1;
                    if (this.items[i].sellIn <= 0 && this.items[i].quality > 0) {
                        this.items[i].quality = this.items[i].quality - 1; 
                    }
                }
                this.items[i].sellIn = this.items[i].sellIn - 1;
            }
    }

        return this.items;
    }
}