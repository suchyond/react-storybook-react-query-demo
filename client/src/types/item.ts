// TODO: Use some kind of sharing of interfaces between server and client,
// e.g. yarn workspaces or something like that
/**
 * Request body that are send from client to the server
 */
export interface ItemRequest {
    title: string;
    done?: boolean;
    finishedAt?: number;
    
}

/**
 * Delivered from the server to client
 */
export interface ItemResponse extends ItemRequest {
    id: number;
    /**
     * Number of milliseconds elapsed since midnight, January 1, 1970
     * Universal Coordinated Time (UTC)
     * e.g. 1666874866086
     */
    createdAt: number;
}