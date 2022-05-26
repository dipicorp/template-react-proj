export type APIMethod = "GET" | "POST" | "PUT" | "DELETE"
export const jsonFetch = async <T extends unknown>(
  url: string,
  method: APIMethod,
  data: any,
  header: Record<string, string> | undefined = {}
): Promise<T | null> => {
  let trueUrl = url + ((method === "GET" && data != undefined && data != null) ?
    `?${new URLSearchParams(data).toString()}` :
    '')
  if (process.env.NODE_ENV !== "production") {
    console.log(`----- Calling ${method} on ${trueUrl}`)
  }
  let response = await fetch(trueUrl, {
    method: method,
    headers: {
      "Accept": "applcation/json",
      "Content-Type": "application/json",
      "Connection": "keep-alive",
      ...header
    },
    mode: "cors",
    body: method !== "GET" ? JSON.stringify(data) : undefined,
    credentials: 'same-origin'
  })
  if (process.env.NODE_ENV !== "production") {
    let json = await response.json()
    console.log(`----- Response ${method} on ${trueUrl}`)
    console.log(JSON.stringify(json))
    return json
  } else {
    return response.json()
  }
}