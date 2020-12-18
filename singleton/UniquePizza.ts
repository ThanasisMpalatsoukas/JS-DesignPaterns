export default class UniquePizza {
    private static instance: UniquePizza;

    contents: string;

    private constructor() {};

    static getInstance(): UniquePizza {
        if (!UniquePizza.instance) {
            UniquePizza.instance = new UniquePizza();
        }

        return UniquePizza.instance;
    }


    setContents(contents: string) {
        this.contents = contents;
    }

    describe() {
        console.log(this.contents);
    }
}