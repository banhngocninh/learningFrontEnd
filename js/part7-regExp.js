//modifiers
let str = "Javascript is easier than javascript";
let patt1 = new RegExp("javascript");
let patt2 = /javascript/;
let patt3 = /javascript/i; //không phân biệt hoa thường
let patt4 = /javascript/g; //trả về tất cả giá trị phù hợp
let patt5 = /javascript/gim; //thực hiện trên tất cả các dòng

document.write(str.match(patt1) + "<br />");
document.write(str.match(patt2) + "<br />");
document.write(str.match(patt3) + "<br />");
document.write(str.match(patt4) + "<br />");
document.write(str.match(patt5) + "<br />");

//properties
let str1 = "Javascript is easier than javascript";
let patt6 = /Javascript/gi;
let patt9 = /iiiiiiiiiii/gi;
document.write("global: " + patt6.global + "<br />"); //trả về kết quả true nếu g modifiers được thiết lập
document.write("ignoreCase: " + patt6.ignoreCase + "<br />"); //trả về kết quả true nếu i modifiers được thiết lập
document.write("multiline: " + patt6.multiline + "<br />"); //trả về kết quả true nếu m modifiers được thiết lập
document.write("source: " + patt6.source + "<br />"); // trả về nội dung của patt6

//methods
let str2 = "HTML is easier than HTML5";
let patt7 = /i/gim;
while (patt7.test(str2) == true) {
  document.write("lastIndex: " + patt7.lastIndex + "<br />"); // cần phải có giá trị g
}
let patt8 = /html/;
document.write("exec: " + patt7.exec(str2) + "<br />");
document.write("exec: " + patt8.exec(str2) + "<br />");
document.write("test: " + patt7.test(str2) + "<br />");
document.write("test: " + patt8.test(str2) + "<br />");

// remove excess whitespace
let string = "          Javascript      is very        easy          ";
document.write("Before: " + string.length + "<br />");

function removeExcessWhitespace(name) {
  name = name.replace(/^\s+/gim, ""); //xoá khoảng trắng đầu
  name = name.replace(/\s+$/gim, ""); //xoá khoảng trắng cuối
  name = name.replace(/\s+/gim, " "); // xoá khoẳng trắng giữa
  return name;
}

document.write("After: " + removeExcessWhitespace(string).length + "<br />");

// split user name
// Họ: 0 -> spaceFirst (indexOf) -> slice(s, e)
// Tên: spaceEnd (lastIndexOf) -> cuối chuỗi
// Họ lót: slice(spaceFirst, spaceEnd)
//   Bành    Ngọc      Ninh
function splitUserName() {
  let fullName = "";
  fullName = document.getElementById("username").value;
  if (fullName.length > 0) {
    let afterRemoveExcess = removeExcessWhitespace(fullName);

    let spaceFirst = afterRemoveExcess.indexOf(" ");
    let spaceEnd = afterRemoveExcess.lastIndexOf(" ");

    if (spaceFirst > 0 && spaceEnd > 0) {
      let afterSlipt = "";

      afterSlipt = "Họ: " + afterRemoveExcess.slice(0, spaceFirst) + "<br />";
      if (afterRemoveExcess.slice(spaceFirst + 1, spaceEnd).length > 0)
        afterSlipt +=
          "Họ lót: " +
          afterRemoveExcess.slice(spaceFirst + 1, spaceEnd) +
          "<br />";

      afterSlipt += "Tên: " + afterRemoveExcess.slice(spaceEnd + 1) + "<br />";

      document.getElementById("result").innerHTML = afterSlipt;
    } else document.getElementById("result").innerHTML = "Dữ liệu không hợp lệ";
  } else document.getElementById("result").innerHTML = "Dữ liệu không hợp lệ";
}

//(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])
function check() {
  //banhngocninh21414@gmail.com
  let pattern =
    /(?:[a-z0-9!#$%&'*+\=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  let email = "";
  email = document.getElementById("email").value;

  if (pattern.test(email) == true) {
    document.getElementById("result-email").innerHTML = "Dữ liệu hợp lệ";
  } else
    document.getElementById("result-email").innerHTML = "Dữ liệu không hợp lệ";
}

function change() {
  let str = document.getElementById("test").innerHTML;
  let changed = /jquery/gim;
  str = str.replace(changed, "<a href='https://wiki.matbao.net/jquery-la-gi-tong-quan-ve-jquery-va-huong-dan-su-dung-jquery/'>jQuery</a>");
  document.getElementById("test").innerHTML = str;
}
