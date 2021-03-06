# mde-popover

`<mde-popover>` is a floating panel containing html content. 


By itself, the `<mde-popover>` element does not render anything. The popover is attached to and opened 
via application of the `mdePopoverTriggerFor` directive:
```html
<mde-popover #appPopover="mdePopover">
  <button md-button> Settings </button>
  <button md-button> Help </button>
</mde-popover>

<button md-button [mdePopoverTriggerFor]="appPopover">
   <mde-icon>more_vert</mde-icon>
</button>
```

### Toggling the popover programmatically
The popover exposes an API to open/close programmatically. Please note that in this case, an 
`mdePopoverTriggerFor` directive is still necessary to attach the popover to a trigger element in the DOM.

```ts
class MyComponent {
  @ViewChild(MdPopoverTrigger) trigger: MdPopoverTrigger;

  someMethod() {
    this.trigger.openPopover();
  }
}
```

### Customizing popover position

By default, the popover will display below (y-axis), after (x-axis), and overlapping its trigger.  The position can be changed
using the `mdePopoverPositionX` (`before | after`) and `mdePopoverPositionY` (`above | below`) attributes.
The popover can be be forced to not overlap the trigger using `[mdePopoverOverlapTrigger]="false"` attribute.

```html
<mde-popover #appPopover="mdePopover" mdePopoverPositionY="above">
  <button md-button> Close </button>
</mde-popover>

<button md-button [mdePopoverTriggerFor]="appPopover">
   <mde-icon>more_vert</mde-icon>
</button>
```

### Popover position target reference

The popover positioning by default is calculated from the trigger element.
You can override positioning by referencing another component `[mdePopoverTargetAt]="templateRef"`.
This allows you to have multiple popovers positioned in the same place. See example app [here](https://uixd.co.uk/open-source-software/material-extended/demo).

```html
<mde-popover #appPopoverNotifications="mdePopover">
  Notifcations
</mde-popover>

<mde-popover #appPopoverAccount="mdePopover">
  <button md-button> Profile </button>
  <button md-button> Logout </button>
</mde-popover>

<md-toolbar>

  <button md-button [mdePopoverTriggerFor]="appPopoverNotifications" [mdePopoverTargetAt]="appToolbar">
     <mde-icon>notifications</mde-icon>
  </button>
  
  <button md-button [mdePopoverTriggerFor]="appPopoverAccount" [mdePopoverTargetAt]="appToolbar">
     <mde-icon>face</mde-icon>
  </button>

</md-toolbar>
```

### Popover FocusTrap

The popover uses `cdkTrapFocus` to trap focus within the popover, by default this is enabled.
The popover can be be forced to not focus trap using `[mdeFocusTrapEnabled]="false"` attribute.
```html
<mde-popover #appPopoverAccount="mdePopover">
  <button md-button> Profile </button>
  <button md-button> Logout </button>
</mde-popover>

<button md-button [mdePopoverTriggerFor]="appPopoverAccount" [mdeFocusTrapEnabled]="false">
   <mde-icon>face</mde-icon>
</button>
```

### Keyboard interaction
- <kbd>TAB</kbd>: Focus next element
- <kbd>SHIFT</kbd> + <kbd>TAB</kbd>: Focus previous element
- <kbd>ESC</kbd>: Exit popover


# API reference

### MdePopover
##### Selector: `mde-popover`
##### Exported as: `mdePopover`

##### Properties
| Name                                              | Description                                                                                                                                                                                                                          |
|---------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| @Input('mdePopoverPositionX') positionX           | Position of the popover in the X axis.                                                                                                                                                                                               |
| @Input('mdePopoverPositionY') positionY           | Position of the popover in the Y axis.                                                                                                                                                                                               |
| @Input('mdePopoverTriggerOn') triggerEvent        | Event for triggering popover.                                                                                                                                                                                                        |
| @Input('mdePopoverEnterDelay') enterDelay         | Delay for popover before enters                                                                                                                                                                                                      |
| @Input('mdePopoverLeaveDelay') leaveDelay         | Delay for popover before leaves                                                                                                                                                                                                      |
| @Input('mdePopoverOverlapTrigger') overlapTrigger | Whether the popover should overlap its trigger.                                                                                                                                                                                      |
| @Input('mdePopoverOffsetX') targetOffsetX         | Offset position of the popover from target in the X axis.                                                                                                                                                                            |
| @Input('mdePopoverOffsetY') targetOffsetY         | Offset position of the popover from target in the Y axis.                                                                                                                                                                            |
| @Input('mdePopoverArrowOffsetX') arrowOffsetX     | Offset position of the popover arrow from the X axis.                                                                                                                                                                                |
| @Input('mdePopoverArrowWidth') arrowWidth         | Arrow width in pixels.                                                                                                                                                                                                               |
| @Input('mdePopoverArrowColor') arrowColor         | Arrow color, accepts CSS color values. Default: rgba(0, 0, 0, 0.12)                                                                                                                                                                  |
| @Input('mdePopoverCloseOnClick') closeOnClick     | Whether the popover should close on click.                                                                                                                                                                                           |
| @Input('mdeFocusTrapEnabled') focusTrapEnabled    | Whether the popover should focus trap.                                                                                                                                                                                               |
| @Input('class') classList                         | This method takes classes set on the host mde-popover element and applies them on the popover template that displays in the overlay container. Otherwise, it's difficult to style the containing popover from outside the component. |
| templateRef                                       | Template reference                                                                                                                                                                                                                   |
| @Output() close                                   | Event emitted when the popover is closed.                                                                                                                                                                                            |                                                                                                                                                                                                                                     |

##### Methods
`setPositionClasses`

It's necessary to set position-based classes to ensure the popover panel animation folds out from the correct direction.

| Parameters |
|------------|
| `posX?`    |
| `posY?`    |







### MdePopoverTrigger
This directive is intended to be used in conjunction with an mde-popover tag. It is responsible for toggling the display of the provided popover instance.

##### Selector: `[mdePopoverTriggerFor]`
##### Exported as: `mdePopoverTrigger`

| Name                                              | Description                                                                             |
|---------------------------------------------------|-----------------------------------------------------------------------------------------|
| @Input('mdePopoverTriggerFor') popover            | References the popover instance that the trigger is associated with.                    |
| @Input('mdePopoverTargetAt') targetElement        | References the popover target instance that the popover positioning is associated with. |
| @Input('mdePopoverPositionX') positionX           | Position of the popover in the X axis.                                                  |
| @Input('mdePopoverPositionY') positionY           | Position of the popover in the Y axis.                                                  |
| @Input('mdePopoverTriggerOn') triggerEvent        | Event for triggering popover, hover or click. Default: click                            |
| @Input('mdePopoverEnterDelay') enterDelay         | Delay for popover before enters                                                         |
| @Input('mdePopoverLeaveDelay') leaveDelay         | Delay for popover before leaves                                                         |
| @Input('mdePopoverOverlapTrigger') overlapTrigger | Whether the popover should overlap its trigger.                                         |
| @Input('mdePopoverOffsetX') targetOffsetX         | Offset position of the popover from target in the X axis.                               |
| @Input('mdePopoverOffsetY') targetOffsetY         | Offset position of the popover from target in the Y axis.                               |
| @Input('mdePopoverArrowOffsetX') arrowOffsetX     | Offset position of the popover arrow from the X axis.                                   |
| @Input('mdePopoverArrowWidth') arrowWidth         | Arrow width in pixels.                                                                  |
| @Input('mdePopoverArrowColor') arrowColor         | Arrow color, accepts CSS color values. Default: rgba(0, 0, 0, 0.12)                     |
| @Input('mdePopoverCloseOnClick') closeOnClick     | Whether the popover should close on click.                                              |
| @Output() onPopoverOpen                           | Event emitted when the associated popover is opened.                                    |
| @Output() onPopoverClose                          | Event emitted when the associated popover is closed.                                    |


##### Methods
`togglePopover`
Toggles the popover between the open and closed states.

`openPopover`
Opens the popover.

`closePopover`
Closes the popover.

`destroyPopover`
Removes the popover from the DOM.
