import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calculateinterest';
  minloanAmount=500;
  maxloanAmont=5000;
  loanValue=1000;

  minMonth = 6;
  maxMonth=24;
  MonthValue=10;

  EmiResult:any = [];

  constructor(public _apiserv:ApiService)
  {

  }

  ngOnInit()
  {
  
  }


  LoanSlider(loanamount)
  {

    //value comes in loanamount from amount slider 
    this.EmiResult = [];
    console.log(loanamount)
    this._apiserv.EmiCalculator(loanamount,this.MonthValue).subscribe(data=>{
    
      this.EmiResult.push(data)
      console.log(this.EmiResult)


      
    })
  }

  MonthSlider(monthNumber)

  {
// values comes in monthNumber from month slider

    this.EmiResult = [];
    console.log(monthNumber)
    this._apiserv.EmiCalculator(this.loanValue,monthNumber).subscribe(data=>{
     
      this.EmiResult.push(data)
      console.log(this.EmiResult)

    })
  }
}
