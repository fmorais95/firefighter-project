import { NgModule } from '@angular/core';

import { FirefighterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [FirefighterSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [FirefighterSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class FirefighterSharedCommonModule {}
