export class ExercicioPreset {
    id?: string;
    idPreset!: string;
    nmExercicio: string = '';
    obsExercicio: string = '';
    tpExercicio: number = 1;
    qtdSerie: number | null = null;
    minRep: number | null = null;
    maxRep: number | null = null;
    indexExPreset!: number;
    // Biset
    nmSet1?: string;
    minRepBiset1?: number;
    maxRepBiset1?: number;
    nmSet2?: string;
    minRepBiset2?: number;
    maxRepBiset2?: number;
    // Dropset
    qtdDrop?: number;
    minRepsDrop?: number[];
    maxRepsDrop?: number[];
}
