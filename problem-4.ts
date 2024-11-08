{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (element: Circle | Rectangle): number => {
    let area = 0;

    if (element.shape === "circle") {
      area = 3.1416 * element.radius * element.radius;
    } else if (element.shape === "rectangle") {
      area = element.height * element.width;
    }

    return area;
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  console.log(circleArea);

  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });
  console.log(rectangleArea);
}
