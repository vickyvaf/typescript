// Typing Functions

/**
 * How do we type onFocusChange?
 */

type FocusListenerType = (isFocused: boolean) => void;

const addListener = (onFocusChange: FocusListenerType) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [typeof isFocused, boolean];
});
