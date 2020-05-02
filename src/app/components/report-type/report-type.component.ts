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

  ngOnInit() {

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

  }



  removeDuplicates(array, key) {
    return array.reduce((accumulator, element) => {
      if (!accumulator.find(el => el[key] === element[key])) {
        accumulator.push(element);
      }
      return accumulator;
    }, []);
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

  level: any;
  data: any;
  cell: any;
  signLevel = "+";
  signData = "+";
  toggleReport(reportName) {
    if (this.level == reportName) {
      this.level = undefined;
      this.data = undefined;
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


}
