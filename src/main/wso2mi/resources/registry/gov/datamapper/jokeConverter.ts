function mapFunction(input: InputRoot): OutputRoot {
    return {
        joke: input.setup + input.punchline
    }
};

interface InputRoot {
    type?: string;
    setup?: string;
    punchline: string;
    id?: number;
    [k: string]: unknown;
}


interface OutputRoot {
    joke?: string;
    [k: string]: unknown;
}


