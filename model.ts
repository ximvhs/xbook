export interface listPatient {
  maBenhNhan: string;
  clientName: string;
  namSinh: number;
  dienThoai: string;
  gioiTinh: string;
  canNang: number;
  chieuCao: number;
  email: string;
  address: string;
}

export interface BenhSu {
  address: string;
  bankAccount: number;
  benhAns: BenhAn[];
  clientCode: string;
  contactName: string;
  email: string;
  note: string;
  openingBalance: string;
  phoneNumber: string;
  saleInvoices: string;
  tag: string;
  taxCode: string;
}

export interface BenhAn {
  benhAnId: number;
  chiTiet: ChiTiet[];
  chuanDoan: string;
  customField1: string;
  customField2: string;
  customField3: string;
  maBenhNhan: string;
  nextStep: string;
  ngay: string;
  soLuuTru: string;
  status: number;
}

export interface ChiTiet {
  benhAnId: number;
  customField1: string;
  customField2: string;
  customField3: string;
  customField4: string;
  customField5: string;
  id: number;
  ketQua: string;
  loai: string;
  loaiXetNghiem: string;
  productId: number;
  soLuong: number;
  tenFile: string;
  tenXetNghiem: string;
}
