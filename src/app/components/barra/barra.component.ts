import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { userService } from '../../services/user';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css'],
  providers: [userService]
})
export class BarChartComponent {

  userList: any = [];

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['seguidores '],
    datasets: [
      { data: [0], label: 'Usuario 1' },
      { data: [0], label: 'Usuario 2' },
      { data: [0], label: 'Usuario 3' },
      { data: [0], label: 'Usuario 4' },
      { data: [0], label: 'Usuario 5' },
      { data: [0], label: 'Usuario 6' },
      { data: [0], label: 'Usuario 7' },
      { data: [0], label: 'Usuario 8' },
      { data: [0], label: 'Usuario 9' },
      { data: [0], label: 'Usuario 10' }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  graficaFollowers(input: any) {
    console.log(input);
    let item = input;

    this.userServicios.getUsers(item).subscribe(data => this.userList = data);

    let usernames: any = [];
    let followers: any = [];

    setTimeout(() => {
      console.log(this.userList);

      if (this.userList.items.length < 10) {

        for (let i = 0; i < this.userList.items.length; i++) {
          usernames.push(this.userList.items[i].login);
        }


        for (let i = 0; i < this.userList.items.length; i++) {
          this.userServicios.getUser(usernames[i]).subscribe(data => followers.push(data));
        }

      } else {

        for (let i = 0; i < 10; i++) {
          usernames.push(this.userList.items[i].login);
        }

        for (let i = 0; i < 10; i++) {
          this.userServicios.getUser(usernames[i]).subscribe(data => followers.push(data));
        }
      }

      alert("Espera un momento en lo que la grafica se actualiza");

      setTimeout(() => {
        console.log(followers);
        console.log(usernames);
        // cambiar datos de barra por unsers
        if (this.userList.items.length < 10) {

          for (let i = 0; i < this.userList.items.length; i++) {
            this.barChartData.datasets[i].label = followers[i].login;
          }

          for (let i = 0; i < this.userList.items.length; i++) {
            let followers_data = this.barChartData.datasets[i];
            followers_data.data = [followers[i].followers];

            if (this.userList.items.length < 10) {

              let followers_data = this.barChartData.datasets[i];
              followers_data.data = [followers[i].followers];
            }
          }
          this.chart?.update();

        } else {
          if (this.userList.items.length > 10) {

            for (let i = 0; i < 10; i++) {
              this.barChartData.datasets[i].label = followers[i].login;
            }

            for (let i = 0; i < 10; i++) {
              let followers_data = this.barChartData.datasets[i];
              followers_data.data = [followers[i].followers];
            }
            this.chart?.update();

          }
        }
      }

        , 2000);
    }, 1000);
  }

  constructor(private userServicios: userService) {
  }

  ngOnInit(): void {
  }

}