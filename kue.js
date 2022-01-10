class Kue {
    constructor(gula,asesoris,berat) {
        this._bahan = "Tepung";
        this._gula = Gula;
        this._asesoris = Asesoris;
        this._berat = Berat;
    }

    // getter
    get bahan() {
        return this._bahan;
    }
    get gula() {
        return this._gula;
    }
    get asesoris() {
        return this._asesoris;
    }
    get berat() {
        return this._berat;
    }

    // setter
    set gula(value) {
        this._gula = value;
    }
    set asesoris(value) {
        this._asesoris = value;
    }
    set berat(value) {
        this._berat = value;
    }

}

​class​ ​KuePutu​ ​extends​ ​Kue​{ 
    ​    ​constructor​(​gulaLevel​,​ ...​args​)​{ 
    ​        ​super​(​...​args​) 
    ​        ​this​.​_gulaLevel​ ​=​ ​gulaLevel​; 
    ​    ​} 
    ​    ​// getter 
    ​    ​get​ ​gulaLevel​(​)​{ 
    ​        ​return​ ​this​.​_gulaLevel 
    ​    ​}​; 
    ​    ​// setter 
    ​    ​set​ ​gulaLevel​(​value​)​{ 
    ​        ​this​.​_gulaLevel​ ​=​ ​value​; 
    ​    ​}​; 
    ​}​; 
// objek
const kuePutu = new Kue("gula jawa","daun",10);
console.log(kuePutu);

​class​ ​KueCubit​ ​extends​ ​Kue​{ 
    ​    ​constructor​(​...​args​)​{ 
    ​        ​super​(​...​args​) 
    ​        ​this​.​_bahan​ ​=​ ​[​'tepung'​,​'telur'​]​;​  
    ​    ​} 
    ​     
    ​}​; 
// objek
const kueCubit = new Kue("gula jawa","daun",10);
console.log(kueCubit);

​class​ ​KueKetawa​ ​extends​ ​Kue​{ 
    ​    ​constructor​(​...​args​)​{ 
    ​        ​super​(​...​args​) 
    ​        ​this​.​_bahan​ ​=​ ​[​'tepung'​,​'telur'​]​; 
    ​    ​} 
    ​}​;
// objek
const kueKetawa = new Kue("gula jawa","daun",10);
console.log(kueKetawa);