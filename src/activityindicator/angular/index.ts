import { Directive, NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { ActivityIndicator } from '@nativescript-community/ui-material-activityindicator';

@Directive({ selector: 'MDActivityIndicator' })
export class MaterialActivityIndicatorDirective {}

@NgModule({
    declarations: [MaterialActivityIndicatorDirective],
    exports: [MaterialActivityIndicatorDirective]
})
export class NativeScriptMaterialActivityIndicatorModule {}

registerElement('MDActivityIndicator', () => ActivityIndicator);
