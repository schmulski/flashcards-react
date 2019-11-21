import styled from 'styled-components'

const FilterButton = styled.button`
  background: ${props => (props.active ? 'black' : 'lightgreen')};
  position: relative;
  border-radius: 6px;
  height: 50px;
  width: 100px;
  margin-left: 20px;
  color: ${props => (props.active ? 'lightgreen' : 'black')};
`

export default FilterButton
