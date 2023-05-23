//no 2
const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];


let hewan = () => console.log([...hewanBuas, ...hewanBuas])
hewan();

const makan = ["ikan", "wortel", "beras"]
const peta = () => {
    const peta = {}
    for(a = 0 ; a < 3 ; a++){
        peta[a] = [hewanJinak[a],makan[a]]
    }
    return peta
} 



setTimeout(() => {
    console.log(peta());
},5000);



