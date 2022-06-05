const btn = document.querySelector('button');
const section = document.querySelector('section');
const chars = 'ABCDEFGHIJK0123456789';


 const codesNumber = 50;
 const charsNumber = 10;

const codesGenerator = () => {

    for (let i = 0; i < codesNumber; i++) {
        let code = "";
        for (let i = 0; i < charsNumber; i++) {
            const index = Math.floor(Math.random() * chars.length)
            code += chars[index];
        }
        
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }


}

document.addEventListener("click", codesGenerator)