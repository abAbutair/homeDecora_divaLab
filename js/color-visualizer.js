// //---------------------Wizard-in-color-visualizer-----
// $(document).ready(function () {
//     // //Initialize tooltips
//     // $('.nav-tabs > li a[title]').tooltip();
//
//     //Wizard
//     $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
//
//         var $target = $(e.target);
//
//         if ($target.parent().hasClass('disabled')) {
//             return false;
//         }
//     });
//
//     $(".next-step").click(function (e) {
//
//         var $active = $('.wizard .wizard-inner .nav-tabs li.active');
//         $active.next().removeClass('disabled');
//         nextTab($active);
//
//     });
//     $(".prev-step").click(function (e) {
//
//         var $active = $('.wizard .nav-tabs .wizard-inner li.active');
//         prevTab($active);
//
//     });
// });
//
// function nextTab(elem) {
//     $(elem).next().find('a[data-toggle="tab"]').click();
// }
//
// function prevTab(elem) {
//     $(elem).prev().find('a[data-toggle="tab"]').click();
// }


////////////////////////////////////////////////////////////////////////////////------////////////////////////////////
// colors array

let colors = [
    // Pink Colors
    ['Pink', '#FFC0CB', 'rgb(255,192,203)'],
    ['LightPink', '#FFB6C1', 'rgb(255,182,193)'],
    ['HotPink', '#FF69B4', 'rgb(255,105,180)'],
    ['DeepPink', '#FF1493', 'rgb(255,20,147)'],
    ['PaleVioletRed', '#DB7093', 'rgb(219,112,147)'],
    ['MediumVioletRed', '#C71585', 'rgb(199,21,133)'],
    // Purple Colors
    ['Lavender', '#E6E6FA', 'rgb(230,230,250)'],
    ['Thistle', '#D8BFD8', 'rgb(216,191,216)'],
    ['Plum', '#DDA0DD', 'rgb(221,160,221)'],
    ['Orchid', '#DA70D6', 'rgb(218,112,214)'],
    ['Violet', '#EE82EE', 'rgb(238,130,238)'],
    ['Fuchsia', '#FF00FF', 'rgb(255,0,255)'],
    ['Magenta', '#FF00FF', 'rgb(255,0,255)'],
    ['MediumOrchid', '#BA55D3', 'rgb(186,85,211)'],
    ['DarkOrchid', '#9932CC', 'rgb(153,50,204)'],
    ['DarkViolet', '#9400D3', 'rgb(148,0,211)'],
    ['BlueViolet', '#8A2BE2', 'rgb(138,43,226)'],
    ['DarkMagenta', '#8B008B', 'rgb(139,0,139)'],
    ['Purple', '#800080', 'rgb(128,0,128)'],
    ['MediumPurple', '#9370DB', 'rgb(147,112,219)'],
    ['MediumSlateBlue', '#7B68EE', 'rgb(123,104,238)'],
    ['SlateBlue', '#6A5ACD', 'rgb(106,90,205)'],
    ['DarkSlateBlue', '#483D8B', 'rgb(72,61,139)'],
    ['RebeccaPurple', '#663399', 'rgb(102,51,153)'],
    ['Indigo', '#4B0082', 'rgb(75,0,130)'],
    // Red Colors
    ['LightSalmon', '', 'rgb(255,160,122)'],
    ['Salmon', '#FA8072', 'rgb(250,128,114)'],
    ['DarkSalmon', '#E9967A', 'rgb(233,150,122)'],
    ['LightCoral', '#F08080', 'rgb(240,128,128)'],
    ['IndianRed', '#CD5C5C', 'rgb(205,92,92)'],
    ['Crimson', '#DC143C', 'rgb(220,20,60)'],
    ['Red', '#FF0000', 'rgb(255,0,0)'],
    ['FireBrick', '#B22222', 'rgb(178,34,34)'],
    ['DarkRed', '#8B0000', 'rgb(139,0,0)'],
    // Orange Colors
    ['Orange', '#FFA500', 'rgb(255,165,0)'],
    ['DarkOrange', '#FF8C00', 'rgb(255,140,0)'],
    ['Coral', '#FF7F50', 'rgb(255,127,80)'],
    ['Tomato', '#FF6347', 'rgb(255,99,71)'],
    ['OrangeRed', '#FF4500', 'rgb(255,69,0)'],
    // Yellow Colors
    ['Gold', '#FFD700', 'rgb(255,215,0)'],
    ['Yellow', '#FFFF00', 'rgb(255,255,0)'],
    ['LightYellow', '#FFFFE0', 'rgb(255,255,224)'],
    ['LemonChiffon', '#FFFACD', 'rgb(255,250,205)'],
    ['LightGoldenRodYellow', '#FAFAD2', 'rgb(250,250,210)'],
    ['PapayaWhip', '#FFEFD5', 'rgb(255,239,213)'],
    ['Moccasin', '#FFE4B5', 'rgb(255,228,181)'],
    ['PeachPuff', '#FFDAB9', 'rgb(255,218,185)'],
    ['PaleGoldenRod', '#EEE8AA', 'rgb(238,232,170)'],
    ['Khaki', '#F0E68C', 'rgb(240,230,140)'],
    ['DarkKhaki', '#BDB76B', 'rgb(189,183,107)'],
    // Green Colors
    ['GreenYellow', '#ADFF2F', 'rgb(173,255,47)'],
    ['Chartreuse', '#7FFF00', 'rgb(127,255,0)'],
    ['LawnGreen', '#7CFC00', 'rgb(124,252,0)'],
    ['Lime', '#00FF00', 'rgb(0,255,0)'],
    ['LimeGreen', '#32CD32', 'rgb(50,205,50)'],
    ['PaleGreen', '#98FB98', '152,251,152'],
    ['LightGreen', '#90EE90', 'rgb(144,238,144)'],
    ['MediumSpringGreen', '#00FA9A', 'rgb(0,250,154)'],
    ['SpringGreen', '#00FF7F', 'rgb(0,255,127)'],
    ['MediumSeaGreen', '#3CB371', 'rgb(60,179,113)'],
    ['SeaGreen', '#2E8B57', 'rgb(46,139,87)'],
    ['ForestGreen', '#228B22', 'rgb(34,139,34)'],
    ['Green', '#008000', 'rgb(0,128,0)'],
    ['DarkGreen', '#006400', 'rgb(0,100,0)'],
    ['YellowGreen', '#9ACD32', 'rgb(154,205,50)'],
    ['OliveDrab', '#6B8E23', 'rgb(107,142,35)'],
    ['DarkOliveGreen', '#556B2F', 'rgb(85,107,47)'],
    ['MediumAquaMarine', '#66CDAA', 'rgb(102,205,170)'],
    ['DarkSeaGreen', '#8FBC8F', 'rgb(	143,188,143)'],
    ['LightSeaGreen', '#20B2AA', 'rgb(32,178,170)'],
    ['DarkCyan', '#008B8B', 'rgb(0,139,139)'],
    ['Teal', '#008080', 'rgb(0,128,128)'],
    // Cyan colors
    ['Aqua', '#00FFFF', 'rgb(0,255,255)'],
    ['Cyan', '#00FFFF', 'rgb(0,255,255)'],
    ['LightCyan', '#E0FFFF', 'rgb(224,255,255)'],
    ['PaleTurquoise', '#AFEEEE', 'rgb(175,238,238)'],
    ['Aquamarine', '#7FFFD4', 'rgb(127,255,212)'],
    ['Turquoise', '#40E0D0', 'rgb(64,224,208)'],
    ['MediumTurquoise', '#48D1CC', 'rgb(72,209,204)'],
    ['DarkTurquoise', '#00CED1', 'rgb(0,206,209)'],
    // Blue Colors
    ['CadetBlue', '#5F9EA0', 'rgb(95,158,160)'],
    ['SteelBlue', '#4682B4', 'rgb(70,130,180)'],
    ['LightSteelBlue', '#B0C4DE', 'rgb(176,196,222)'],
    ['LightBlue', '#ADD8E6', 'rgb(173,216,230)'],
    ['PowderBlue', '#B0E0E6', 'rgb(176,224,230)'],
    ['LightSkyBlue', '#87CEFA', 'rgb(135,206,250)'],
    ['SkyBlue', '#87CEEB', 'rgb(135,206,235)'],
    ['CornflowerBlue', '#6495ED', 'rgb(100,149,237)'],
    ['DeepSkyBlue', '#00BFFF', 'rgb(0,191,255)'],
    ['DodgerBlue', '#1E90FF', 'rgb(30,144,255)'],
    ['RoyalBlue', '#4169E1', 'rgb(65,105,225)'],
    ['Blue', '#0000FF', 'rgb(0,0,255)'],
    ['MediumBlue', '#0000CD', 'rgb(0,0,205)'],
    ['DarkBlue', '#00008B', 'rgb(0,0,139)'],
    ['Navy', '#000080', 'rgb(0,0,128)'],
    ['MidnightBlue', '#191970', 'rgb(25,25,112)'],
    // Brown Colors
    ['Cornsilk', '#FFF8DC', 'rgb(255,248,220)'],
    ['BlanchedAlmond', '#FFEBCD', 'rgb(255,235,205)'],
    ['Bisque', '#FFE4C4', 'rgb(255,228,196)'],
    ['NavajoWhite', '#FFDEAD', 'rgb(255,222,173)'],
    ['Wheat', '#F5DEB3', 'rgb(245,222,179)'],
    ['BurlyWood', '#DEB887', 'rgb(222,184,135)'],
    ['Tan', '#D2B48C', 'rgb(210,180,140)'],
    ['RosyBrown', '#BC8F8F', 'rgb(188,143,143)'],
    ['SandyBrown', '#F4A460', 'rgb(244,164,96)'],
    ['GoldenRod', '#DAA520', 'rgb(218,165,32)'],
    ['DarkGoldenRod', '#B8860B', 'rgb(184,134,11)'],
    ['Peru', '#CD853F', 'rgb(205,133,63)'],
    ['Chocolate', '#D2691E', 'rgb(210,105,30)'],
    ['Olive', '#808000', 'rgb(128,128,0)'],
    ['SaddleBrown', '#8B4513', 'rgb(139,69,19)'],
    ['Sienna', '#A0522D', 'rgb(160,82,45)'],
    ['Brown', '#A52A2A', 'rgb(165,42,42)'],
    ['Maroon', '#800000', 'rgb(128,0,0)'],
    // White Colors
    ['White', '#FFFFFF', 'rgb(255,255,255)'],
    ['Snow', '#FFFAFA', 'rgb(255,250,250)'],
    ['HoneyDew', '#F0FFF0', 'rgb(240,255,240)'],
    ['MintCream', '#F5FFFA', 'rgb(245,255,250)'],
    ['Azure', '#F0FFFF', 'rgb(240,255,255)'],
    ['AliceBlue', '#F0FFFF', 'rgb(240,255,255)'],
    ['GhostWhite', '#F8F8FF', 'rgb(248,248,255)'],
    ['WhiteSmoke', '#F5F5F5', 'rgb(245,245,245)'],
    ['SeaShell', '#FFF5EE', 'rgb(255,245,238)'],
    ['Beige', '#F5F5DC', 'rgb(245,245,220)'],
    ['OldLace', '#FDF5E6', 'rgb(253,245,230)'],
    ['FloralWhite', '#FFFAF0', 'rgb(255,250,240)'],
    ['Ivory', '', '#FFFFF0', 'rgb(255,255,240)'],
    ['AntiqueWhite', '#FAEBD7', 'rgb(250,235,215)'],
    ['Linen', '#FAF0E6', 'rgb(250,240,230)'],
    ['LavenderBlush', '#FFF0F5', 'rgb(255,240,245)'],
    ['MistyRose', '#FFE4E1', 'rgb(255,228,225)'],
    // Grey Colors
    ['Gainsboro', '#DCDCDC', 'rgb(220,220,220)'],
    ['LightGray', '#D3D3D3', 'rgb(211,211,211)'],
    ['Silver', '#C0C0C0', 'rgb(192,192,192)'],
    ['DarkGray', '#A9A9A9', 'rgb(169,169,169)'],
    ['DimGray', '#696969', 'rgb(105,105,105)'],
    ['Gray', '#808080', 'rgb(128,128,128)'],
    ['LightSlateGray', '#778899', 'rgb(119,136,153)'],
    ['SlateGray', '#708090', 'rgb(112,128,144)'],
    ['DarkSlateGray', '#2F4F4F', 'rgb(47,79,79)'],
    ['Black', '#000000', 'rgb(0,0,0)']
];

// create <div> in HTML and add classes for each colors
function colorTitle(w_num, from, to) {

    for (let j = from; j < to; j++) {
        let tag = document.createElement("div");
        document.querySelector(`.wrapper-${w_num}`).appendChild(tag);
        tag.classList.add('colorBox-' + j);
    }

}

colorTitle(1, 0, 6);
colorTitle(2, 6, 25);
colorTitle(3, 25, 32);
colorTitle(4, 32, 39);
colorTitle(5, 39, 50);
colorTitle(6, 50, 72);
colorTitle(7, 72, 80);
colorTitle(8, 80, 96);
colorTitle(9, 96, 114);
colorTitle(10, 114, 131);
colorTitle(11, 131, 141);

// loop - apply function to each colors
num = [];

for (let i = 0; i < colors.length; i++) {

    let colorBoxes = document.querySelector(`.colorBox-${i}`);

    colorBoxes.style.backgroundColor = `${colors[i][0]}`;
    colorBoxes.classList.add('box');
    colorBoxes.textContent = `${colors[i][0]}`;

    createClipboard(`.colorBox-${i}`, `${colors[i][0]}`);

    var name = clickBtn('name-btn', 0, colorBoxes, i);
    var hex = clickBtn('hex-btn', 1, colorBoxes, i);
    var rgb = clickBtn('rgb-btn', 2, colorBoxes, i);

}

// apply gray color to the content with light background
var arr = [6, 40, 41, 42, 43, 44, 45, 46, 47, 48, 74, 96, 97, 98, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130];

arr.forEach(el => {
    document.querySelector(`.colorBox-${el}`).classList.add('lighterColors');
});

// // onclick button of dark mode
// document.getElementById('changeBg').addEventListener('click', function() {
//     document.body.classList.toggle('body-bg-dark');
// });

// content selections between color, hex and rgb
function clickBtn(el, clickNum, colorBoxes, i) {

    document.getElementById(el).addEventListener('click', function () {
        colorBoxes.textContent = colors[i][clickNum];

    });
    //alert(`${colors[i][clickNum]}`)
    // alert('dasd');

}

// color deficiency filters selections
function colorBlind(btn, link) {

    document.getElementById(btn).addEventListener('click', function () {
        for (let i = 0; i < 8; i++) {

            document.querySelector(`.wrapper-${i + 1}`).style.filter = link;

        }
    })
}

colorBlind(`deuteranopia-btn`, `url(#svg-deuteranopia)`);
colorBlind(`protanopia-btn`, `url(#svg-protanopia)`);
colorBlind(`tritanopia-btn`, `url(#svg-tritanopia)`);
colorBlind(`achromatopsia-btn`, `url(#svg-achromatopsia)`);
colorBlind('normal-btn', '');

// onclick button style toggle for each group - color contents and color vision deficiencies
function onButton(wrapper, el, x) {
    var header = document.getElementById(wrapper);
    var btns = header.getElementsByClassName(el);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName(`active-${x}`);
            current[0].className = current[0].className.replace(` active-${x}`, "");
            this.className += ` active-${x}`;
        });
    }
    ;


}

onButton('active-wrapper-1', 'btn-1', 1);
onButton('active-wrapper-2', 'btn-2', 2);

colors2 = [];
// clipboard.js - copying the color names or codes
function createClipboard(el, value, x, y) {

    var clip = new Clipboard(el);
    document.querySelector(el).addEventListener('click', function () {
        var att = document.createAttribute('data-clipboard-text');
        att.value = value;
        this.setAttributeNode(att);
        createClipboard(el, value);
        this.innerHTML = '<span><i class="fas fa-check-circle"></iligh</span>';

        if (jQuery.inArray(value,colors2) == -1) {
           colors2.push(value)
           localStorage.setItem('colors', colors2);
           // alert(localStorage.getItem('colors'))
           document.getElementById("selected_colors1").innerHTML += ' <label class="single-color ' + value + '">\n' +
               '                                        <span class="the-selected-color" style="background-color:' + value + ' "></span>\n' +
               '                                        <span class="the-color-name"> ' + value + '</span>\n' +
               '                                        <span class="deletion" data-action="' + value + '"><i class="far fa-trash-alt"></i></span>\n' +
               '                                    </label>';
           document.getElementById("selected_colors2").innerHTML += ' <label class="single-color ' + value + '"><input type="radio" name="selected_color" value="'+value+'"> \n\n' +
               '                                        <span class="the-selected-color" style="background-color:' + value + ' "></span>\n' +
               '                                        <span class="the-color-name"> ' + value + '</span>\n' +
               '                                        <span class="deletion  " data-action="' + value + '"><i class="far fa-trash-alt"></i></span>\n' +
               '                                    </label>';
       }
        setTimeout(function () {
            document.querySelector(el).innerHTML = value;
        }, 800);

    })

}

// // switch button
// document.querySelector('.switch').addEventListener('click', function() {
//
//     this.classList.toggle('dark');
//
// });