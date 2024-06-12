import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MdBenhAnService } from "../../md-benh-an/md-benh-an.service";
import { HeroService } from "../hero.service";
import { groupBy } from "lodash";

@Component({
  selector: "xb-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"],
})
export class DetailComponent implements OnInit {
  ListBenhAns = [];
  BenhAn = [];

  trieuChungTH = [];
  chuanDoanTH = [];
  xetNghiemTH = [];
  thuocDieuTriTH = [];
  canLamSangTH = [];
  ngayTaiKham = [];
  loiDan = [];
  constructor(
    private Activatedroute: ActivatedRoute,
    private mdBenhAnService: MdBenhAnService,
    private heroService: HeroService
  ) {}

  ngOnInit() {
    this.Activatedroute.paramMap.subscribe((params: ParamMap) => {
      const id = +params.get("id");
      this.heroService.getChiTietById(Number(id)).subscribe((data) => {
        const groupListBenhAns = groupBy(data, "loaiXetNghiem");
        this.trieuChungTH = groupListBenhAns.trieuChung;
        this.chuanDoanTH = groupListBenhAns.chuanDoan;
        this.xetNghiemTH = groupListBenhAns.xetNghiem;
        this.thuocDieuTriTH = groupListBenhAns.thuocDieuTri;
        this.canLamSangTH = groupListBenhAns.canLamSang;
        this.ngayTaiKham = groupListBenhAns.NgayTaikham;
        this.loiDan = groupListBenhAns.LoiDan;
        console.log(groupListBenhAns.NgayTaikham);
      });
      this.heroService.getBenhAnById(Number(id)).subscribe((data) => {
        this.BenhAn = data;
      });
    });
    console.log(this.xetNghiemTH);
  }
}
