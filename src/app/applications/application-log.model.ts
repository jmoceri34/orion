export class ApplicationLog {

    ID: number;
    message: string;

    constructor(id: number, message: string, active: boolean, logo: any, logoBase64: string) {
        this.ID = id;
        this.message = message;
    }
}
