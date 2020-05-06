import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import 'datatables.net';
import 'datatables.net-bs4';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent implements OnInit {






  constructor(private http: HttpClient) { }

  reports: any;
  cellData: any;
  reportCells: any;
  aggregators: any;
  conditionData: any;
  fireElementData: any;
  metricData: any;
  cellForReport: any;
  dataForReport: any;

  ngOnInit() {
    this.getDataForReport().subscribe(x => {
      this.dataForReport = x;
      console.log("data for report", this.dataForReport)
    })

    this.getCellsForReport().subscribe(x => {
      this.cellForReport = x;
      console.log("cell for report", this.cellForReport)
    })

    this.getCellData().subscribe(x => {
      console.log("cellData", x)
      this.cellData = x;

    })

    this.getReportData().subscribe(y => {
      console.log("report data", y)
      this.reports = y;

    })

    this.getAggregatorData().subscribe(x => {
      this.aggregators = x;
      console.log("aggregator data", x);
    })

    this.getConditionData().subscribe(x => {
      this.conditionData = x;
      console.log("condition data", x);
    })
    this.getFireElementData().subscribe(x => {
      this.fireElementData = x;
      console.log("fireElement data", x);
    })
    this.getMetricData().subscribe(x => {
      this.metricData = x;
      console.log("metric data", x);
    })

  }



  getReportData(): Observable<any> {
    return this.http.get('../../assets/report-types.json')
  }

  getCellData(): Observable<any> {
    return this.http.get('../../assets/report-cells.json')
  }

  getAggregatorData(): Observable<any> {
    return this.http.get('../../assets/aggregator.json')
  }
  getConditionData(): Observable<any> {
    return this.http.get('../../assets/condition.json')
  }
  getFireElementData(): Observable<any> {
    return this.http.get('../../assets/fire-element.json')
  }
  getMetricData(): Observable<any> {
    return this.http.get('../../assets/metric.json')
  }

  getCellsForReport(): Observable<any> {
    return this.http.get('../../assets/cells.json')
  }

  getDataForReport(): Observable<any> {
    return this.http.get('../../assets/data.json')
  }


  // Operations

  tableConfig = {
    reportId: null,
    dataId: null,
    cellId: null,
    subCellId: null,
    showSubcellsForReportId: null,
    showSubDatacellsForReportId: null,
    aggId: null
  }

  openReport(reportId) {
    this.tableConfig = {
      reportId: null,
      dataId: null,
      cellId: null,
      subCellId: null,
      showSubcellsForReportId: null,
      showSubDatacellsForReportId: null,
      aggId: null
    }
    this.tableConfig.reportId = reportId;
  }

  openDataForReport(reportId, dataId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.dataId = dataId;
  }
  openCellsForReport(reportId) {

    this.tableConfig.showSubcellsForReportId = reportId;
  }

  openSubDatacellsForReport(reportId) {
    this.tableConfig.showSubDatacellsForReportId = reportId;
  }

  openSubCellsForReport(reportId, cellId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.cellId = cellId;
  }
  openSubCellDataForReport(reportId, subCellId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.subCellId = subCellId;
    console.log(this.tableConfig)
  }
  openAggData(reportId, aggId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.aggId = aggId;
    console.log(this.tableConfig)
  }
}
