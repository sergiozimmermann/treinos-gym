export default class Utils {
    static mapResFirebase(res: any): any {
        return res.map((e: any) => {
            const data: any = e.payload.doc.data();
            data.idUsuario = e.payload.doc.id;
            return data;
        });
    }
}