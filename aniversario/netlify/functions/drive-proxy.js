export async function handler(event) {
  const { id } = event.queryStringParameters;
  const driveUrl = `https://drive.google.com/uc?export=download&id=${id}`;

  try {
    const response = await fetch(driveUrl);

    // Log para ver qué devuelve Drive
    const contentType = response.headers.get("content-type");
    console.log("Tipo recibido:", contentType);

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: `Error al obtener archivo de Drive: ${response.statusText}`
      };
    }

    // Si no es imagen, devolvemos error claro
    if (!contentType.startsWith("image/")) {
      const text = await response.text();
      console.log("Respuesta HTML:", text.slice(0, 200)); // muestra primeros 200 chars
      return {
        statusCode: 500,
        body: "Drive devolvió HTML en vez de imagen. Verifica permisos."
      };
    }

    const buffer = await response.arrayBuffer();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": contentType,
        "Access-Control-Allow-Origin": "*"
      },
      body: Buffer.from(buffer).toString("base64"),
      isBase64Encoded: true
    };
  } catch (err) {
    console.error("Error interno:", err);
    return {
      statusCode: 500,
      body: "Error interno en proxy"
    };
  }
}
