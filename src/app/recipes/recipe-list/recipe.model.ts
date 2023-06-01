export class Recipe{
    public name: string;
    public description: string;
    public ImagePath: string;

    constructor(name: string, desc: string, ImagePath: string){
        this.name = name,
        this.description = desc,
        this.ImagePath = ImagePath
    }
}