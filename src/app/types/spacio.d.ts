declare namespace Spacio {
  export namespace Common {
    export interface ResponseBody<
        T extends Primitive | object = unknown,
        Status = 'OK' | 'ERROR',
        Result = Status extends 'OK' ? T : never
      > {
      status: Status
      message?: string
      trace?: any
      result?: Result
    }

    export type Locale = 'es-CL' | 'en-US'

    export interface CardProps {
      title: string
      description: string
      author: Record<string, string | undefined>
      miniature: string
      // cardType: React.ReactElement
      createdAt: Date | number | string
      updatedAt: Date | number | string
    }

    export type ContentType = 'post' | 'course' | 'file' | 'test'

    export interface Content {
      id: string
      title: string
      description: string
      author: Record<string, string | undefined>
      miniature: string
      contenttype: ContentType
      cardType: React.ReactElement
      createdAt: Date | number | string
      updatedAt: Date | number | string

    }
  }

  // export namespace Documentation {
  //   export type ContentType = 'post' | 'course' | 'file' | 'test'

  //   export interface Course<T = ContentType> {
  //     title: Record<AvailableLocales, string | undefined>
  //     contenttype: T
  //     description: Record<AvailableLocales, string | undefined>
  //   }
  // }
}
