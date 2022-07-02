import { useEffect, useRef, useState } from "react"
import { APIMethod, jsonFetch } from "./api-callable"
export class APIUrl {
  static baseUrl = "https://google.com"
  static withPath(path: string): string {
    if (path.length === 0) return this.baseUrl
    if (path.includes("http", 0)) return path
    return this.baseUrl + (path[0] === "/" ? "" : "/") + path
  }
}
export const useFetch = <T extends unknown>(
  fullUrl?: string,
  pathUrl?: string, method: APIMethod, data: any = undefined,
) => {
  interface ResultType {
    loading: boolean,
    data: T,
    errMsg: string
  }
  let isCurrent = useRef(true)
  let [state, setState] = useState<ResultType>({ loading: true, data: null, errMsg: null })

  if (fullUrl == null && pathUrl == null) {
    setState({
      errMsg: "Url is missing, try implement fullUrl or pathUrl"
    });
  }

  useEffect(() => {
    return () => {
      isCurrent.current = false
    }
  }, [])

  useEffect(() => {
    const _fullUrl = fullUrl ?? APIUrl.withPath(pathUrl)
    jsonFetch<T>(_fullUrl, method, data)
      .then(json => {
        if (isCurrent.current) {
          setState({
            loading: false,
            data: json,
            errMsg: null
          })
        }
      })
      .catch(err => {
        if (isCurrent.current) {
          setState({
            loading: false,
            data: null,
            errMsg: err
          })
        }
      })
  }, [method, pathUrl, JSON.stringify(data)])
  return state
}