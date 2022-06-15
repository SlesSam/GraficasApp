export interface ChartData {
    name: string,
    value: number,
    extra: extraData
}

interface extraData{
    code:string;
}