export default class Pokemon{
    /*Privát adattag */
    #nev=""
    #kep=""
    #mondat=""
    constructor(nev,kep,mondat,szuloElem){
        /*Ez hivodik meg pédényositáskor 
        Beálitja az adattagokat
        a this mindig az aktulális objektumra mutat */
        this.#nev=nev
        this.#kep=kep
        this.#mondat=mondat
        this.szuloElem=szuloElem
        this.#megjelenit()
    }
    get nev (){
        return this.#nev
    }
    set mondat(szoveg){
        this.#mondat=szoveg
    }

    /*Metoduok ide */
    beszel(){
        console.log(this.#mondat)
    }
    
    #htmlOsszeallit(){
        let txt=`
        <div class "poki">
            <h3>${this.#nev}</h3>
            <img src="${this.#kep}" alt="${this.#nev}">
        </div>`
        return txt
    }
    #megjelenit(){
        this.szuloElem.append(this.#htmlOsszeallit())
    }

}