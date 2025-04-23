export const onNavigate = (path, state = {}) => {
  if (typeof path !== "string" || path.trim() === "") {
    console.error("The provided path for onNavigate is not valid.");
    return;
  }
  window.history.pushState(state, null, path);

  const popStateEvent = new PopStateEvent("popstate", { state: state });
  dispatchEvent(popStateEvent);
};

export const handleClickEvent = (rootElement, selector, callback) => {
  if (!rootElement || typeof rootElement.querySelector !== "function") {
    console.error("Invalid rootElement provided to handleClickEvent.");
    return;
  }
  if (!selector || typeof selector !== "string") {
    console.error("Invalid selector provided to handleClickEvent.");
    return;
  }

  const element = rootElement.querySelector(selector);
  if (element) {
    element.addEventListener("click", callback);
  }
};

export const getElementBySelector = (rootElement, selector) => rootElement.querySelector(selector);

export const getElementByIdFromElement = (element, id) => element.getElementById(id);

export const clearElementContent = (rootElement, id) => {
  const element = getElementBySelector(rootElement, id);
  if (element) {
    element.value = '';
  }
};