interface IDiffDateDTO{
    firstDate: Date;
    lastDate: Date;
}

export function DiffDateCalculator({firstDate,lastDate}:IDiffDateDTO):number{
    const diff = (new Date(lastDate)).getTime() - (new Date(firstDate)).getTime();
    return parseInt((diff / (24 * 3600 * 1000)).toString());
}