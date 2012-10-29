# Changelog

## vX.X.X
#### Mmmmm [D]D, YYYY

* ...

---

## v4.0.0
#### October 29, 2012

* Bumped version number to `v4.0.0`.
* Reorganized `demos` folder (BIG UPS to [@psullivan6](https://github.com/psullivan6/)):
	* Moved each demo's html and css into its own folder.
	* The root-level `index.html` is the main Wiffle demo page.
* Removed `.debug` classes from main Wiffle styles.
	* Moved `.debug` classes to `demos` folder.
	* Not suprising, but `wiffle.css` went from `26kb` to `14kb`!
* Moved `/source/grid-300+40.psd.zip` into `/demos/assets/images/`.
* `boxes.css`:
	* Fixed a syntax error.
	* Added comments.
	* Added new classes for `10px` & `20px` boxes.
* Some changes to all of the demo html files:
	* Updated links to point to new asset locations.
	* Fixed some html issues.

---

## v3.3.0
#### October 28, 2012

* Bumped version number to `v3.3.0`.
* Got rid of box/module styles.
* Modified `README.md`.
* Removed `_wiffle-utils.css` and `_wiffle-extras.css` files.
* Removed `extras/_wiffle-lines.css` and `extras/_wiffle-onoff.css`.
* Moved contents of `wiffle-utils.css` into `_wiffle-px.css`.
* Removed extras/utils from from `wiffle.css`.
	* I've made the decision to keep Wiffle focused; the addition of on/off, lines and "box/modules" seemed to be getting a little overboard. Reasoning: I think, if anyone uses Wiffle, they can come up with their own system of these "extras".
	* I've kept the examples of "lines" and "on/off" in the demo folder to show how one might go about adding their own "extras" to Wiffle.
* Update main demo page and CSS.
* Added a "lines" demo page.
* Modified "on/off" demo page.
* Moved "line before" and "on/off" styles into demo folder.
	* Removed `w_` namespace prefix.
* Moved demo CSS into a `css` folder.
	* Updated demo html files to point to new location of this file.
* Updated demo plugins to latest versions.
* Added ios orientation fix to `onoff.html` and `lines.html` demos.
* Moved/created `boxes.html` and `boxes.css` in demo folder.
	* Just another example of how one could utilize the breakpoints to create boxes with borders/margins/padding.
* Fixed a few logic errors in demo html files.

---

## v3.2.0
#### October 23, 2012

* Bumped version number to `v3.2.0`.
* Removed version number from CSS file name.
* Added header comment to `wiffle.css`.
* Updated `TODO.md` file.
* Updated `CHANGELOG.md` (this file).
* Changed `demo` folder to `demos`.
* Added `on-off.html` which demos the `on` and `off` classes.
* Minor tweak to comments in `_wiffle-core.css` (added a numbering system to breakpoints).
* Trimmed down `_wiffle-utils.css` to include only CSS relevant to grid making.
* Added `_wiffle-extras.css` which contains optional CSS.
    * Fixed bug with `on`/`off` classes.
* Added `_wiffle-h2o.css`.
	* It's a liquid/fluid/hybrid column setup.	
* Tweaked some comments and did other minor house cleaning.
* Modified `README.md`.
* New (closes [issue #6](https://github.com/registerguard/wiffle/issues/6)):
	* Added `LICENSE` ([Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0)).
		* I'm still uncertain weather this is the right license to have here.
* Moved browser tests from WIKI and into `CHANGELOG.md`.

##### Browser tests:

* MAC Snow Leopard:
	* Firefox `16.0.1`, Safari `6.0.1 (8536.26.14)`, Opera `12.02 (1578)`, Chrome `22.0.1229.94`
* PC Vista:
	* Firefox `15.0.1`, Firefox `16.0.1`, Chrome `22.0.1229.94 m`, Safari `5.1.7 (7534.57.2)`, Opera `12.02 (1578)`
	* IE `9.0.8112.16421`, IE `8.0.6001.18702`, IE `7.0.6002.18005`
* PC XP:
    * Firefox `14.01`, IE `6.0.2900.5512.xpsp_sp3_gdr.120504-1619`
* iPhone (Retina 4-inch), iOS `6.0`:
	* Safari (simulated)
* iPhone (Retina 3.5-inch), iOS `6.0`:
	* Safari (simulated), Safari, Chrome `21.0.1180.82`, Opera Mini `7.0.4.44138`
* iPhone, iOS `6.0`:
	* Safari (simulated)
* iPad (Retina), iOS `6.0`:
	* Safari
* iPad, iOS `6.0`:
	* Safari (simulated)
* iPad, iOS `5.1.1`:
	* Safari

---

## v3.1.1
#### September 27, 2012

* Bumped version number to `v3.1.1`.
* Added more utility classes:
    * Borders at breakpoints.
    * Show/hide at breakpoints.
* Updated `CHANGELOG.md`.
* Modified `demo.html` and `demo.css`.
* Modified `README.md`.

---

## v3.1.0
#### September 17, 2012

* Modified util classes for lines between columns.
    * Things have become more verbose but they are now more versatile when the column number is >= 3.
* Added `TODO.md` file.
* Updated `demo.html`.
* Bumped minor version number.

---

## v3.0.0
#### August 26, 2012

* Removed `-r` classes.
    * Caused horizontal scrollbar.
    * Wasn't very [DRY](http://en.wikipedia.org/wiki/Don%27t_repeat_yourself).
* Added new `float: right` class for `px` rows that affect child columns.
* Cleaned up css just a tad.
* Bumped major version number.
* Modified demo html to reflect latest changes to css.
* Updated `README.md`.

---

## v2.1.0
#### August 16, 2012

* Fixed `px` class name.
* Moved `clear` classes to utils file.
* `demo/index.html`: Added a new grid configurations and tweaked heading.
* Added contributors file.
* Modified readme.
* Added `-r` classes for right-floated columns.
* Bumped version number to `v2.1.0`
* Removed `20px` margin grid png.
* Minor house cleaning.

## v2.0.0
#### August 13, 2012

* Changed grid margins from `20px` to `40px`.
    * When on white background, `40px` just looks better.
* Fixed/updated some comments.
* Bumped version number to `v2.0.0`.
* Updated Photoshop grid PSD.

---

## v1.0.0
#### August 2, 2012

* Removed cruft from utils css.
* Updated demo HTML and CSS.
* House cleaning.

---

## v1.0.0
#### July 31, 2012

* Bunch of changes...
    * Changed repo/project name to "wiffle".
    * Changed class names.
    * Put related CSS in their own CSS file.
    * Added CSS to handle borders/padding/margins/other.
    * Bumped version number.

---

## v0.1.0
#### July 13, 2012

* Initial public release.

##### Browser tests:

* MAC Snow Leopard:
	* Firefox `14.0.x`, Safari `5.1.x`, Opera `12.00`, Chrome `21.0.x`
* PC Vista:
	* Firefox `3.6.x`, Firefox `14.0.x`, Chrome `20.0.x`, Safari `5.1.x`, Opera `11.64`, Opera `12.00`
	* IE `9.0.x`, IE `8.0.x`, IE `7.0.x`
* PC XP:
    * IE `6.0.x`
* iPhone 4:
	* Safari `4.3`, Safari `5.1.1`, Chrome `19.0.x`, Opera Mini `7.0.x`
* iPhone:
	* Safari `4.3` (simulated)
* iPad:
	* Safari `4.3` _(simulated)_, Safari `5.1.1`

---