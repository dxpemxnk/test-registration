// import React from "react";
import { useAppSelector } from "@/shared/hooks/rtkHooks";

export function HomePage() {
  const { user, loading } = useAppSelector((state) => state.user);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Email: {user.email}</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
}
