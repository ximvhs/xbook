import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'xbook-core';
@Injectable()
export class MedicalRecordService extends BaseService {
  url = '/api/MD_BenhSu/';

  GetClientByPhoneNumberAsync(request: any): Observable<any> {
    return this.post(`${this.url}/GetClientByPhoneNumberAsync`, request);
  }
  CheckClientByPhoneNumber(request: any): Observable<any> {
    return this.post(`${this.url}/CheckClientByPhoneNumber`, request);
  }
}
