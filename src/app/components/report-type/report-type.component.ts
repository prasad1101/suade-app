import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
  selector: 'app-report-type',
  templateUrl: './report-type.component.html',
  styleUrls: ['./report-type.component.css']
})
export class ReportTypeComponent implements OnInit {


  data = [
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421"
    },
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421"
    },
    {
      id: 1,
      name: "Tiger Nixon",
      position: "System Architect",
      salary: "$320,800",
      start_date: "2011/04/25",
      office: "Edinburgh",
      extn: "5421"
    },

  ]



  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

      $('.row').click(function () {
        $(this).toggleClass('expand').nextUntil('tr.row').slideToggle(100);
      });
    });

  }



}
