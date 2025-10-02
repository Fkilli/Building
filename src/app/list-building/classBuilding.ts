export class BUILDING{
  constructor(
    public id: number,
    public title: string,
    public type: string,
    public price: number,
    public area: number,
    public rooms: number,
    public location: string,
    public description: string,
    public available: boolean,
    public image: string
  ) {}
}