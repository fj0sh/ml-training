// export async function GET(request: Request) {
//   try {
//     const response = await fetch("http://localhost:3000/todo");
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data = await response.json();
//     return new Response(JSON.stringify(data), {
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.error("Failed to fetch data from external source", error);
//     return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
