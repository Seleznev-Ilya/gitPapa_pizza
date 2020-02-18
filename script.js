'use strict';
let backG = document.querySelector('header');
let taskGoods = {};

function createCards() {
    backG.style.backgroundPositionY = 'bottom';
    backG.style.backgroundPositionX = 'center';


    function up() {
        setTimeout(function () {
            switchB = 0;
            test.style.top = `${0}px`;
            test.style.opacity = `${0}`;
        }, 200)
    }

    up();


    function fub1() {

        let container = document.createElement('div');
        container.classList.add("container");

        function drow() {
            let wrapper = document.createElement('div');
            wrapper.classList.add("goods_wrapper");
            container.append(wrapper);
            let caunterItems = 1;

            for (let list in taskGoods) {
                let item = document.createElement('div');
                item.classList.add("card");
                item.classList.add(`item_${caunterItems}`);

                let front = document.createElement('div');
                front.classList.add("front");
                front.classList.add(`front_${caunterItems}`);



                    let p = document.createElement('p');
                    p.classList.add("p_name");

                    p.innerText = `Пицца:${taskGoods[list]['name']}`;
                    front.append(p);





                let form = document.createElement('form');

                        for (let i = 0; i < 4; i++) {

                            let arr = ['cheese', 'meat', 'tomato', 'onion'];
                            let input = document.createElement('input');
                            input.type = "checkbox";
                            input.name = arr[i];
                            input.title = arr[i];
                            input.classList.add(`${arr[i]}${i + 1}`);
                            form.append(input);

                            let lable = document.createElement('lable');
                            lable.innerText = `${arr[i]}`;
                            form.append(lable);

                            let br1 = document.createElement('br');
                            form.append(br1);
                        }

                let priceName = document.createElement('span');
                priceName.classList.add('priceName');
                priceName.innerText = 'Цена:';
                front.append(priceName);

                let calName = document.createElement('span');
                calName.classList.add('calName');
                calName.innerText = 'Калории:';
                front.append(calName);



                    let button = document.createElement('button');
                    button.classList.add(`btnForm_${caunterItems}`);
                    button.classList.add(`btnForm`);
                    button.innerText = "Выбрать";



                    let br = document.createElement('br');
                    front.append(button);
                    front.append(br);
                    front.append(form);





                let back = document.createElement('div');
                back.classList.add("back");
                back.classList.add(`back_${caunterItems}`);
                let backImg = document.createElement('div');
                backImg.classList.add("backImg");
                backImg.style.backgroundImage = 'url("img/123.jpg")';
                back.append(backImg);

                item.append(front);
                item.append(back);
                wrapper.append(item);
                caunterItems++;
            }
        }
        globalContainer.append(container);
        drow();
        rotate();
         function rotate(){
             document.querySelector('.btnForm_1').onclick = function () {
                 document.querySelector('.front_1').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_1').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_1').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_1').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_2').onclick = function () {
                 document.querySelector('.front_2').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_2').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_2').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_2').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_3').onclick = function () {
                 document.querySelector('.front_3').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_3').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_3').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_3').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_4').onclick = function () {
                 document.querySelector('.front_4').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_4').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_4').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_4').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_5').onclick = function () {
                 document.querySelector('.front_5').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_5').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_5').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_5').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_6').onclick = function () {
                 document.querySelector('.front_6').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_6').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_6').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_6').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_7').onclick = function () {
                 document.querySelector('.front_7').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_7').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_7').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_7').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_8').onclick = function () {
                 document.querySelector('.front_8').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_8').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_8').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_8').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_9').onclick = function () {
                 document.querySelector('.front_9').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_9').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_9').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_9').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_10').onclick = function () {
                 document.querySelector('.front_10').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_10').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_10').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_10').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_11').onclick = function () {
                 document.querySelector('.front_11').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_11').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_11').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_11').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_12').onclick = function () {
                 document.querySelector('.front_12').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_12').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_12').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_12').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_13').onclick = function () {
                 document.querySelector('.front_13').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_13').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_13').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_13').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_14').onclick = function () {
                 document.querySelector('.front_14').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_14').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_14').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_14').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_15').onclick = function () {
                 document.querySelector('.front_15').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_15').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_15').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_15').style.transform = "rotateY(180deg)";
                 },2000)
             };
             document.querySelector('.btnForm_16').onclick = function () {
                 document.querySelector('.front_16').style.transform = "rotateY(180deg)";
                 document.querySelector('.back_16').style.transform = "rotateY(360deg)";
                 setTimeout(()=>{
                     document.querySelector('.front_16').style.transform = "rotateY(0deg)";
                     document.querySelector('.back_16').style.transform = "rotateY(180deg)";
                 },2000)
             };
         }
    }

    fetch('tsconfig.json')
        .then(function (responseq) {
            return responseq.json();
        }).then(function (obj) {
        taskGoods = obj;
        fub1();
    });


}

function listCards() {
    function up() {
        setTimeout(function () {
            switchB = 0;
            test.style.top = `${0}px`;
            test.style.opacity = `${0}`;
        }, 200)
    }

    up();

    function fub1() {
        backG.style.backgroundPositionY = 'top';
        backG.style.backgroundPositionX = 'center';


        let arr = [];

        function creatArr() {
            for (let i = 1; i <= 16; i++) {
                arr.push([taskGoods[i].name, taskGoods[i].cost]);
            }
        }

        creatArr();

        let container = document.createElement('div');
        container.classList.add('container2');

        function startList() {


            let btnWrapper = document.createElement('div');
            btnWrapper.classList.add('btnWrapper');


            let btnName = document.createElement('div');
            btnName.classList.add('name');
            btnName.innerText = 'Название';
            btnWrapper.append(btnName);


            let btnPrice = document.createElement('div');
            btnPrice.classList.add('price');
            btnPrice.innerText = 'Цена';
            btnWrapper.append(btnPrice);

            globalContainer.append(btnWrapper);
            draw();


        }

        startList();


        function creatPizza(i) {
            let line = document.createElement('div');
            line.classList.add('line');
            let img = document.createElement('img');
            img.src = 'img/pz.png';
            img.alt = 'pizza';
            line.append(img);

            let nameOf = document.createElement('span');
            nameOf.classList.add('span');

            nameOf.innerHTML = `${arr[i][0]}:`;
            line.append(nameOf);

            let price = document.createElement('span');
            price.classList.add('span');

            price.innerHTML = `${arr[i][1]} grn`;
            line.append(price);

            container.append(line);

        }


        function draw() {
            for (let i = 0; i < 16; i++) {
                creatPizza(i);
            }
        }

        globalContainer.append(container);


        document.querySelector('.name').onclick = sortArrName;
        document.querySelector('.price').onclick = sortArrPrice;

        let i1 = 0;
        let i2 = 0;

        function sortArrName() {

            container.innerHTML = '';


            if (i1 === 0) {
                arr.sort(function (a, b) {
                    b = b[0];
                    a = a[0];

                    return a > b ? 1 : -1;
                });
                i1 += 1;
                draw();
            } else {
                arr.sort(function (a, b) {
                    b = b[0];
                    a = a[0];

                    return a < b ? 1 : -1;
                });
                i1 -= 1;
                draw();
            }

        }

        function sortArrPrice() {
            container.innerHTML = '';

            if (i2 === 0) {
                arr.sort(function (a, b) {
                    b = b[1];
                    a = a[1];

                    return a > b ? 1 : -1;
                });
                i2 += 1;
                draw();
            } else {
                arr.sort(function (a, b) {
                    b = b[1];
                    a = a[1];

                    return a < b ? 1 : -1;
                });
                i2 -= 1;
                draw();
            }
        }
    }

    fetch('tsconfig.json')
        .then(function (response) {
            return response.json();
        }).then(function (obj) {
        taskGoods = obj;
        fub1();
    });


}



