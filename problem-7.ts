{
  class Car {
    constructor(
      public name: string,
      public model: string,
      public year: number
    ) {}

    getCarAge() {
      const recentYear = new Date().getFullYear();
      if (this.year < recentYear) {
        const age = recentYear - this.year;
        return `${age} (assuming current year is ${recentYear})`;
      }
      return `enter valid date`;
    }
  }
  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
}
