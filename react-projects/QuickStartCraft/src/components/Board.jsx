import Knight from "./Knight";
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import PropTypes from 'prop-types'
import BoardSquare from "./BoardSquare";
function Board(props) {
    function renderPiece(x, y, [knightX, knightY]) {
        if (x === knightX && y === knightY) {
          return <Knight />
        }
    }
    function renderSquare(i, knightPosition) {
        const x = i % 8
        const y = Math.floor(i / 8)
        return (
          <div key={i} style={{ width: '12.5%', height: '12.5%' }} onClick={() => handleSquareClick(x, y)}>
            <BoardSquare x={x} y={y} moveKnight={props.handleMove}>
                {renderPiece(x, y, knightPosition)}
            </BoardSquare>
          </div>
        )
    }
    function handleSquareClick(toX, toY) {
        props.handleMove(toX, toY)
    }
    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, props.knightPosition))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexWrap: 'wrap'
              }}
            >
                {squares}
            </div>
        </DndProvider>
        
    )
}
Board.propTypes = {
    knightPosition: PropTypes.array,
    handleMove: PropTypes.func
}
export default Board;