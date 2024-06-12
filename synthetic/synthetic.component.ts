import { Component, OnInit } from "@angular/core";
import { HeroService } from "../hero.service";
import { groupBy } from "lodash";
import { Subscription } from "rxjs";

@Component({
  selector: "xb-synthetic",
  templateUrl: "./synthetic.component.html",
  styleUrls: ["./synthetic.component.scss"],
})
export class SyntheticComponent implements OnInit {
  trieuChungTH = [];
  chuanDoanTH = [];
  xuatNghiemTH = [];
  thuocDieuTriTH = [];
  canLamSangTH = [];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroService.mergeAndFilterChiTiet().subscribe((data) => {
      const groupedData = groupBy(data, "loaiXetNghiem");
      this.trieuChungTH = groupedData.trieuChung;
      this.chuanDoanTH = groupedData.chuanDoan;
      this.xuatNghiemTH = groupedData.xetNghiem;
      this.thuocDieuTriTH = groupedData.thuocDieuTri;
      this.canLamSangTH = groupedData.canLamSang;
      console.log(groupedData);
    });
    this.heroService.getBenhAnById(12428).subscribe((data) => {
      console.log(data);
    });
  }
  isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
