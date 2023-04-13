import { Component, OnInit } from '@angular/core';
import { BuyPackagesService } from '../../service/buy-packages.service';
import { PackagesService } from '../../service/packages.service';

@Component({
  selector: 'app-bought-package-detail',
  templateUrl: './bought-package-detail.component.html',
  styleUrls: ['./bought-package-detail.component.scss']
})
export class BoughtPackageDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
}
