import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FirefighterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [FirefighterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [FirefighterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FirefighterSharedModule {
  static forRoot() {
    return {
      ngModule: FirefighterSharedModule
    };
  }
}
