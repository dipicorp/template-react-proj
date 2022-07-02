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

export interface FetchParam {
  fullUrl?: string
  pathUrl?: string
  method: APIMethod
  data?: any
  header?: Map<string, any>
}

export const useFetch = <T extends unknown>(
  param: FetchParam
) => {
  interface ResultType {
    loading: boolean,
    data: T | null,
    errMsg: string | null
  }
  const { fullUrl, pathUrl, method, data, header } = param
  let isCurrent = useRef(true)
  let [state, setState] = useState<ResultType>({ loading: true, data: null, errMsg: null })

  if (fullUrl == undefined && pathUrl == undefined) {
    setState({
      loading: false,
      data: null,
      errMsg: "Url is missing, try implement fullUrl or pathUrl"
    });
  }

  useEffect(() => {
    return () => {
      isCurrent.current = false
    }
  }, [])

  useEffect(() => {
    const _fullUrl = fullUrl ?? APIUrl.withPath(pathUrl!)
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