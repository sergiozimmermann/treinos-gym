export class ExercicioTreinoAtual {
    id!: string;
    idTreino!: string;
    idExercicioPreset!: string;
    indexExPreset!: number;
    qtdRep: number[] = [];
    pesoKg: number[] = [];
    qtdSerie!: number;
    nmExercicio!: string;
    obsExercicio!: string;
    minMaxRep!: string;
    tpExercicio: number = 1;
    // Biset
    nmSet1?: string;
    minMaxRepBiset1?: string;
    qtdRepBiset1: Array<number> = [];
    pesoKgBiset1: number[] = [];
    nmSet2?: string;
    minMaxRepBiset2?: string;
    qtdRepBiset2: number[] = [];
    pesoKgBiset2: number[] = [];
    // Dropset
    qtdDrop!: number;
    minMaxRepDrops: string[] = [];
    pesoKgDrops: any[][] = [[]];
    qtdRepDrops: any[][] = [[]];
}
