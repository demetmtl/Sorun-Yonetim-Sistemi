export class Page {

  constructor() {
    this.page= 0;
    this.size = 10;
  }

  //Sayfadaki öğe sayısı
  size: number = 0;
  //Toplam eleman sayısı
  totalElements: number = 0;
  //Toplam sayfa sayısı
  totalPages: number = 0;
  //Geçerli sayfa numarası
  page: number = 0;
}
