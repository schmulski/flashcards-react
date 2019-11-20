import styled from 'styled-components'

const FilterButton = styled.button`
  background: ${props => (props.active ? 'lightgreen' : 'black')};
  position: relative;
  left: 10px;
  border-radius: 6px;
  height: 50px;
  width: 100px;
  margin: 10px;
`

export default FilterButton
