import { Combo } from "./components/dropdown/models/combo";

export default class Utils {
    // Função para formatar o retorno "snapshotChanges" do AngularFirestore e colocar id e data no mesmo objeto
    static mapResFirebase(res: any): any[] {
        return res.map((e: any) => {
            const data: any = e.payload.doc.data();
            data.id = e.payload.doc.id;
            return data;
        });
    }

    // Função para montar o combo através de uma lista de objetos, podendo ser passados as keys que irão ser o value e o label do combo
    static montaCombo(lista: any[], labelKey: string, idKey: string = 'id'): Combo[] {
        let combo: Combo[] = [];
        lista.forEach(item => {
            combo.push({
                value: item[idKey],
                label: item[labelKey]
            });
        });
        return combo;
    }
}
