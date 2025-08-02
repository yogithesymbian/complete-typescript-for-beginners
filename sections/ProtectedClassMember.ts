// Protected class Members
class ClassUsingProtected {
    protected id: number;

    /**
     * getId
     */
    public getId() {
        return this.id;
    }
}

class DerivedFromProtected extends ClassUsingProtected {
    constructor() {
        super();
        this.id = 0
    }
}

var derivedFromProtected = new DerivedFromProtected();
// derivedFromProtected.id = 1; // Property 'id' is protected and only accessible within class 'ClassUsingProtected' and its subclasses.ts(2445)
console.log(`getID returns ${derivedFromProtected.getId}`);