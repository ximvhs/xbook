import { Injectable } from "@angular/core";
import { BenhAn, BenhSu, ChiTiet } from "./model";
import { BENHSU } from "./mock.service";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeroService {
  constructor() {}
  // Xử lý detail
  getChiTietById(id: number): Observable<ChiTiet[]> {
    const benhSu = BENHSU.benhAns.filter((benhAn) => benhAn.benhAnId === id);
    return of(benhSu[0].chiTiet);
  }

  getBenhAnById(id: number): Observable<BenhAn[]> {
    const benhAn = BENHSU.benhAns.filter((benhAn) => benhAn.benhAnId === id);
    return of(benhAn);
  }

  // Xử lý tổng kết
  mergeAndFilterChiTiet(): Observable<ChiTiet[]> {
    const mergedChiTiet: ChiTiet[] = [];
    const chiTietMap: Map<string, ChiTiet> = new Map();
    const benhSu = BENHSU;
    benhSu.benhAns.forEach((benhAn) => {
      benhAn.chiTiet.forEach((chiTiet) => {
        const key = `${chiTiet.benhAnId}-${chiTiet.id}`;
        if (!chiTietMap.has(key)) {
          chiTietMap.set(key, chiTiet);
        }
      });
    });

    chiTietMap.forEach((value) => mergedChiTiet.push(value));
    return of(mergedChiTiet);
  }
}
