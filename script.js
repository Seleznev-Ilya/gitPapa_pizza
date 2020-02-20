'use strict';
let backG = document.querySelector('header');
let taskGoodsNew = {};
let taskGoods;
function  fub1(){
    taskGoods = Object.assign({}, taskGoodsNew);
    console.log( taskGoods);
}
fetch('tsconfig.json')
    .then(function (response) {
        return response.json();
    }).then(function (obj) {
    taskGoodsNew = obj;
    fub1();
});





function calc() {
    for (let keys in taskGoods) {
        let arr = ['cheese', 'meat', 'tomato', 'onion'];
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += taskGoods[keys]['composition'][arr[i]];
        }
        if (sum === 0) {
            taskGoods[keys].price = 33;
            taskGoods[keys].cal = (sum * 75) + 300;
        } else {
            taskGoods[keys].price = (sum * 33) + 33;
            taskGoods[keys].cal = (sum * 75) + 300;
        }
    }
}
function createCards() {
    function checkBoxCheck() {
        let goodsWrapper = document.querySelector('.goods_wrapper');
        for (let keys in taskGoods) {
            let arr = ['cheese', 'meat', 'tomato', 'onion'];
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += taskGoods[keys]['composition'][arr[i]];
            }
            if (sum === 1) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 2) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 3) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 4) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 5) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 6) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 7) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            } else if (sum === 8) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 9) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 10) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 12) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 14) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 15) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 11) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 13) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = true;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = true;
            } else if (sum === 0) {
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[0].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[3].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[6].checked = false;
                goodsWrapper.children[keys - 1].firstElementChild.lastElementChild.childNodes[9].checked = false;
            }
        }
    }
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

        function createSearch() {
            let btnWrapperGrid = document.createElement('div');
            setTimeout(() => {
                btnWrapperGrid.classList.add('btnWrapperGrid1');
            }, 20);
            btnWrapperGrid.classList.add('btnWrapperGrid');

            let btnNameGrid = document.createElement('div');
            btnNameGrid.classList.add('nameGrid');
            btnNameGrid.innerText = "Применить";

            let formGrid = document.createElement('div');
            formGrid.classList.add('formGrid');

            for (let i = 0; i < 4; i++) {

                let arrGrid = ['cheese', 'meat', 'tomato', 'onion'];
                let input = document.createElement('input');
                input.type = "checkbox";
                input.name = arrGrid[i];
                input.title = arrGrid[i];
                input.classList.add(`${arrGrid[i]}${i + 1}`);
                formGrid.append(input);

                let lableGrid = document.createElement('lable');
                lableGrid.innerText = `${arrGrid[i]}`;
                formGrid.append(lableGrid);

                let br1 = document.createElement('br');
                formGrid.append(br1);
            }
            btnWrapperGrid.append(formGrid);
            btnWrapperGrid.append(btnNameGrid);
            globalContainer.append(btnWrapperGrid);
        }

        createSearch();


        document.querySelector('.nameGrid').onclick = function () {
            // for ( let keys in taskGoods){
            //     let arr = ['cheese', 'meat', 'tomato', 'onion'];
            //     let sum = 0;
            //     for (let i = 0; i < arr.length; i++){
            //         sum += taskGoods[keys]['composition'][arr[i]];
            //
            //     }
            //     console.log(sum);
            // }
        };


        function draw() {
            let wrapper = document.createElement('div');
            wrapper.classList.add("goods_wrapper");
            container.append(wrapper);
            let counterItems = 1;

            for (let list in taskGoods) {
                let item = document.createElement('div');
                item.classList.add("card");
                item.classList.add(`item_${counterItems}`);

                let front = document.createElement('div');
                front.classList.add("front");
                front.classList.add(`front_${counterItems}`);

                let back = document.createElement('div');
                back.classList.add("back");
                back.classList.add(`back_${counterItems}`);
                let backImg = document.createElement('div');
                backImg.classList.add("backImg");
                backImg.style.backgroundImage = 'url("img/123.jpg")';
                back.append(backImg);

                let p = document.createElement('p');
                p.classList.add("p_name");

                p.innerText = `Пицца:${taskGoods[list]['name']}`;

                let p1 = document.createElement('p');
                p1.classList.add("p_name");

                p1.innerText = `Пицца:${taskGoods[list]['name']}`;
                front.append(p);
                back.append(p1);

                let form = document.createElement('form');
                form.classList.add(`form_${list}`);
                form.name = `${list}`;


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
                if (taskGoods[list]['price'] === 33) {
                    priceName.innerText = `Цена: (основа) ${taskGoods[list]['price']} грн`;
                } else {
                    priceName.innerText = `Цена: ${taskGoods[list]['price']} грн`;
                }


                front.append(priceName);

                let calName = document.createElement('span');
                calName.classList.add('calName');
                calName.innerText = `Калории: ${taskGoods[list]['cal']}`;
                front.append(calName);

                let button = document.createElement('button');
                button.classList.add(`btnForm_${counterItems}`);
                button.classList.add(`btnForm`);
                button.innerText = "Обноваит";

                let br = document.createElement('br');
                front.append(button);
                front.append(br);
                front.append(form);

                item.append(front);
                item.append(back);
                wrapper.append(item);
                counterItems++;
            }

        }

        globalContainer.append(container);
        function checBox(a) {
            //    check boxes and change price and cal
            let arr = ['cheese', 'meat', 'tomato', 'onion'];
            if (a['cheese'].checked && !a['meat'].checked && !a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            } else if (!a['cheese'].checked && a['meat'].checked && !a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && !a['meat'].checked && a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && !a['meat'].checked && !a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && a['meat'].checked && !a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && !a['meat'].checked && a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 3;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && !a['meat'].checked && !a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && a['meat'].checked && !a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && !a['meat'].checked && a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && a['meat'].checked && a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && a['meat'].checked && !a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && !a['meat'].checked && a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && a['meat'].checked && a['tomato'].checked && a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 8;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (a['cheese'].checked && a['meat'].checked && a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 1;
                taskGoods[a.name]['composition']['meat'] = 2;
                taskGoods[a.name]['composition']['tomato'] = 4;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price = (sum * 33) + 33;
                taskGoods[a.name].cal = (sum * 75) + 300;
            }else if (!a['cheese'].checked && !a['meat'].checked && !a['tomato'].checked && !a['onion'].checked) {
                taskGoods[a.name]['composition']['cheese'] = 0;
                taskGoods[a.name]['composition']['meat'] = 0;
                taskGoods[a.name]['composition']['tomato'] = 0;
                taskGoods[a.name]['composition']['onion'] = 0;
                let sum = 0;
                for (let i = 0; i < arr.length; i++) {
                    sum += taskGoods[a.name]['composition'][arr[i]];
                }
                taskGoods[a.name].price =  33;
                taskGoods[a.name].cal =  300;
            }

            setTimeout(() => {
                document.querySelector('.container').innerHTML = '';

                draw();
                checkBoxCheck();
                rotate();
            }, 2700)

        }
        calc();
        draw();
        checkBoxCheck();
        rotate();


        // console.log(taskGoods['1'].price);
        function rotate() {
            document.querySelector('.btnForm_1').onclick = function () {
                checBox(document.querySelector('.front_1 form'));
                document.querySelector('.front_1').style.transform = "rotateY(180deg)";
                document.querySelector('.back_1').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_1').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_1').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_2').onclick = function () {
                checBox(document.querySelector('.front_2 form'));
                document.querySelector('.front_2').style.transform = "rotateY(180deg)";
                document.querySelector('.back_2').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_2').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_2').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_3').onclick = function () {
                checBox(document.querySelector('.front_3 form'));
                document.querySelector('.front_3').style.transform = "rotateY(180deg)";
                document.querySelector('.back_3').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_3').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_3').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_4').onclick = function () {
                checBox(document.querySelector('.front_4 form'));

                document.querySelector('.front_4').style.transform = "rotateY(180deg)";
                document.querySelector('.back_4').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_4').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_4').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_5').onclick = function () {
                checBox(document.querySelector('.front_5 form'));

                document.querySelector('.front_5').style.transform = "rotateY(180deg)";
                document.querySelector('.back_5').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_5').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_5').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_6').onclick = function () {
                checBox(document.querySelector('.front_6 form'));

                document.querySelector('.front_6').style.transform = "rotateY(180deg)";
                document.querySelector('.back_6').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_6').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_6').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_7').onclick = function () {
                checBox(document.querySelector('.front_7 form'));

                document.querySelector('.front_7').style.transform = "rotateY(180deg)";
                document.querySelector('.back_7').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_7').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_7').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_8').onclick = function () {
                checBox(document.querySelector('.front_8  form'));

                document.querySelector('.front_8').style.transform = "rotateY(180deg)";
                document.querySelector('.back_8').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_8').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_8').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_9').onclick = function () {
                checBox(document.querySelector('.front_9 form'));

                document.querySelector('.front_9').style.transform = "rotateY(180deg)";
                document.querySelector('.back_9').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_9').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_9').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_10').onclick = function () {
                checBox(document.querySelector('.front_10 form'));

                document.querySelector('.front_10').style.transform = "rotateY(180deg)";
                document.querySelector('.back_10').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_10').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_10').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_11').onclick = function () {
                checBox(document.querySelector('.front_11 form'));

                document.querySelector('.front_11').style.transform = "rotateY(180deg)";
                document.querySelector('.back_11').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_11').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_11').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_12').onclick = function () {
                checBox(document.querySelector('.front_12 form'));

                document.querySelector('.front_12').style.transform = "rotateY(180deg)";
                document.querySelector('.back_12').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_12').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_12').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_13').onclick = function () {
                checBox(document.querySelector('.front_13 form'));

                document.querySelector('.front_13').style.transform = "rotateY(180deg)";
                document.querySelector('.back_13').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_13').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_13').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_14').onclick = function () {
                checBox(document.querySelector('.front_14 form'));

                document.querySelector('.front_14').style.transform = "rotateY(180deg)";
                document.querySelector('.back_14').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_14').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_14').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_15').onclick = function () {
                checBox(document.querySelector('.front_15 form'));

                document.querySelector('.front_15').style.transform = "rotateY(180deg)";
                document.querySelector('.back_15').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_15').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_15').style.transform = "rotateY(180deg)";
                }, 2000)
            };
            document.querySelector('.btnForm_16').onclick = function () {
                checBox(document.querySelector('.front_16 form'));

                document.querySelector('.front_16').style.transform = "rotateY(180deg)";
                document.querySelector('.back_16').style.transform = "rotateY(360deg)";
                setTimeout(() => {
                    document.querySelector('.front_16').style.transform = "rotateY(0deg)";
                    document.querySelector('.back_16').style.transform = "rotateY(180deg)";
                }, 2000)
            };
        }
    }
    fub1();
    // fetch('tsconfig.json')
    //     .then(function (responseq) {
    //         return responseq.json();
    //     }).then(function (obj) {
    //     taskGoods = obj;
    //     fub1();
    // });

    // let taskGoodsNew = Object.assign({}, taskGoods);
    // console.log( taskGoodsNew);
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
        calc();

        function creatArr() {
            for (let i = 1; i <= 16; i++) {
                arr.push([taskGoods[i].name, taskGoods[i].price]);
            }
        }

        creatArr();

        let container = document.createElement('div');
        container.classList.add('container2');

        function startList() {


            let btnWrapper = document.createElement('div');
            setTimeout(() => {
                btnWrapper.classList.add('btnWrapper1');
            }, 20);
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
    fub1();
    // fetch('tsconfig.json')
    //     .then(function (response) {
    //         return response.json();
    //     }).then(function (obj) {
    //     taskGoods = obj;
    //     fub1();
    // });
}



