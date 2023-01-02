export class StorageManager{
    private local:string;
    
    constructor(local:string){
        this.local = local;
    }

    public GetLocalData(){
        return JSON.parse(localStorage.getItem(this.local)||"[]");
    }
    public SetLocalData(data:any):void{
        localStorage.setItem(this.local,JSON.stringify(data))
    }
    public ClearLocalData():void{
        localStorage.removeItem(this.local);
    }
}