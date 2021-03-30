# Default Setup

The RAMP instance provides APIs to set up fixtures and events, allowing a high degree of customization. However, there is also a default setup that will provide stock fixtures and events. The default setup will result in a functional viewer that only requires a configuration file.

## Default Fixtures

The following fixtures are included in the default setup.  Any special interfaces they support is also noted; this information is relevant when replacing defaults fixtures, as discussed in the Examples section below.

TODO maybe these lists go in separate pages, like reference pages.

### Appbar

The `appbar` provides a means to open and track panels, or run custom commands.

Continued [here](appbar.md).

### Mapnav

The `mapnav` provides a means pan and zoom the map. TODO create and hyperlink to `mapnav.md`, or provide any other relevant info here.

### Legend

The `legend` provides an interactive listing of the layers and other data on the map. TODO create and hyperlink to `legend.md`

### Grid

The `grid` provides a tabular view of attributes for a feature class.

Continued [here](datatable.md).

### Details

The `details` provides an interface to view information about a feature / voxel, and to see a collection of identify results.

Continued [here](details.md).

### Basemap

The `basemap` provides a means to change the basemap layers of the map. TODO create and hyperlink to `basemap.md`, or provide any other relevant info here.

### Geosearch

The `geosearch` is a utility that allows one to search for geographic names and zoom to the results.

Continued [here](geosearch.md).

### Help

The `help` provides a means to display user help for the application. TODO create and hyperlink to `help.md`, or provide any other relevant info here.

### Metadata

The `metadata` provides an interface to view extra information about a layer. TODO create and hyperlink to `metadata.md`, or provide any other relevant info here.

### Settings

The `settings` allow you to make live modifications to a layer on the map. TODO create and hyperlink to `settings.md`

### Northarrow

The `northarrow` provides an arrow at the top of the map pointing to the geographic north pole. TODO create and hyperlink to `northarrow.md`

### Overviewmap

The `overviewmap` provides a smaller map displaying the current map extent within the context of a larger area. TODO create and hyperlink to `overviewmap.md`

### Crosshairs

The `crosshairs` displays crosshairs at the centre of the map when keyboard navigation is active. TODO create and hyperlink to `crosshairs.md`

## Default Events

All events are specific to a RAMP instance. An event on one instance says nothing about a different instance.

### Core Events

These events will always be present, regardless of what fixtures are active. Event names here include the `GlobalEvents` enum value first. Italics in the payload indicate a property of a general payload object.

TODO if we have API docs that expose the payload interfaces, link to those definitions. Otherwise we'll need to put the interface specs here

| Event Name | Payload | Event Announces |
| ---------- | ---------- | ---------- |
| COMPONENT<br>'ramp/component' | *id*: component id | A vue component registered |
| FILTER_CHANGE<br>'filter/change' | FilterEventParam object| A filter has changed |
| MAP_BLUR<br>'map/blur' | FocusEvent object | The map lost focus |
| MAP_CLICK<br>'map/click' | MapClick object | The map was clicked |
| MAP_CREATED<br>'map/created' | Map API object| The map was created |
| MAP_DOUBLECLICK<br>'map/doubleclick' | MapClick object | The map was double clicked |
| MAP_EXTENTCHANGE<br>'map/extentchanged' | RAMP Extent object | The map extent changed |
| MAP_IDENTIFY<br>'map/identify' | *results*: Array of IdentifyResult<br>*click*: MapClick object | A map identify was requested |
| MAP_KEYDOWN<br>'map/keydown' | KeyboardEvent object | A key was pressed |
| MAP_KEYUP<br>'map/keyup' | KeyboardEvent object | A key was released |
| MAP_MOUSEDOWN<br>'map/mousedown' | PointerEvent object | A mouse button was depressed |
| MAP_MOUSEMOVE<br>'map/mousemove' | MapMove object | The mouse moved over the map |


### Core Fixture Events

These events will be present if the associated core fixtures are running

TODO add stuff as we make events that core fixtures raise

| Event Name | Payload | Event Announces |
| ---------- | ---------- | ---------- |
| SETTINGS_TOGGLE<br>'settings/toggle' | layer uid | Settings panel toggle was requested for a layer |
| DETAILS_OPEN<br>'details/open' | *identifyItem*: IdentifyItem object<br>*uid*: layer uid | A feature's details was requested |
| HELP_TOGGLE<br>'help/toggle' | boolean (optional) | Help panel toggle was requested with optional force open/close |
| GRID_TOGGLE<br>'grid/toggle' | *uid*: layer uid<br>*open*: boolean (optional) | Grid panel toggle was requested with optional force open/close |


## Default Events Handlers

Along with the default fixtures, there are default event handlers that are applied to make them react to each other and to the RAMP core. See the examples section below and the LINKTO Events API page for details on how to work with event handlers.

TODO keep updating the list, make new subsections as appropriate. Maybe move to a separate page if it becomes a huge list.

### Map Handlers

- `ramp_map_click_runs_identify` causes the identify process to start when the map is clicked
- `ramp_identify_opens_details` causes the details fixture to open, displaying the result of an identify request.
- `ramp_map_keydown` causes a key press to be processed on the map
- `ramp_map_keyup` causes a key release to be processed on the map
- `ramp_map_blur` causes keyboard navigation to stop when the map loses focus

### Fixture Handlers

- `ramp_settings_toggles_panel` causes the settings fixture to toggle the settings panel
- `opens_feature_details` causes the details fixture to open for a single feature
- `toggles_help_panel` causes the help fixture to toggle the help panel
- `toggles_grid_panel` causes the grid fixture to toggle the grid panel

## Examples

### Default Setup

Creating a default instance of RAMP. No special action is required.

```js
function initRAMP() {
    var rInstance = new RAMP.Instance(domElement, configs);
}
```

Create a default instance the long-winded way.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false,
        loadDefaultEvents: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.addDefaultFixtures();
    rInstance.event.addDefaultEvents();
}
```

### Replacing Default Fixtures

Replacing a default fixture with a custom fixture of the same name and interface. Note that we can just call `addDefaultFixtures()` without any special parameters; when it attempts to load the default `help` fixture, it will see the already loaded fixture and use that.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.add('help', CustomHelpFixtureClass);
    rInstance.fixtures.addDefaultFixtures();
}
```

Note that if the default fixture exposes any methods on its API, a replacement fixture must also implement the method signature. Otherwise runtime errors will likely occur, or some adjustments on the default event handlers will be required to remove any calls to the methods (in which case it is likely easier to just give the fixture a unique name and remove the default fixture).

### Subsets of the Default Setup

Adding a subset of default fixtures. This map does very little! Note we could also suppress and then selectively add the neccessary default event handlers. This would be slightly more efficient (we would not have handlers reacting and then realizing there is nothing to do), but also requires one to figure out what event handlers are still needed.

```js
function initRAMP() {
    var options = {
        loadDefaultFixtures: false
    };
    var rInstance = new RAMP.Instance(domElement, configs, options);
    rInstance.fixtures.add('help', CustomHelpFixtureClass);
    rInstance.fixtures.addDefaultFixtures(['help', 'appbar', 'mapnav']);
}
```
