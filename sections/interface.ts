// interface
function log(val: any) {
    console.log(val)
}
interface IComplexType {
    id: number;
    name: string;
}

let complexType: IComplexType = {
    id: 1,
    name: "yogi"
}

interface Point {
    x: number;
    readonly y: number;
}

let p1: Point =  {
    x: 2,
    y: 2
};

p1.x = 4;
log(p1);