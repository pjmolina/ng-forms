export class Professor {

    constructor(
      public id: number,
      public name: string,
      public topic: number,
      public topic2: string,
      public topic3: {
        code: number;
        label: string;
      },
      public level: number,
      public joinedAt: Date,
      public city?: string
    ) {}

  }
