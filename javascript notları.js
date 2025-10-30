/*javasript notları
değişken tanımlama let var const ile yapılır

yeni standart ecmascript artık programlama dilleri bu standartlara uymak zorunda.
ecmascript öncesi değişkenler var ile yapılıyordu. Var değişkeninde güvenlik açıkları var yeni standart ile const ve let geldi*/

var adi="can"//(değişken)
let yas=20;
const adres="izmir";//(sabit değişken)

/*let değişkeni değiştirilebiliyor const değişkeni değiştirilemiyor. var değişkeni ile değer atandığında sonradan veritabanında
değiştirilebiliyor güvenlik için const kullanılır. Bir veritabanı varsa veya değişmemesi gereken bir değişken var ise const kullan.*/


//ecmascript öncesi:

function topla(x+y){
    return x+y
}

//ecmascript sonrası:
//arrow function
const add=(x+y)=>x+y

//if else

if(x==10){
    console.log("x 10 a eşittir")
}


let total=0
for(let i=0;i<10;i++){
    total+=i
}

/* var ile let arasındaki farklar
*var function scope let ise block scope özelliğine sahiptir.*/

function topla(){
    let x=10
}

// tekrar tanımlama özelliği
var adi="can";
var adi ="ahmet"; //hata almaz

let yas=20;
let yas=23; // hata var

//"hoisting" var ile sonradan değişken değiştirme (güvenlik açığı)
// let ve const için immutable (değiştirilemez)

adi="can"
console.log(adi)

var adi;

//rest operatörü (bireden fazla girdiyi peşpeşe kodlama)
//eski yöntem
function add(){
    console.log(arguments)
    let total=0
    for (let i=0;i<arguments.length;i++)
        total+=arguments[i]
}
console.log (add(1,2,3,4,5,6))

//rest operatoru ile
const add=(...args)=>{
    console.log (args);
    let total=0;
    for(let i=0;args.length;i++){
        total+=args[i]
    }
    return total;
}
console.log (add(1,2,3,4,5,6))


//örnek
function addtocart(urun_adi,adet,fiyat){
    addtocart("elma,2,10")
    addtocart("armut,5,35")
    addtocart("limon,8,65")
}

//yukarıdaki yerine
let urunler=[{
    urunadi:"elma",
    adet:2,
    fiyat:10
},{
    urunadi:"armut",
    adet:5,
    fiyat:35
},{
    urunadi:"limon",
    adet:8,
    fiyat:65
}]

function addtocartnew(urunler){
    console.log(urunler.urunadi)
    console.log(urunler.adet)
    console.log(urunler.fıyat)
}
addtocartnew(urunler[0])

//distracting işlemi

let bolgeler=["iç anadolu","marmara","karadeniz"]
console.log(bolgeler[2])
//yukarıdakinin yerine

let [içanadolu,marmara,karadeniz]=["iç anadolu","marmara","karadeniz"]
console.log(içanadolu)

//örnek
let [elma,armut,limon]={
    [urun_adi="elma",adet=10,fiyat=100],
    [urun_adi="armut",adet=5,fiyat=300],
    [urun_adi="limon",adet=50,fiyat=10],
}
console.log(armut.urun_adi)

//filter fonksiyonu(sql yerine kullanma)

const sayılar=[1,2,3,4,5,6,7,8,9,10]
const teksayılar=sayılar.filter(sayı=>sayı½2===0);
console.log(teksayılar)

//find komutu(sql yerine kullanma)

const sayılar=[1,2,3,4,5,6,7,8,9,10]
const teksayılar=sayılar.find(function(sayı){
    return sayı%2===0;
}
);
console.log(teksayılar)


//map fonksiyonu

const num=[1,2,3,4,5,6]

const katsayı=num.map(num=>num*2)// tünsayıları 2 ile çarpıyor
console.log(katsayı)

//reduce fonksiyonu
const nu=[1,2,3,4,5,6]

const toplam=nu.reduce((acc,curr)=acc+curr,0)//tümsayıları toplar
console.log(toplam)


//foreach fonksiyonu

const say=[1,2,3,4,5,6]
sayı.foreach(say=>(
    console.log(say)
))
try(
    const result=10/100
    console.log(result)
)catch(error){
    console.log("hata"+error.message)
}
finally(
    console.log("işlem tamamlandı")
)



//hata yakalama

function bolmeislemi(x,y){
    if(Y===0)(
        throw new error("sıfıra bölünmez")
    )
    return x/y
}
try(
    const sonuc=bolmeislemi(10,0)
    console.log("sonuç",sonuç)
)
catch (error)(
    console.log("hata yakalandı"+error.message)
)