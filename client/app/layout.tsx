import React from "react";

export const metadata = {
  title: "Next Apollo App",
  description: "Next Apollo Employee App",
};

import "../styles/global.css";

import { ApolloWrapper } from "../lib/ApolloWrapper";

export default function RootLayout({ children }) {
  return (
    <ApolloWrapper>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ApolloWrapper>
  );
}
