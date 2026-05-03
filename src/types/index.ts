export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
}

export interface ApiResponse<T> {
  data: T
  message?: string
  success: boolean
}

export interface ApiError {
  message: string
  statusCode: number
  errors?: Record<string, string[]>
}

type PageProps<
  TParams extends Record<string, string> = Record<string, string>,
  TSearchParams extends Record<
    string,
    string | string[] | undefined
  > = Record<string, string | string[] | undefined>,
> = {
  params: Promise<TParams>
  searchParams: Promise<TSearchParams>
}

export type { PageProps }

export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface NavItem {
  label: string
  href: string
  icon?: React.ComponentType<{ className?: string }>
  badge?: string
  isExternal?: boolean
}
