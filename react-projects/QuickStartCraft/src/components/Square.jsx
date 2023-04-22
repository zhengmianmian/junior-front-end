import PropTypes from 'prop-types'
function Square(props) {
    
    const fill = props.black ? 'black' : 'white'
    const stroke = props.black ? 'white' : 'black'
    return (
        <div style={{ 
            backgroundColor: fill, 
            color: stroke,
            width: '100%',
            height: '100%',
            textAlign: 'center'
            }}>
            {props.children}
        </div>
    );
}
Square.propTypes = {
    black: PropTypes.bool,
    children: PropTypes.node
}
export default Square;