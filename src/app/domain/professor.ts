export class Professor {

    constructor(
      public id: number,
      public name: string,
      public topic: number,
      public level: number,
      public joinedAt: Date,
      public city?: string
    ) {}

  }
