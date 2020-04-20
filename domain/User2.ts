
export class User2 {

    private _id: number;

    private _firstName: string;

    private _lastName: string;

    private _age: number;


    constructor() {
        this._id = null;
        this._firstName = null;
        this._lastName = null;
        this._age = null;
        
    }

    public get id(): number {
        return this._id;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public get lastName(): string {
        return this._lastName;
    }

    public get age(): number {
        return this._age;
    }

    public set id(value: number){
        this._id = value;
    }

    public set firstName(value: string){
        this._firstName = value;
    }

    public set lastName(value: string){
        this._lastName = value;
    }

    public set age(value: number){
        this._age = value;
    }

}
