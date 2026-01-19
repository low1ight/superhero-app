export type PaginatorType<T> = {
    pageCount: number;
    page: number;
    pageSize: number;
    totalCount: number;
    items: T[];
};