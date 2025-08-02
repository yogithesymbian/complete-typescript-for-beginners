// Introduction to Modules
// test usage on file import.ts
export class abc {
    a: string;
    b: string;

    constructor(private _a: string, private _b: string){
        this.a = _a;
        this.b = _b;
    }
}

export class cde {
    a: string;
    b: string;

    constructor(private _a: string, private _b: string){
        this.a = _a;
        this.b = _b;
    }
}

export class fgh {
    a: string;
    b: string;

    constructor(private _a: string, private _b: string){
        this.a = _a;
        this.b = _b;
    }
}


/* specify multiple export/bot work or single work */
// export { abc }
// export { cde }