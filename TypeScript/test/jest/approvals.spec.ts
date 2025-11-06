import { Item } from '@/core/Item.model';
import { CustomInstanceMapper } from '@/CustomItemMapper';
import { GildedRose } from '@/GildedRose';

/**
 * This unit test uses [Jest Snapshot](https://goo.gl/fbAQLP).
 * 
 * There are two test cases here with different styles:
 * <li>"foo" is more similar to the unit test from the 'Java' version
 * <li>"thirtyDays" is more similar to the TextTest from the 'Java' version
 *
 * I suggest choosing one style to develop and deleting the other.
 */

describe('Gilded Rose Approval', () => {

  let gameConsoleOutput: string;
  let originalConsoleLog: (message: any) => void;
  let originalProcessArgv: string[]

  function gameConsoleLog(msg: string) {
    if (msg) {
      gameConsoleOutput += msg;
    }
    gameConsoleOutput += "\n";
  }

  beforeEach(() => {
    // prepare capturing console.log to our own gameConsoleLog.
    gameConsoleOutput = "";
    originalConsoleLog = console.log;
    console.log = gameConsoleLog;
    originalProcessArgv = process.argv;
  });

  afterEach(() => {
    // reset original console.log
    console.log = originalConsoleLog;
    process.argv = originalProcessArgv;
  });

  it('should display the correct item values for 30 days', () => {
    const items = [
      new Item("+5 Dexterity Vest", 10, 20),
      new Item("Aged Brie", 2, 0),
      new Item("Elixir of the Mongoose", 5, 7),
      new Item("Sulfuras, Hand of Ragnaros", 0, 80),
      new Item("Sulfuras, Hand of Ragnaros", -1, 80),
      new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      new Item("Conjured Mana Cake", 3, 6)
    ];

    const gildedRose = new GildedRose(items);

    // Run the full approval over 30 days to capture daily outputs
    let days: number = 30;
    if (process.argv.length > 2) {
      days = +process.argv[2];
    }

    for (let i = 0; i < days + 1; i++) {
      console.log("-------- day " + i + " --------");
      console.log("name, sellIn, quality");
      items.forEach(element => {
        console.log(element.name + ', ' + element.sellIn + ', ' + element.quality);

      });
      console.log();
      gildedRose.updateQuality();
    }
    // Snapshot the console output so we capture the daily name/sellIn/quality log
    expect(gameConsoleOutput).toMatchSnapshot();
  });
});
