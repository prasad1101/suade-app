import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import 'datatables.net';
import 'datatables.net-bs4';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DalService } from 'src/app/services/dal.service';

@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent implements OnInit {






  constructor(private http: HttpClient, private dal: DalService) { }



  reports: any;
  cellForReport: any;
  dataForReport: any;
  subCellForReport: any;

  ngOnInit() {

    this.getReport();


  }



  getReport() {
    return this.dal.getReportData().subscribe(x => {
      console.log("report data", x)
      this.reports = x;
    })
  }
  getDataForReport(reportId) {
    this.dal.getDataForReport(reportId).subscribe(x => {
      this.dataForReport = x;
      console.log("data for report", this.dataForReport)
    })
  }

  getCellForReport(reportId) {
    this.dal.getCellForReport(reportId).subscribe(x => {
      this.cellForReport = x;
      console.log("cell for report", this.cellForReport)
    })
  }

  getSubCellForReport(reportId, cellId) {
    this.dal.getSubCellForReport(reportId, cellId).subscribe(x => {
      this.subCellForReport = x;
      console.log("subcell for report", this.subCellForReport)
    })
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

  // table config 

  tableConfig = {
    reportId: null,
    dataFor: null,
    cellFor: null,
    subCellForReport: null,
    subCell: null,
    subCellId: null
  }


  // Operations

  openReport(reportId) {
    if (reportId === this.tableConfig.reportId) {
      this.tableConfig.reportId = null
      this.dataForReport = null
      this.cellForReport = null
      this.tableConfig.dataFor = null
      this.tableConfig.cellFor = null
    } else {
      this.tableConfig.reportId = reportId;
    }
  }

  openData(reportId) {
    if (reportId === this.tableConfig.dataFor) {
      this.tableConfig.dataFor = null
      this.dataForReport = null
    } else {
      this.tableConfig.dataFor = reportId;
      this.getDataForReport(reportId);
    }
  }

  openCell(reportId) {
    if (reportId === this.tableConfig.cellFor) {
      this.tableConfig.cellFor = null
      this.cellForReport = null
    } else {
      this.tableConfig.cellFor = reportId;
      this.getCellForReport(reportId);
    }
  }

  openSubCell(reportId, cellId) {
    if (cellId === this.tableConfig.subCell && reportId === this.tableConfig.subCellForReport) {
      this.tableConfig.subCell = null
      this.tableConfig.subCellForReport = null
    } else {
      this.tableConfig.subCell = cellId
      this.tableConfig.subCellForReport = reportId
      this.getSubCellForReport(reportId, cellId);
      console.log("subcell", reportId, cellId)
    }

  }


  openSubCellData(reportId, cellId, subcellId) {
    if (subcellId === this.tableConfig.subCellId) {
      this.tableConfig.subCellId = null;
    } else {
      this.tableConfig.subCellId = subcellId
    }
  }

}
