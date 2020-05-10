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
    return this.http.get('../../assets/report-type.json')
  }

  getCellData(): Observable<any> {
    return this.http.get('../../assets/report-cell-details.json')
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
  getData(): Observable<any> {
    return this.http.get('../../assets/Data.json')
  }


  getCellsForReport(): Observable<any> {
    return this.http.get('../../assets/report-cell.json')
  }

  getDataForReport(): Observable<any> {
    return this.http.get('../../assets/report-data.json')
  }

  //for search

  serachText: string;
  searchReport() {
    var input, filter, table, tr, td, i, txtValue;
    //input = document.getElementById("searchInput");
    filter = this.serachText.toUpperCase();
    table = document.getElementById("dataTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  // Operations

  tableConfig = {
    reportId: null,
    dataId: null,
    cellId: null,
    subCellId: null,
    showSubcellsForReportId: null,
    showSubDatacellsForReportId: null,
    aggId: null,
    subAggId: null
  }

  openReport(reportId) {
    if (reportId === this.tableConfig.reportId) {
      this.tableConfig.subCellId = null
      this.tableConfig.subCellId = null;
      this.tableConfig.subAggId = null;
      this.tableConfig.reportId = null;
    } else {
      this.tableConfig = {
        reportId: null,
        dataId: null,
        cellId: null,
        subCellId: null,
        showSubcellsForReportId: null,
        showSubDatacellsForReportId: null,
        aggId: null,
        subAggId: null
      }
      this.tableConfig.reportId = reportId;
    }

  }

  openDataForReport(reportId, dataId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.dataId = dataId;
  }
  openCellsForReport(reportId) {
    if (reportId === this.tableConfig.showSubcellsForReportId) {
      this.tableConfig.subCellId = null
      this.tableConfig.subCellId = null;
      this.tableConfig.subAggId = null;
      this.tableConfig.showSubcellsForReportId = null;
    } else {
      this.tableConfig.showSubcellsForReportId = reportId;
    }

  }

  openSubDatacellsForReport(reportId) {
    if (reportId === this.tableConfig.showSubDatacellsForReportId) {
      this.tableConfig.showSubDatacellsForReportId = null;
    } else {
      this.tableConfig.showSubDatacellsForReportId = reportId;
    }

  }

  openSubCellsForReport(reportId, cellId) {
    if (cellId === this.tableConfig.cellId) {
      this.tableConfig.subCellId = null
      this.tableConfig.subCellId = null;
      this.tableConfig.subAggId = null;
      this.tableConfig.cellId = null
    } else {
      this.tableConfig.reportId = reportId;
      this.tableConfig.cellId = cellId;
    }

  }
  openSubCellDataForReport(reportId, subCellId, subAggId) {
    if (subCellId === this.tableConfig.subCellId) {
      this.tableConfig.subCellId = null
      this.tableConfig.subCellId = null;
      this.tableConfig.subAggId = null;
    } else {
      this.tableConfig.reportId = reportId;
      this.tableConfig.subCellId = subCellId;
      this.tableConfig.subAggId = subAggId;
      console.log("sub agg>>>>>>", this.tableConfig)
    }

  }
  openAggData(reportId, aggId) {
    this.tableConfig.reportId = reportId;
    this.tableConfig.aggId = aggId;
    console.log(this.tableConfig)
  }
}
