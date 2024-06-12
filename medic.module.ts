import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SyntheticComponent } from "./synthetic/synthetic.component";
import { MedicRoutingModule } from "./medic-routing.module";
import { MedicComponent } from "./medic.component";
import { GeneralComponent } from "./general/general.component";
import { InputPhonenumberComponent } from "./input-phonenumber/input-phonenumber.component";
import { DetailComponent } from "./detail/detail.component";
import { NgbModalModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MedicalRecordService } from "./medical-record.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "@progress/kendo-angular-inputs";
import { AvatarModule } from "ngx-avatar";
import { XbookCoreSharedModule } from "xbook-core";

@NgModule({
  declarations: [
    MedicComponent,
    GeneralComponent,
    InputPhonenumberComponent,
    DetailComponent,
    SyntheticComponent,
  ],
  imports: [
    CommonModule,
    MedicRoutingModule,
    NgbModalModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    XbookCoreSharedModule,
    SharedModule,
    AvatarModule,
  ],
  providers: [MedicalRecordService],
})
export class MedicModule {}
