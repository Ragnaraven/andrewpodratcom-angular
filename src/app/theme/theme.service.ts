import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, firstValueFrom, tap } from 'rxjs';
import { Theme, ThemeResponse } from './theme';

import * as DEFAULT_THEME from '../../assets/themes/theme1.json';
const THEME_DEFAULT = DEFAULT_THEME as unknown as Theme;

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: Theme = THEME_DEFAULT;

  get activeTheme() {
    return this.theme;
  }

  themes: Theme[] = [];

  constructor(private httpClient: HttpClient) {
    this.initThemesList();
  }

  async initThemesList() {
    this.setTheme(THEME_DEFAULT);
    this.themes.push(THEME_DEFAULT);

    const start = Date.now();

    let themeNames = await firstValueFrom(
      this.httpClient.get<ThemeResponse>('assets/themes/themesDB.json')
    );

    themeNames.options.forEach(async (name: string) => {
      let theme = await firstValueFrom(
        this.httpClient.get<Theme>(`assets/themes/${name}.json`)
      );

      if (theme != null && theme != THEME_DEFAULT) this.themes.push(theme);
    });

    console.log(`Got themes in ${(Date.now() - start) / 1000} seconds.`);
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    this.setKeys(undefined, theme);
  }

  private setKeys(prefix: string | undefined, obj: any) {
    let objKeys = Object.keys(obj);
    objKeys.forEach((objKey: string) => {
      let val = obj[objKey];
      let key = prefix == undefined ? objKey : `${prefix}.${objKey}`;

      if (val instanceof Object) this.setKeys(key, val);
      else document.documentElement.style.setProperty(`--${objKey}`, val);
    });
  }
}
