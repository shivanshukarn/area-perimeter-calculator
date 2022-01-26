console.log("Welcome to area perimter calculator...");

let res = document.getElementById('res');
let form = document.getElementById('form');
let ccc = document.getElementById('ccc');
let sstForm = document.getElementById('sstForm');
let clacBtn = document.getElementById('clacBtn');
let sastBtn = document.getElementById('sastBtn');
let lenDiv = document.getElementById('lenDiv');
let breDiv = document.getElementById('breDiv');
let SidDiv = document.getElementById('SidDiv');
let baseDiv = document.getElementById('baseDiv');
let heiDiv = document.getElementById('heiDiv');
let radDiv = document.getElementById('radDiv');
let shape = document.getElementById('shape');

let area;
let perimeter;
let s;

sstForm.addEventListener('submit', (e) => {
    e.preventDefault();
    s = shape.value;
    if (s === "rect") {
        lenDiv.style.display = "block";
        breDiv.style.display = "block";
        clacBtn.style.display = "block";
        sastBtn.style.display = "block";
        sstForm.style.display = "none";
        ccc.innerHTML = "Calculate area and perimeter of Rectangle"
    } else if (s === "sq") {
        SidDiv.style.display = "block";
        clacBtn.style.display = "block";
        sastBtn.style.display = "block";
        sstForm.style.display = "none";
        ccc.innerHTML = `Calculate area and perimeter of Square`
    } else if (s === "tri") {
        baseDiv.style.display = "block";
        heiDiv.style.display = "block";
        clacBtn.style.display = "block";
        sastBtn.style.display = "block";
        sstForm.style.display = "none";
        ccc.innerHTML = `Calculate area and perimeter of Triangle`
    } else if (s === "cir") {
        radDiv.style.display = "block";
        clacBtn.style.display = "block";
        sastBtn.style.display = "block";
        sstForm.style.display = "none";
        ccc.innerHTML = `Calculate area and perimeter of Circle`
    }
})

form.addEventListener('submit', (e, s) => {
    e.preventDefault();
    let len = document.getElementById('len').value;
    let bre = document.getElementById('bre').value;
    let sid = document.getElementById('sid').value;
    let base = document.getElementById('base').value;
    let hei = document.getElementById('hei').value;
    let rad = document.getElementById('rad').value;
    s = shape.value;
    if (s === "rect") {
        area = len * bre;
        perimeter = 2 * len + 2 * bre;
        res.innerHTML = `Rectangle whose length is ${len} and breadth is ${bre} , Area = ${area} unit² and Perimeter = ${perimeter} unit`;
    } else if (s === "sq") {
        area = sid * sid;
        perimeter = 4 * sid
        res.innerHTML = `Square whose length of each side is ${sid} , Area = ${area} unit² and Perimeter = ${perimeter} unit`;
    } else if (s === "tri") {
        area = 1 / 2 * base * hei;
        res.innerHTML = `Area of Triangle whose Base is ${base} and Height is ${hei} = ${area} unit²`;
    } else if (s === "cir") {
        area = 22 / 7 * rad * rad;
        perimeter = 2 * 22 / 7 * rad
        res.innerHTML = `Circle whose Radius is ${rad} , Area = ${area} unit² and Perimeter = ${perimeter} unit`;
    } else {
        res.innerHTML = `<i class="text-danger">Something went wrong</i>`
    }
})