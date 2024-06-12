import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MdBenhAn, MDBenhNhan } from "app/pages/md-benh-an/md-benh-an.model";
import { Observable } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { BankAccount, ClientService } from "xbook-core";
import { MedicalRecordService } from "../medical-record.service";
import { BENHSU, LISTPATIENT } from "../mock.service";
import { BenhSu, listPatient } from "../model";
import { HeroService } from "../hero.service";
import { groupBy } from "lodash";

@Component({
  selector: "xb-general",
  templateUrl: "./general.component.html",
  styleUrls: ["./general.component.scss"],
})
export class GeneralComponent implements OnInit {
  keyword: string = "";
  clientList: listPatient[] = [...LISTPATIENT];
  benhSu: BenhSu = { ...BENHSU };
  client: any;

  constructor(
    private router: Router,
    private clientService: ClientService,
    private medicalRecordService: MedicalRecordService,
    private heroService: HeroService
  ) {}

  ngOnInit() {}

  isOpenInfo = false;
  isOpenBA = false;

  toggle() {
    this.isOpenInfo = !this.isOpenInfo;
  }

  click() {
    this.isOpenBA = !this.isOpenBA;
  }
  navigateDetail(id: number) {
    this.router.navigate([`/pages/medic/detail/${id}`]);
  }

  // searchClient = (text$: Observable<string>) => {
  //   const debouncedText$ = text$.pipe(
  //     debounceTime(500),
  //     distinctUntilChanged()
  //   );
  //   return debouncedText$.pipe(
  //     map((term) =>
  //       this.clientList
  //         .filter(
  //           (x) =>
  //             x.clientName
  //               .toLocaleLowerCase()
  //               .includes(term.toLocaleLowerCase()) ||
  //             (x.address &&
  //               x.address
  //                 .toLocaleLowerCase()
  //                 .includes(term.toLocaleLowerCase())) ||
  //             (x.note &&
  //               x.note.toLocaleLowerCase().includes(term.toLocaleLowerCase()))
  //         )
  //         .slice(0, 3)
  //     )
  //   );
  // };

  // clientFormatter(value: any) {
  //   if (value.clientName) {
  //     return value.clientName;
  //   }
  //   return value;
  // }

  // refresh() {}
  // selectedItem(event) {
  //   // event.preventDefault();
  //   this.medicalRecordService
  //     .GetClientByPhoneNumberAsync({ phoneNumber: event.item.phoneNumber })
  //     .subscribe((rs: any) => {
  //       this.client.id = rs.clientID;
  //       this.client.clientName = rs.clientName;
  //       this.client.phoneNumber = rs.phoneNumber;
  //       this.client.address = rs.address;
  //       // this.cloneMedicalRecords = [...rs.benhAns];
  //       console.log(rs);
  //     });
  // }
}
