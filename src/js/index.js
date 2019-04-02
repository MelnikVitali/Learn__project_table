import "../scss/styles.scss";
import "../bootstrap/bootstrap.js";


'use strict';

///////////////////////////////////поиск совпадений по таблице

let phrase = document.getElementById('search-text');//поле поиска по таблице
let table = document.getElementById('info-table');//получаем таблицу

phrase.addEventListener("keyup", tableSearch);//обработчик при отпускании клавиши

function tableSearch() {
    let regPhrase = new RegExp(phrase.value, 'i');//метод перевода знач.поиска в regexp
    let toggle = false;// устанавливаем флаг
    for (let i = 1; i < table.rows.length; i++) {//проход по строке
        for (let j = 0; j < table.rows[i].cells.length; j++) {//проход по ячейкам
            toggle = regPhrase.test(table.rows[i].cells[j].innerHTML);//поиск совпадений
            if (toggle === true) break;//прекратить цыкл при совпадении
        }
        if (toggle === true) {
            table.rows[i].style.display = "";//при совпадении оставить строку
        } else {
            table.rows[i].style.display = "none";//иначе спрятать
        }
    }
}


////////////////////////сортировка таблицы, нажатие на заголовки

let allTh = document.getElementsByTagName('th');//получаем массив заголов. ячеек

for (let th = 0; th < allTh.length; th++) {
    allTh[th].addEventListener('click', sortTable);//перебираем и ставим обраб. на клик
}

function sortTable() {
    console.log(`Для сортировки нажата ячейка ${this.cellIndex}`); //номер заголовочной ячейки при нажатии

    let table = document.querySelector('#info-table'),
        switching = true,
        rows,
        shouldSwitch,
        cell,
        x,
        y;
    //цикл пока не переключится переключатель
    while (switching) {
        switching = false; //переключатель выключен
        rows = table.rows;
        //перебор всех строк кроме первой -  th
        for (cell = 1; cell < (rows.length - 1); cell++) {
            //переключение не сделано
            shouldSwitch = false;
            //получение елементов для сравнения
            x = rows[cell].getElementsByTagName("TD")[this.cellIndex];//перебор ячеек с номером заголовочной
            y = rows[cell + 1].getElementsByTagName("TD")[this.cellIndex];//следующая в колонке

            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { //проверка на смену мест двух рядов
                shouldSwitch = true; // помечаем как выполнено переключателем и разрываем цикл:
                break;
            }
        }
        if (shouldSwitch) {
            //если переключатель был отмечен поднимаем ячейку вверх на одну позицию перед сравниваемой
            rows[cell].parentNode.insertBefore(rows[cell + 1], rows[cell]);
            switching = true; //переключение сделано
        }
    }
}

/////////////////////////////////////////////////////////редактирование ячейки

let allCell = document.querySelectorAll('#info-table td');//все ячейки таблицы

function changeValue(event) {
    let target = event.target;
    target.setAttribute("contenteditable", true);//установка атрибута для редактирования
}

function changeEnd(event) {
    let target = event.target;
    target.removeAttribute("contenteditable");//удаление атрибута для редактирования
}

for (let cell of allCell) {
    cell.addEventListener("click", changeValue); //при клике добавляем атрибут "contenteditable"
    cell.addEventListener("blur", changeEnd, true); //при потере фокуса удаляем "contenteditable"
}


////////////////////////удаление и добавление строк таблицы


//DELETE TABLE ROW
let tables = document.getElementById('info-table');
let indexRow;
//проход по строкам таблицы
for (let i = 1; i < table.rows.length; i++) {
    tables.rows[i].cells[8].addEventListener('click', deleteRow);//номер строки таблицы при клике на ячейку индекс 8
}

function deleteRow() {
    let question = confirm("Вы действительно хотите удалить строку ?");//вопрос перед удалением
    if (question === true) {//подтверждение
        indexRow = this.parentElement.rowIndex;//индекс строки в таблице родителя 8 ячейки
        table.deleteRow(indexRow);//удаляем строку
        console.log(`Индекс удаленной строки таблицы = ${indexRow}`);//какой индекс строки
    }

}

// ADD A NEW ROW TO THE TABLE.
let btnAdd = document.querySelector('.button-add');
btnAdd.addEventListener('click', addRow);

function addRow() {
    let table = document.getElementById('info-table');

    let rowCnt = table.rows.length;        // GET TABLE ROW COUNT.
    let tr = table.insertRow(rowCnt);      // TABLE ROW.
    let allTh = document.querySelectorAll('th');

    for (let i = 0; i < allTh.length; i++) {
        let td = document.createElement('td');          // TABLE DEFINITION.
        td = tr.insertCell(i);

        if (i === 0) {           // FIRST COLUMN.
                                 // ADD A BUTTON.
            let button = document.createElement('input');

            // SET INPUT ATTRIBUTE.
            button.setAttribute('type', 'button');
            button.setAttribute('value', 'Remove');

            // ADD THE BUTTON's 'onclick' EVENT.
            button.setAttribute('onclick', 'removeRow(this)');

            td.appendChild(button);
        } else {
            // CREATE AND ADD TEXTBOX IN EACH CELL.
            let ele = document.createElement('input');
            ele.setAttribute('type', 'text');
            ele.setAttribute('value', '');

            td.appendChild(ele);
        }
    }
}


/*//ADD TABLE ROW

let btnAdd = document.querySelector('.button-add');
btnAdd.addEventListener('click', createRow);

function createRow() {
    let addRow = document.createElement("tr");
    let newRow = table.insertRow(1);
    for (let td = 0; td < 9; td++) {
        let newCell = newRow.insertCell(td);
        newCell.innerHTML = '';
    }
    document.querySelector('.table-user').appendChild(addRow);
}*/


/*class  Rectangle {
    constructor(height, width = 20){
        this.height = height;
        this.width = width;
    }
    calcArea(){
        return(`Квадратный корень равен = ${this.width * this.height} пупукселям`);
    }
}

const  square = new Rectangle(10);

console.log(square.calcArea());*/


/*table.addEventListener("click", function(e) {
        e.target.innerHTML = "";
    });*/


/*window.onload = function () {
    let newTable = document.createElement('table');
    for (let y = 0; y <= 1; y++) {
        let newRow = newTable.insertRow(y);
        for (let x = 0; x <= 9; x++) {
            let newCell = newRow.insertCell(x);
            newCell.classList.add('mulTd');
            newCell.width = 50;
            newCell.height = 10;


        }
    }
    document.body.appendChild(newTable);
    newTable.classList.add('mul');
};*/
