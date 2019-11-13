import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exchange-open-order",
  templateUrl: "./exchange-open-order.component.html",
  styleUrls: ["./exchange-open-order.component.scss"]
})
export class ExchangeOpenOrderComponent implements OnInit {
  openOrdersSell = [1];
  openOrdersBuy = [1];

  constructor() {}

  ngOnInit() {}
}
