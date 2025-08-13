import { retry } from "@reduxjs/toolkit/query";
import getServerUrl from "../utils/getServerUrls";

export async function TestTokenExpiry() {
  try {
    const response = await fetch(
      `${getServerUrl("B")}/api/auth/checktoken`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        }),
      }
    );
    const parseResponse = await response.json()
    return parseResponse.message;
  } catch (error) {
    console.log("Error at Testing Token : " + error.message);
  }
}
