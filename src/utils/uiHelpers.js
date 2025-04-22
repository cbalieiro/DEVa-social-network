export const onNavigate = (path, state = {}) => {
  if (typeof path !== "string" || path.trim() === "") {
    console.error("O caminho fornecido para onNavigate não é válido.");
    return;
  }
  window.history.pushState(state, null, path);

  const popStateEvent = new PopStateEvent("popstate", { state: state });
  dispatchEvent(popStateEvent);
};

export const handleClickEvent = (rootElement, selector, callback) => {
  const element = rootElement.querySelector(selector);
  if (element) {
    element.addEventListener("click", callback);
  }
};