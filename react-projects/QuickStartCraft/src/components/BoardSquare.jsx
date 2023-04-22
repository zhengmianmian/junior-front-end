import Square from './Square'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../constant/Constants'
import PropTypes from 'prop-types'
export default function BoardSquare(props) {
    const black = (props.x + props.y) % 2 === 1
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.KNIGHT,
      drop: () => props.moveKnight(props.x, props.y),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }), [props.x, props.y])
  return (
        <div
            ref={drop}
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
            }}
        >
            <Square black={black}>{props.children}</Square>
                {isOver && (
                    <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                    />
                )}
        </div>)
}
BoardSquare.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    moveKnight: PropTypes.func,
    children:PropTypes.node
}