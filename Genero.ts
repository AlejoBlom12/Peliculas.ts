

export class Genero {
    private identificador: number
    private genero: string

    constructor(identificador: number, genero:string) {
        this.identificador = identificador
        this.genero = genero
    }

    //Getter:

    public getIdentificador ( ):number{
        return this.identificador
    }

    public getGenero ( ): string{
        return this.genero
    }

    //Setter:

    private setIdentificador (identificador:number){
        this.identificador = identificador
    }

    private setGenero (genero:string){
        this.genero = genero
    }
}