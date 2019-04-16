function multiTable(number) {
    // good luck
    this.number = number;
    for(let i =1; i <= 10; i++){
      console.log(i + '*' + number + '=' + i*number);
    }
  }
  multiTable(5);