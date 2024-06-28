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
  trieuChungTH = [];
  chuanDoanTH = [];
  xetNghiemTH = [];
  thuocDieuTriTH = [];
  canLamSangTH = [];

  constructor(
    private router: Router,
    private clientService: ClientService,
    private medicalRecordService: MedicalRecordService,
    private heroService: HeroService
  ) {}

  isOpenInfo = false;
  isOpenBA = false;

  ngOnInit() {
    this.heroService.mergeAndFilterChiTiet().subscribe((data) => {
      const groupedData = groupBy(data, "loaiXetNghiem");
      this.trieuChungTH = groupedData.trieuChung;
      this.chuanDoanTH = groupedData.chuanDoan;
      this.xetNghiemTH = groupedData.xetNghiem;
      this.thuocDieuTriTH = groupedData.thuocDieuTri;
      this.canLamSangTH = groupedData.canLamSang;
    });
  }

  toggle() {
    this.isOpenInfo = !this.isOpenInfo;
  }

  click() {
    this.isOpenBA = !this.isOpenBA;
  }
  navigateDetail(id: number) {
    this.router.navigate([`/pages/medic/detail/${id}`]);
  }

  images = [
    "https://ykhoahopnhan.vn/wp-content/uploads/2018/02/1.png",
    "https://medlatec.vn/media/8114/content/20211210_xet-nghiem-la-gi-01.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfsmKrlim1WHI_GR9ggfV66aBx5E7n6xinIw&s",
  ];

  captions = ["Máu - 26/06/2024", "Tay - 26/06/2024", "Chân - 26/06/2024"];

  currentIndex = 0;
  isFullScreen = false;
  isSearchComplete = true;

  prevSlide() {
    this.currentIndex =
      this.currentIndex > 0 ? this.currentIndex - 1 : this.images.length - 1;
  }

  nextSlide() {
    this.currentIndex =
      this.currentIndex < this.images.length - 1 ? this.currentIndex + 1 : 0;
  }

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

  search() {
    // Thực hiện logic tìm kiếm của bạn ở đây
    // Khi tìm kiếm hoàn tất, đặt isSearchComplete thành true
    this.isSearchComplete = true;
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
