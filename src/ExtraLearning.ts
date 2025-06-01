//1. Setting the type for elements accssed and stored in localstorage:

/*
import React, { useEffect } from "react";

type ButtonColor = "red" | "blue" | "green";

export default function Button() {
  useEffect(() => {
    const storedColor = localStorage.getItem("buttonColor");

    if (storedColor === "red" || storedColor === "blue" || storedColor === "green") {
      const previousButtonColor: ButtonColor = storedColor;
      console.log("Valid color:", previousButtonColor);
    } else {
      console.warn("Invalid or missing buttonColor in localStorage");
    }
  }, []);

  return <button>Click me!</button>;
}


This is a standard approach because it ensures type safety without blindly trusting external data like
 localStorage, which always returns a string | null. By checking if the stored value matches the expected 
 ButtonColor union ("red" | "blue" | "green"), it prevents runtime errors and invalid type assignments. 
 This protects the app from bugs due to corrupted, missing, or tampered data. Using a conditional check
  before asserting the type allows TypeScript to safely infer the correct type. It’s a best practice 
  in real-world apps where user-modifiable data sources must be validated before use.
 It ensures clean, predictable, and maintainable code.

*/

//2. Making arrya of objects readonly (we should only use it when we know that it won't be changed ever or modified later):

/*

const COLORS = [
  { id: 1, name: "red"  },
  { id: 2, name: "blue" },
     { id: 3, name: "yellow" },
        { id: 4, name: "green" }

] as const;



import React from "react";

const COLORS = [
  { id: 1, name: "red" },
  { id: 2, name: "blue" },
  { id: 3, name: "yellow" },
  { id: 4, name: "green" }
] as const;

type ColorItem = typeof COLORS[number]; //Here, typeof COLORS[number] means “give me the type of any element inside that COLORS tuple.

const ColorList: React.FC = () => {
  return (
    <ul>
      {COLORS.map((color: ColorItem) => (
        <li
          key={color.id}
          style={{ color: color.name, fontWeight: "bold", margin: "8px 0" }}
        >
          {color.name.charAt(0).toUpperCase() + color.name.slice(1)}
        </li>
      ))}
    </ul>
  );
};

export default ColorList;




3. Tupple in Typescript:


type Color = "red" | "blue" | "green" | "yellow" | "purple";

type ButtonProps = {
    backgroundColor: Color;
    textColor: Color;
    fontSize: number;
    pullSnaper: boolean;  // Fixed typo (removed extra quote)
    padding: [number, number, number, number]; // Tuple type
};


# Explanation of Tuple Types in TypeScript:


A tuple is a special array type that specifies:

i) Fixed length

ii) Specific types for each position




# Key Characteristics:

i) Fixed Size
The number of elements is predetermined.
Example: padding requires exactly 4 numbers.



ii) Position-Specific Types
Each position has a defined type.
Example: [number, number, number, number] means all 4 positions must be numbers.



iii) Strict Type Enforcement
You can't add/remove elements or change types per position:

const valid: [number, number, number, number] = [5, 10, 5, 10]; // ✅ OK
const invalid: [number, number, number, number] = [5, 10]; // ❌ Error: Missing elements
const invalid2: [number, number, number, number] = [5, "10", 5, 10]; // ❌ Error: string not allowed



Real-World Usage in Your Code
The padding tuple represents CSS padding values in order:
padding: [top, right, bottom, left];

Example:

// Represents: top=10px, right=20px, bottom=5px, left=15px
const buttonProps: ButtonProps = {
    backgroundColor: "blue",
    textColor: "white",
    fontSize: 16,
    pullSnaper: true,
    padding: [10, 20, 5, 15]
};








4. Typescript's record type:


Constructs an object type whose property keys are Keys and whose property values are Type.
 This utility can be used to map the properties of a type to another type.


Example
type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris;
 
const cats: Record<CatName, CatInfo>



Understanding TypeScript's Record Type in Simple Terms 🧾

The Record type creates an object type where:

   i) Keys are constrained to a specific set (like strings, numbers, or unions)

   ii) Values are all of the same type

Think of it as a dictionary where every entry has the same value format.


# Basic Syntax

Record<KeyType, ValueType>

Real-Life Analogy 🍎
Imagine a fruit color guide:

Keys = Fruit names ("apple" | "banana" | "orange")

Values = Colors (all string type)


type Fruit = "apple" | "banana" | "orange";
type Color = string;

const fruitColors: Record<Fruit, Color> = {
  apple: "red",
  banana: "yellow",
  orange: "orange",
};


Key Features 🔑

1. Key Safety
You must include every key from the union:

// Error: Missing "banana"!
const wrong: Record<Fruit, Color> = {
  apple: "green",
  orange: "orange",
};


2. Value Consistency
All values must match the specified type:

// Error: age should be number!
const people: Record<string, number> = {
  Alice: 30,
  Bob: "twenty-five",  // ❌
};


3. Dynamic Keys
Create types for unknown keys:

type UserRoles = Record<string, "admin" | "user">;

const roles: UserRoles = {
  user123: "admin",
  user456: "user",
  // user789: "guest"  // ❌ Not allowed
};





------------------------- common use cases 💡-----------------------------------


A. Configuration Objects:

type Theme = "light" | "dark";
type ColorPalette = Record<Theme, string>;

const colors: ColorPalette = {
  light: "#ffffff",
  dark: "#000000",
};


B. API Response Mappings

type UserIDs = "u1" | "u2" | "u3";
type UserData = { name: string; age: number };

const users: Record<UserIDs, UserData> = {
  u1: { name: "Alice", age: 30 },
  u2: { name: "Bob", age: 25 },
  u3: { name: "Charlie", age: 35 },
};


C. Enums with Fixed Values

enum Status {
  Pending = "pending",
  Success = "success",
  Failed = "failed",
}

type StatusMessages = Record<Status, string>;

const messages: StatusMessages = {
  [Status.Pending]: "Processing...",
  [Status.Success]: "Completed!",
  [Status.Failed]: "Error occurred",
};




*/
