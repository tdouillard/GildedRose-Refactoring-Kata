# Developer Log

Purpose: Keep track of the developer mindset, questions and tasks while executing the Gilded Rose refactoring kata.

## Mindset
- Focus: Add new feature; open of refactor except for specific classes; keep tests green.
- Questions-first: Capture uncertainties before changing behavior.
- Evidence: Record why a specif change was made.

## Open Questions
- (YYYY-MM-DD) Question summary — owner: @you

## Task Log (chronological)
| Date | Task | Notes | Time |
|---|---|---|---|
| 2025-11-05 | read project and typescript context | No clear restrictions found on the project cleanup so it shall be the next task before refactoring to add the new feature + look for the testtest documentation to quickly understand its purpose | 20m |
| 2025-11-05 | clean repo and specific typescript context | Chose to keep "Jest" due to my usage frequency in previous project | 30m |
| 2025-11-05 | Add new unit tests with no implementation based on the GildedRoseRequirements |  | 10m |
| 2025-11-05 | Create a core model folder to store the definition of all types of items | 
 - Questions on if  TicketItem should extends CheeseItem due to their mutual quality improvment process : chose to not link them in order to avoid unwanted conflict if cheeseItem evolve and so accept the quality process code redundancy for those two types of items
 - "Feel free to make any changes to the UpdateQuality method and add any new code as long as everything still works correctly. However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover for you).", This does not indicate that i can't move the class to an other path, it only indicate that i mustn't change its content. Without means of infirming, i'll do the refacto by moving the class but let the original file marked with a todo   | 30m |
 | 2025-11-05 | Complete Units test and adjuste item/custom items quality method | - "Once the sell by date has passed, Quality degrades twice as fast.Aged Brie actually increases in Quality the older it gets" : Does it mean that the quality increase twice when sell by date has passed for aged brie ? Without confirmation i will let it increase by 1. | 30m |
 | 2025-11-05 | Update method "updateQuality" + valid main 30 days test | For updateQuality i chose to use custom instance instead of fixed "Item" class instead of "items" property since this property should not be modified ("However, do not alter the Item class or Items property as those belong to the goblin in the corner who will insta-rage and one-shot you as he doesn't") but i dont know if this is allowed or if this kata aimed to make specific adjustement for this kind of situation => I let this property untouchand and update a custom property. | 30m |
| 2025-11-05 | Clean code : remove unused log, create variable to avoid plain text/number, add comments, verify test/coverage | | 30m |
