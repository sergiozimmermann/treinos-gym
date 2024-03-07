export class ExercicioTreinoAtual {
    id!: string;
    idTreino!: string;
    idExercicioPreset!: string;
    qtdRep: number[] = [];
    pesoKg: number[] = [];
    qtdSerie!: number;
    nmExercicio!: string;
    obsExercicio!: string;
    minMaxRep!: string;
    tpExercicio: number = 1;
    nmSet1?: string;
    minMaxRepBiset1?: string;
    qtdRepBiset1: Array<number> = [];
    pesoKgBiset1: number[] = [];
    nmSet2?: string;
    minMaxRepBiset2?: string;
    qtdRepBiset2: number[] = [];
    pesoKgBiset2: number[] = [];
}
