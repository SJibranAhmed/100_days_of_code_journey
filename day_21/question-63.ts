// Sheikh Jibran Ahmed  23 / april / 2024

/*Question 63: Shape Shifter: Write a program that can describe either a circle or
a rectangle using a special type alias,including properties unique to each shape. */

// A type alias lets you create a custom type. It's like a shortcut for describing more complex information,
//  such as the details of different shapes

// type alias for shapes
type Shapes = {
  kind: "circle" | "rectangular" | "triangle";
  radius?: number;
  height?: number;
  width?: number;
  base?: number;
};

// object in which we use typs alias
let triangle: Shapes = {
  kind: "triangle",
  height: 6,
  base: 4,
};

// I make a question using type alias in object
console.log(`Given a triangle with base = ${triangle.base} units and
height = ${triangle.height} units, calculate its area.`);
