const ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this; // вернёт объект 'ladder' и снова можно обратиться к методу объекта
  },
  down: function () {
    this.step--;
    return this; // вернёт объект 'ladder' и снова можно обратиться к методу объекта
  },
  showStep: function () {
    alert(this.step);
    return this; // вернёт объект 'ladder' и снова можно обратиться к методу объекта
  },
};
/* ladder.up();
  ladder.up();
  ladder.down();
  ladder.showStep(); */ //Изменяем способ вызова методов
ladder.up().up().down().showStep(); //1
