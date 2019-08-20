import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nserver-error',
  templateUrl: './nserver-error.component.html',
  styleUrls: ['./nserver-error.component.css']
})
export class NserverErrorComponent implements OnInit {

  public reportedError: boolean;
  public errorPercentage: number = 0;
  public timer;

  constructor() { }

  ngOnInit() {
  }

  public checkChanged = (event) => {
    this.reportedError = event.checked;

    this.reportedError ? this.startTimer(): this.stopTimer();
  }
  private startTimer = () => {
    this.timer = setInterval(()   => {
      this.errorPercentage += 1;

      if (this.errorPercentage === 100) {
        clearInterval(this.timer);
      }
    }, 30);
  }

  private stopTimer = () => {
    clearInterval(this.timer);
    this.errorPercentage = 0;
  }
    
  


}
