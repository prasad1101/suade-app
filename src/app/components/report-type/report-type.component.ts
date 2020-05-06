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

  reportData: any;
  cellData: any;
  reportCells: any;
  aggregatorData: any;
  conditionData: any;
  fireElementData: any;
  metricData: any;
  Data: any;

  ngOnInit() {
    this.activeDataLevelForReport == null;
    this.activeCellLevelForReport == null;
    this.level = undefined;
    this.data = undefined;

    this.getCellData().subscribe(x => {
      console.log("cellData", x)
      this.cellData = x;

    })

    this.getReportData().subscribe(y => {
      console.log("report data", y)
      this.reportData = y;
      setTimeout(() => {
        this.enableJQ()
      }, 1000);
    })

    this.getAggregatorData().subscribe(x => {
      this.aggregatorData = x;
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





  enableJQ() {
    $('.button').click(function () {
      $(this).toggleClass('expand')

    });

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
  getData(): Observable<any> {
    return this.http.get('../../assets/Data.json')
  }






  level: any;
  data: any;
  cell: any;
  signLevel = "+";
  signData = "+";
  activeCellLevelForReport: any;
  activeDataLevelForReport: any;
  toggleDataForSubData(level) {
    if (this.activeDataLevelForReport == level) {
      console.log("toggle collapse", level)
      this.activeDataLevelForReport = null;
    } else {
      console.log("toggle expand", level)
      this.activeDataLevelForReport = level;
    }
  }

  toggleCellForSubCell(level) {

    if (this.activeCellLevelForReport == level) {
      console.log("toggle collapse", level)
      this.activeCellLevelForReport = null;
    } else {
      console.log("toggle expand", level)
      this.activeCellLevelForReport = level;
    }

  }


  toggleReport(reportName) {
    if (this.level == reportName) {
      this.level = undefined;
      this.data = undefined;
      this.activeDataLevelForReport == null;
      this.activeCellLevelForReport == null;
      this.signLevel = "+";
    } else {
      this.data = undefined;
      this.level = reportName;
      this.signLevel = "-";
    }
  }


  toggleData(data, level) {
    if (this.data == data) {
      this.data = undefined
      this.signData = "+";
    } else {
      console.log("level,data", data)
      this.data = data;
      this.level = level;
      this.signData = "-";
    }
    // this.level = undefined;

  }

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

  toggleCell(cell, level) {
    if (this.cell == cell) {
      this.cell = undefined
    } else {
      console.log("cell and level on cell click", cell, level)
      this.cell = cell;
      this.level = level;
    }

  }

}
