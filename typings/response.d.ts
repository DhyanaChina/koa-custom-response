import * as Koa from 'koa'

declare module 'koa' {
  
  interface Context {
    ok: (data?: object | string) => void
    created: (data?: object | string) => void
    noContent: () => void
    serverError: (data?: object | string) => void
    notFound: (data?: object | string) => void
    forbidden: (data?: object | string) => void
    badRequest: (data?: object | string) => void
    catch: (err?: any | Error, data?: object | string) => void
    reply: (code: number, data?: object | string) => void
  }
  
}

declare function KoaCustomResponse(): Koa.Middleware
declare namespace KoaCustomResponse { }
export { KoaCustomResponse }
