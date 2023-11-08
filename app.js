//จงเขียน Function ถอดรหัสอักษร โดยที่มีหลักการในการถอดรหัส คือ ค่าที่รับเข้ามาจะเป็นค่าที่เข้ารหัส ถ้าต้องการถอดรหัส ต้องเอาตัวอักษรนั้นๆ ไปบวก 5 นำแหน่งถัดไป จะได้ข้อความต้นทางก่อนที่จะเข้ารหัส

// #alphabet lowwerCase
const alphabetB = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const alphabet = alphabetB.map(element => {
    return element.toLocaleLowerCase();
})


//
function hackPass(password) {
    let targetResult = [];
    for (const s of password) {
        if (s !== ' ') {
            let sIndex = alphabet.indexOf(s);
            let targetIndex = sIndex + 5;

            if (targetIndex <= alphabet.length - 1) {
                targetValue = alphabet[targetIndex];
                targetResult.push(targetValue);
            } else {
                let subIndex = (targetIndex - (alphabet.length))
                let subValue = alphabet[subIndex];
                targetResult.push(subValue);
            }
        } else {
            targetResult.push(' ')
        }

    }
    return targetResult.join('');

}

const tR = hackPass('d gjqz tjp ojj hpxc')
console.log(tR);

console.log(hackPass('d gjqz tjp ojj hpxc'));
console.log(hackPass('xvo'));
console.log(hackPass('ht ivhz dn w'));
