import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from ".";

// Using the AppRouter generic, now the frontend knows the type of the backend. No actual data is transfered, just the type of AppRouter, which will get removed at build time. This is how we achieve full stack type safety between front and back end.

export const trpc = createTRPCReact<AppRouter>({});
// Creates a tRPC client using the createTRPCReact function, which allows the frontend to communicate with the backend AP
// The AppRouter type is passed to ensure type safety.
