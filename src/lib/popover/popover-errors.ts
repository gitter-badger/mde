/**
 * Throws an exception for the case when popover trigger doesn't have a valid mde-popover instance
 * @docs-private
 */
export function throwMdePopoverMissingError() {
  throw Error(`mde-popover-trigger: must pass in an mde-popover instance.

    Example:
      <mde-popover #popover="mdPopover"></mde-popover>
      <button [mdPopoverTriggerFor]="popover"></button>`);
}

/**
 * Throws an exception for the case when popover's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 * @docs-private
 */
export function throwMdePopoverInvalidPositionX() {
  throw Error(`x-position value must be either 'before' or after'.
      Example: <mde-popover x-position="before" #popover="mdPopover"></mde-popover>`);
}

/**
 * Throws an exception for the case when popover's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 * @docs-private
 */
export function throwMdePopoverInvalidPositionY() {
  throw Error(`y-position value must be either 'above' or below'.
      Example: <mde-popover y-position="above" #popover="mdPopover"></mde-popover>`);
}
