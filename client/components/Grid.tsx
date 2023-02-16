import React from 'react'

interface IGrid<T> {
  items: Array<T>
  loading: boolean;
  loadMore: () => Array<T>
  getGridItem: (item: T) => React.ReactNode
}

/**
 *  A very reusable Grid component that takes data, loadMore function and gives the opportunity to provide a custom Grid item.
 * @returns 
 */
const Grid = <T extends unknown>({items, loading, loadMore, getGridItem}: IGrid<T>) => {

  return (<main>
            <div className='container'>
              {items?.map(i => getGridItem(i))}
            </div>

            <button disabled={loading} onClick={loadMore}>Load More</button>
  </main>)
 
}
 
export default Grid
