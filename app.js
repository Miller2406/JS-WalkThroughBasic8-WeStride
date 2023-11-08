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

        if (s !== ' ') { //ส่วนนี้ตรวจสอบช่องว่าง ถ้ามีให้ข้ามไป ถ้าเป็นอักษร ให้ทำในนี้
            let sIndex = alphabet.indexOf(s); // หาลำดับมันก่อน
            let targetIndex = sIndex + 5; // เคลื่อนไปอีก 5 นั่นหละค่าที่เราต้องการแก้รหัส

            if (targetIndex <= alphabet.length - 1) { // ตรวจสอบว่า ตำแหน่งที่จะไป มันเกิดกว่า 0-25 26 ตัวไหม
                targetValue = alphabet[targetIndex]; // 0-25 ดูว่าจะตรงกับตัวอะไร
                targetResult.push(targetValue); // อัดมันเข้าไปในผลลัพธ์
            } else {
                let subIndex = (targetIndex - (alphabet.length)) // พวกเกินกว่า 0-25 ลบมันออกด้วย 26 ไปเริ่มนับ 0 ใหม่
                let subValue = alphabet[subIndex]; // หาดูดิ๊ว่าตรงกับตัวไหน พวกที่เกิน z มา
                targetResult.push(subValue); // อัดมันเข้าไปในผลลัพธ์
            }
        } else { // ส่วนนี้ข้ามมาจากตรวจช่องว่างพบ
            targetResult.push(' ') // push ช่องว่างเข้าไป
        }

    }
    return targetResult.join(''); // join ซะหน่อย แปลง array เป็นข้อความต่อเนื่องที่ตัวติดๆกัน

}

const tR = hackPass('d gjqz tjp ojj hpxc') // คัดลอก เข้าไปเป็นตัวแปร tR จะได้เรียกดูบน console ได้
console.log(tR);

console.log(hackPass('d gjqz tjp ojj hpxc')); // พวกนี้มันพวกผี แสดงให้เห็นแต่จับต้องไม่ได้
console.log(hackPass('xvo'));
console.log(hackPass('ht ivhz dn w')); 
