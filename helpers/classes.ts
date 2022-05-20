interface Styles {
    readonly [key: string]: string;
}

function classes(styles: Styles) {
    return function (...args: string[]): string {
        return args.map((name) => styles[name]).join(' ');
    };
}

export default classes