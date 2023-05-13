export class Cachorro {
    public id : string;
    public nome : string;
    public sexo: string;
    public datanascimento: string;
    public raca : string;
    public corpelo : string;
    
    constructor(obj?: Partial<Cachorro>) {
        if (obj) {
            this.id = obj.id
            this.nome = obj.nome
            this.raca = obj.raca
            this.sexo = obj.sexo
            this.datanascimento = obj.datanascimento
            this.corpelo = obj.corpelo
         }
    }

    toFirestore() {
        const cachorro =  {
                    id : this.id,
                    nome : this.nome,
                    raca : this.raca,
                    sexo : this.sexo,
                    datanascimento : this.datanascimento,
                    corpelo : this.corpelo
         }
         return cachorro
    }

   
    toString() {
        const Objeto = `{
            "id": "${this.id}",
            "nome": "${this.nome}",
            "raca": "${this.raca}",
            "sexo": "${this.sexo}",
            "datanascimento": "${this.datanascimento}",
            "corpelo": "${this.corpelo}"
        }`
        return Objeto
    }
};