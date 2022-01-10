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

class kuePutu extends Kue {
    constructor(...args,gulaLevel) {
        super(...args),
        this._gukaLevel = gulaLevel;
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
    get gulaLevel() {
        return this._gukaLevel
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
    set gulaLevel(value) {
    this._gukaLevel = value;
    }
}
// objek
const kuePutu = new Kue("gula jawa","daun",10);
console.log(kuePutu);

class kueCubit extends Kue {
    constructor(gula,asesoris,berat) {
        this._bahan = "Telur";
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
// objek
const kueCubit = new Kue("gula jawa","daun",10);
console.log(kueCubit);

class kueKetawa extends Kue {
    constructor(gula,asesoris,berat) {
        this._bahan = "Telur";
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
// objek
const kueKetawa = new Kue("gula jawa","daun",10);
console.log(kueKetawa);