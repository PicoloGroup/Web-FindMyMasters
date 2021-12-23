export const defaultQueryOptions = {
    cacheTime: 60 * 60 * 1000, // Delete cached values an hour after they are no longer in use
}

export const cachedQueryOptions = {
    ...defaultQueryOptions,
    // Keep fetched items as fresh for 10 minutes if we want them cached, 
    // so that they won't be requested from network multiple times
    staleTime: 10 * 60 * 1000, 
}