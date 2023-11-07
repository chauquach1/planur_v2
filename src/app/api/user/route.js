import connectMongoDB from "../../libs/mongo/mongodb";
import User from "../../models/user";
import { NextResponse } from "next/server";

export default async function userRouter(request) {
  try {
    await connectMongoDB();

    // Handle GET request
    if (request.method === "GET") {
      const { uuid } = request.query;

      const user = await User.findOne({ uuid });

      return NextResponse.json(user, { status: 200 });

    } 

    // Handle POST request
    else if (request.method === "POST") {
      const { firstname, lastname, email, password, uuid } =
        await request.json();

      const newUser = new User({ firstname, lastname, email, password, uuid });

      await newUser.save(); // Create a new user in MongoDB

      return NextResponse.json({ message: "User created." }, { status: 201 });
      
    }

    // Handle PUT request
    else if (request.method === "PUT") {
      const { uuid, firstname, lastname, email, password } =
        await request.json();

      const updatedUser = await User.findOneAndUpdate(
        { uuid },
        { firstname, lastname, email, password },
        { new: true }
      ); // Update user data in MongoDB
      
      return NextResponse.json(updatedUser, { status: 200 });

    }

    // Handle DELETE request
    else if (request.method === "DELETE") {
      const { uuid } = await request.json();

      await User.findOneAndDelete({ uuid }); // Delete user from MongoDB

      return NextResponse.json({ message: "User deleted." }, { status: 200 });

    }

    // Unsupported HTTP method
    else {
      return NextResponse.error("Unsupported method", { status: 405 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error("Server error", { status: 500 });
  }
}
