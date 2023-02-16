import { useQuery } from '@apollo/client'
import { useReducer, useEffect } from 'react'

const RECORDS_PER_FETCH = 20

const reducer = (state, {type, payload}) => {
    
    switch(type) {
        case 'LOAD_MORE':            
            return {
                data: [...state.data, ...payload['getUsers']]
            }

        default:
            return {
                data: [...state.data]
            }
    }

}

const useInfiniteScroll = (query) => {

    const [state, dispatch] = useReducer(reducer, {
        data: []
    })

    const {data, refetch, error, loading} = useQuery(query, {
        variables: {
            pagination: {
                offset: 0,
                limit: RECORDS_PER_FETCH
            }
        }
    })

    const loadMore = () => {
        refetch({
            pagination: {
                offset: state.data.length,
                limit: state.data.length + RECORDS_PER_FETCH
            }
        })
    }

    useEffect(() => {
        if(data) dispatch({type: 'LOAD_MORE', payload: data})
    }, [data])
    

    return {
        data: state.data,
        loadMore
    }

}

export default useInfiniteScroll