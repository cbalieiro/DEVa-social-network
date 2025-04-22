import { loginTags } from "./standard.js";
import {
  validation,
  persist,
  loginGoogle,
  loginGitHub,
} from "../../services/index.js";
import { onNavigate, handleClickEvent } from "../../utils/uiHelpers.js";

export const Login = () => {
  const rootElement = document.createElement("div");
  const pageStructure = loginTags();
  rootElement.innerHTML = pageStructure;

  handleClickEvent(rootElement, "#lgn-btn", (e) => {
    e.preventDefault();
    const email = rootElement.querySelector("#email-login").value;
    const password = rootElement.querySelector("#password-login").value;
    const person = { email, password };
    validation(person);
    persist(person);
  });

  handleClickEvent(rootElement, ".login-google", (e) => {
    e.preventDefault();
    loginGoogle();
    persist();
  });

  handleClickEvent(rootElement, ".login-github", (e) => {
    e.preventDefault();
    loginGitHub();
    persist();
  });

  handleClickEvent(rootElement, "#sgnUp-btn", (e) => {
    e.preventDefault();
    rootElement.innerHTML = "";
  });

  handleClickEvent(rootElement, "#btn-register", (e) => {
    e.preventDefault();
    onNavigate("/register");
  });

  return rootElement;
};
