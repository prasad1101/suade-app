import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { environment } from '../../environments/environment'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DalService {

  constructor(private customHttp: CustomHttpService) { }

  getReportData(): Observable<any> {
    return this.customHttp.get(`${environment.url}/reports`);
  }

  getDataForReport(reportId): Observable<any> {
    return this.customHttp.get(`${environment.url}/data`, { reportId: reportId })
  }

  getCellForReport(reportId): Observable<any> {
    return this.customHttp.get(`${environment.url}/cells`, { reportId: reportId })
  }

  getSubCellForReport(reportId, cellId): Observable<any> {
    return this.customHttp.get(`${environment.url}/subCells`, { reportId: reportId, cellId: cellId })
  }

  getSubCellDataForReport(reportId, cellId, subCellId): Observable<any> {
    return this.customHttp.get(`${environment.url}/subCellData`, { reportId: reportId, cellId: cellId, subCellId: subCellId })
  }

}
