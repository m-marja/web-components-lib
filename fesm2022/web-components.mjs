import * as i0 from '@angular/core';
import { Injectable, Component } from '@angular/core';

class WebComponentsService {
    constructor() { }
    getHello() {
        return 'hello this is from web components';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.1", ngImport: i0, type: WebComponentsService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.2.1", ngImport: i0, type: WebComponentsService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.1", ngImport: i0, type: WebComponentsService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root',
                }]
        }], ctorParameters: () => [] });

class WebComponentsComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.1", ngImport: i0, type: WebComponentsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.2.1", type: WebComponentsComponent, isStandalone: true, selector: "lib-web-components", ngImport: i0, template: ` <p>web-components works!</p> `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.1", ngImport: i0, type: WebComponentsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-web-components', standalone: true, imports: [], template: ` <p>web-components works!</p> ` }]
        }] });

/*
 * Public API Surface of web-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { WebComponentsComponent, WebComponentsService };
//# sourceMappingURL=web-components.mjs.map
