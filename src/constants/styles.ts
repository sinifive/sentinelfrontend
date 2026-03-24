/**
 * Reusable CSS class constants to avoid magic strings and improve maintainability
 */
export const CSS_CLASSES = {
  FLEX_NO_SHRINK: 'flex-shrink-0',
  NAVBAR_CONTAINER: 'hidden lg:flex items-center gap-3 flex-shrink-0',
  MOBILE_CONTAINER: 'flex lg:hidden items-center gap-2 flex-shrink-0',
  ICON_BUTTON_WRAPPER: 'flex-shrink-0'
} as const;