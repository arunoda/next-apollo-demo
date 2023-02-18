import { DocumentNode, useQuery } from '@apollo/client'
import { useReducer, useEffect } from 'react'

const RECORDS_PER_FETCH = 20

interface TInfinitScrollParams {
    query: DocumentNode,
    field: string
}

/**
 * The reducer for the state managed by the hook. Currently, it only has a LOAD_MORE action.
 * 
 * @param state 
 * @param {type: string, payload: T} 
 * @returns 
 */
const reducer = (state, {type, payload}) => {
    
    switch(type) {

        //append the new records to the existing records
        case 'LOAD_MORE':            
            return {
                data: [...state.data, ...payload]
            }

        default:
            return {
                data: [...state.data]
            }
    }

}

/**
 * A very reusable hook that takes that abstracts the complexity of refetching that data, and adding it to the previous data. This can be used not only for Users component but for any other page where infinite scrolling is desired.
 * @param query 
 * @returns 
 */
const useInfiniteScroll = <T extends object>({
    query,
    field
}: TInfinitScrollParams)=> {

    // To manage the state of the caller component.
    const [state, dispatch] = useReducer(reducer, {
        data: []
    })

    const {data, refetch, error, loading} = useQuery<T>(query, {
        variables: {
            pagination: {
                offset: 0,
                limit: RECORDS_PER_FETCH
            }
        }
    })

    /**
     * Used to load next chunk of the data. It can be triggered on the click of a button or even if the user scrolls to the bottom.
     */
    const loadMore = () => {

        //use the existing query and send new veriables to it.
        refetch({
            pagination: {
                offset: state.data.length,
                limit: RECORDS_PER_FETCH
            }
        })
    }

    /**
     * Whenever data changes (or new data arrives from the backend), this makes sure that the data is appended to the existing list using 'LOAD_MORE' dispatch event.
     */
    useEffect(() => {
        if(data) dispatch({type: 'LOAD_MORE', payload: data[field]})
    }, [data])
    
    return {
        data: state.data as Array<T>,
        loadMore,
        loading,
        error
    }

}

export default useInfiniteScroll