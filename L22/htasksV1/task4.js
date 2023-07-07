//Создать функцию, которая выведет в консоль номер этажа и номер подъезда по номеру квартиры.
//Этажей у нас 9, квартир на этаже по 3.

function options(roomNumber = 456, roomsOnFloor = 3, floors = 9) {
//узнаем колличество квартир в подъезде (27).
    let rooms_in_entrance = floors * roomsOnFloor;
//узнаем в каком подъезде находится квартира путем целого деления квартиры на кол-во квартир в подъезде.
    const entrance = ((roomNumber / rooms_in_entrance) | 0) + 1;
//остаток от деления квартиры на кол-во квартир в подъезде нацело делим на кол-во квартир на этаже, чтобы вычислить этаж.
    let f = roomNumber % rooms_in_entrance;
    const floor = ((f / roomsOnFloor) | 0) + 1;
    return floor, entrance;
}
console.log(options(398))