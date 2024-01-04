export const keyMap = {
  close: {
    codes: ['Escape'],
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
  },
  open: {
    codes: ['KeyM'],
    shiftKey: true,
    ctrlKey: true,
    altKey: true,
  },
};

export const drawerTriggerActions = {
  open: 'open',
  close: 'close',
  toggle: 'toggle',
} as const;
