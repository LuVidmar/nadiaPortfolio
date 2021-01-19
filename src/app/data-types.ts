import { Observable } from "rxjs";

export class activity {
    title: string;
    desc: string;
    imgLink: string;
    public constructor (title_: string, desc_: string, imgLink_: string){
        this.title = title_;
        this.desc = desc_;
        this.imgLink = imgLink_;
    }
}

export class year {
    ynum: number;
    activities: Observable<any[]>;
    public constructor (ynum_: number, activities_: Observable<any[]>){
        this.ynum = ynum_;
        this.activities = activities_;
    }
}