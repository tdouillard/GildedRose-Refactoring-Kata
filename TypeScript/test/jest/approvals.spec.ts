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

  it('should display the correct item values', () => {
    const items = [
      CustomInstanceMapper("+5 Dexterity Vest", 10, 20), //
      CustomInstanceMapper("Aged Brie", 2, 0), //
      CustomInstanceMapper("Elixir of the Mongoose", 5, 7), //
      CustomInstanceMapper("Sulfuras, Hand of Ragnaros", 0, 80), //
      CustomInstanceMapper("Sulfuras, Hand of Ragnaros", -1, 80),
      CustomInstanceMapper("Backstage passes to a TAFKAL80ETC concert", 15, 20),
      CustomInstanceMapper("Backstage passes to a TAFKAL80ETC concert", 10, 49),
      CustomInstanceMapper("Backstage passes to a TAFKAL80ETC concert", 5, 49),
      CustomInstanceMapper("Conjured Mana Cake", 3, 6)];


    const gildedRose = new GildedRose(items);

    let days: number = 2;
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
    expect(items).toMatchSnapshot();
  });
});
