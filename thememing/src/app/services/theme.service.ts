import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";
import { VARIABLE } from "./variable.config";

@Injectable({
  providedIn: "root"
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(name = "default") {
    const theme = VARIABLE[name];
    Object.keys(theme).forEach((key) => {
      this.document.documentElement.style.setProperty(`--${key}`, theme[key]);
    });
  }
}
