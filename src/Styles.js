export const gameStyle = {
  display: 'grid',
  gridTemplate: '0.5fr 1fr 1fr 1fr 1fr / 0.8fr 1fr 1fr 1fr 1fr',
  gap: '15px',
  margin: '20px',
  backgroundColor: '#B8FFF9',
};
export const headerStyle = {
    gridColumn: '1 / 6',
    gridRow: '1',
    backgroundColor: '#0AA1DD',
    color: '#001D6E',
};
export const boardStyle = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridColumn: '2 / 3',
    gridRow: '2 / 3',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
}
export const historyStyle = {
    color: '#001D6E',
    margin: '0 10px',
    width: '200px',
    gridColumn: '3 / 4',
    gridRow: '2 / 3',
}

export const resetStyle = {
        gridRow: '3 / 4',
        gridColumn: '2 / 3',
        justifyContent: 'center',
        display: 'flex',
        alignSelf: 'flex-start',
}
export const squareStyle = {
    background: '#85F4FF',
    border: '2px solid #001D6E',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'

}
