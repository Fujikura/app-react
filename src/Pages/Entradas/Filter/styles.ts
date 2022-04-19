
import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`

export const Input = styled.input.attrs({
	type: 'text'
})`
	width: 100%;
	border-radius: 6px;
	padding: 10px 6px;
	border: 1px solid #ccc;
`