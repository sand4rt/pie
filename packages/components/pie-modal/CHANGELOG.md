# @justeattakeaway/pie-modal

## 0.14.0

### Minor Changes

- [Added] - `position` prop to modal ([#630](https://github.com/justeattakeaway/pie/pull/630)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Changed] - Sync modal header styles with figma ([#627](https://github.com/justeattakeaway/pie/pull/627)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - prop for `leadingAction` to pie-modal ([#632](https://github.com/justeattakeaway/pie/pull/632)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Changed] - Moved some tests from Visual to Component ([#613](https://github.com/justeattakeaway/pie/pull/613)) by [@JoshuaNg2332](https://github.com/JoshuaNg2332)

## 0.13.0

### Minor Changes

- [Added] - Default modal footer ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Height styles for the different sizes
  [Removed] - Unnecessary `:focus-visible` outline for the modal
  [Fixed] - Modal width should be able to exceed 600px for `isFullWidthBelowMid`

- [Added] - loading spinner to modal ([#628](https://github.com/justeattakeaway/pie/pull/628)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Scroll shadow for modal contents ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - Tests to validate leading/supporting action buttons ([#619](https://github.com/justeattakeaway/pie/pull/619)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Missing tests to check that the modal closes when expected to
  [Changed] - Updated tests to verify that the correct event is being triggered

- [Added] - hasBackButton prop to modal ([#623](https://github.com/justeattakeaway/pie/pull/623)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.12.0

### Minor Changes

- [Added] - @event jsdoc comments for modal events for react wrapper to analyse ([#612](https://github.com/justeattakeaway/pie/pull/612)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.11.0

### Minor Changes

- [Changed] - Ensure component implements it's props interface ([#611](https://github.com/justeattakeaway/pie/pull/611)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Fixed] - Added IconClose to Visual tests and modal ([#604](https://github.com/justeattakeaway/pie/pull/604)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.10.0

### Minor Changes

- [Added] - Add returnFocusAfterCloseSelector prop ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Changed] - Extract `renderTestPieModal` into test helper file so it can be used for component tests too
  [Added] - Add README documentation for new props

- [Fixed] - Fix console errors when switching between stories ([#599](https://github.com/justeattakeaway/pie/pull/599)) by [@xander-marjoram](https://github.com/xander-marjoram)

- [Added] - New `isFullWidthBelowMid` prop for pie-modal ([#600](https://github.com/justeattakeaway/pie/pull/600)) by [@LTurns](https://github.com/LTurns)

- [Added] isDismissible prop and tests ([#588](https://github.com/justeattakeaway/pie/pull/588)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.9.0

### Minor Changes

- [Changed] - Set modal props to public ([#597](https://github.com/justeattakeaway/pie/pull/597)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.8.0

### Minor Changes

- [Added] - New size prop for pie-modal ([#572](https://github.com/justeattakeaway/pie/pull/572)) by [@xander-marjoram](https://github.com/xander-marjoram)

  [Added] - Visual regression test for each size
  [Changed] - Modal story to include new size prop

## 0.7.0

### Minor Changes

- [Added] - Modal backdrop functionality ([#559](https://github.com/justeattakeaway/pie/pull/559)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] - Scroll locking to modal ([#564](https://github.com/justeattakeaway/pie/pull/564)) by [@jamieomaguire](https://github.com/jamieomaguire)

## 0.6.1

### Patch Changes

- [Changed] - Updated defs to use different array type syntax ([#566](https://github.com/justeattakeaway/pie/pull/566)) by [@ashleynolan](https://github.com/ashleynolan)

## 0.6.0

### Minor Changes

- [Changed] - Updated styles to use custom props ([#551](https://github.com/justeattakeaway/pie/pull/551)) by [@ashleynolan](https://github.com/ashleynolan)

- [Added] - close button to modal ([#549](https://github.com/justeattakeaway/pie/pull/549)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

## 0.5.0

### Minor Changes

- [Updated] - enum types to string union types to string union types ([#508](https://github.com/justeattakeaway/pie/pull/508)) by [@FayeCarter](https://github.com/FayeCarter)

## 0.4.0

### Minor Changes

- [Added] - `heading` and `headingLevel` props to the modal component ([#530](https://github.com/justeattakeaway/pie/pull/530)) by [@raoufswe](https://github.com/raoufswe)

- [Added] - Modal heading added to component ([#513](https://github.com/justeattakeaway/pie/pull/513)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] - Basic styling for modal default state

- [Changed] - moved pie-webc-core dependency to devDependencies in each component ([#499](https://github.com/justeattakeaway/pie/pull/499)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] - Additional notes on visual tests and environment variables ([#525](https://github.com/justeattakeaway/pie/pull/525)) by [@jamieomaguire](https://github.com/jamieomaguire)

- [Added] prop to control modal open & close state ([#527](https://github.com/justeattakeaway/pie/pull/527)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

- [Added] Read me percy config examples ([#529](https://github.com/justeattakeaway/pie/pull/529)) by [@kevinrodrigues](https://github.com/kevinrodrigues)

### Patch Changes

- [Fixed] - PieModal CSS by adding logical property ([#521](https://github.com/justeattakeaway/pie/pull/521)) by [@fernandofranca](https://github.com/fernandofranca)

## 0.3.0

### Minor Changes

- [Changed] - Build script to include generating react wrapper ([#426](https://github.com/justeattakeaway/pie/pull/426)) by [@LTurns](https://github.com/LTurns)

### Patch Changes

- [Added] - Missing `test:ci` scripts to package.json ([#492](https://github.com/justeattakeaway/pie/pull/492)) by [@siggerzz](https://github.com/siggerzz)

- [Updated] - components to use the shared configurations ([#487](https://github.com/justeattakeaway/pie/pull/487)) by [@fernandofranca](https://github.com/fernandofranca)

- Updated dependencies [[`090354733`](https://github.com/justeattakeaway/pie/commit/090354733f24f0aa52ce287db7f8d13648414150)]:
  - @justeattakeaway/pie-webc-core@0.2.0

## 0.2.0

### Minor Changes

- [Changed] - use RTL mixin on component ([#478](https://github.com/justeattakeaway/pie/pull/478)) by [@jamieomaguire](https://github.com/jamieomaguire)

### Patch Changes

- Updated dependencies [[`1f79d9d1a`](https://github.com/justeattakeaway/pie/commit/1f79d9d1a6fe9160b244e82d956290136b87187b)]:
  - @justeattakeaway/pie-webc-core@0.1.0

## 0.1.1

### Patch Changes

- [Added] - PieModal component shell ([#439](https://github.com/justeattakeaway/pie/pull/439)) by [@fernandofranca](https://github.com/fernandofranca)

  [Added] - README and LICENSE files
  [Added] - Initial TypeScript and Vite config
  [Added] - `declaration.d.ts` file for TypeScript
