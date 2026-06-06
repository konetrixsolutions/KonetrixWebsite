import dns from "dns";
import mongoose from "mongoose";

dns.setDefaultResultOrder("ipv4first");
const MONGODB_URI = process.env.MONGODB_URI;
// console.log("MONGODB_URI:", process.env.MONGODB_URI);
if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

declare global {
  var mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = global.mongooseConnection || {
  conn: null,
  promise: null,
};

global.mongooseConnection = cached;

export async function connectDB() {
    // console.log("Mongo URI:", process.env.MONGODB_URI);
// console.log("Connecting to MongoDB...");
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI!);
  }

  cached.conn = await cached.promise;

  return cached.conn;
}