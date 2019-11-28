import { Injectable, RendererFactory2, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class CustomThemeService {
    renderer: Renderer2;
    currentTheme: string = 'dark';

    constructor(
        private renderFactory: RendererFactory2,
        @Inject(DOCUMENT) private document: Document,
    ) {
        this.renderer = this.renderFactory.createRenderer(null, null);
    }

    enableDarkTheme() {
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'light');
        this.currentTheme = 'dark';
    }

    enableLightTheme() {
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'dark');
        this.currentTheme = 'light';
    }

    getCurrentTheme() {
        return this.currentTheme;
    }
}
