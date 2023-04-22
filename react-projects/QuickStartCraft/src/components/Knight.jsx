import { ItemTypes } from '../constant/Constants'
import { useDrag } from 'react-dnd'
function Knight() {
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
        collect: monitor => ({
          isDragging: !!monitor.isDragging(),
        }),
      }))
    return (
        <div ref={drag} style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 30,
            fontWeight: 'bold',
            cursor: 'move',
          }}> 
            ♘
        </div>
    );
}

export default Knight;