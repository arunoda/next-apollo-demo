import {fireEvent, render} from '@testing-library/react'
import Grid from '../components/Grid'

test('loadMore to have been called', () => {

    const callback = jest.fn(() => undefined)

    const { getByRole } = render(<Grid loadMore={callback} items={[]} loading={false} getGridItem={() => <div/>}/>)
    
    fireEvent.click(getByRole('button'))

    expect(callback).toHaveBeenCalledTimes(1)
})

test('if loading is true, Load More button should be disabled and loadMore event shouldn\'t fire', () => {

    const callback = jest.fn(() => undefined)

    const { getByRole } = render(<Grid loadMore={callback} items={[]} loading={true} getGridItem={() => <div/>}/>)
    
    const button = getByRole('button')
    fireEvent.click(getByRole('button'))

    expect(button).toBeDisabled()
    expect(callback).toHaveBeenCalledTimes(0)
})

test('For 3 items, 3 grid items are rendered', () => {

    const callback = jest.fn(() => undefined)

    const { getAllByTestId } = render(<Grid loadMore={callback} items={[1, 2, 3]} loading={true} getGridItem={(v) => <div key={v} data-testid="grid-item" />}/>)
    
    const gridItems = getAllByTestId('grid-item')

    expect(gridItems).toHaveLength(3)
})