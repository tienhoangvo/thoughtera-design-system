import { ReactElement, useRef } from 'react'
import './App.css'
import Button, { ButtonProps } from './components/Button'
import Table from './components/Table'
import TBody from './components/Table/TBody'
import TBodyCell from './components/Table/TBodyCell'
import TCaption from './components/Table/TCaption'
import THead from './components/Table/THead'
import THeaderCell from './components/Table/THeaderCell'
import TRow from './components/Table/TRow'

function App() {
  const ref = useRef(null)

  return (
    <div className="App">
      <Table>
        <TCaption>Thoughtera components</TCaption>
        <THead>
          <TRow>
            <THeaderCell>Component</THeaderCell>
            <THeaderCell>Variant</THeaderCell>
            <THeaderCell>UI</THeaderCell>
          </TRow>
          {/* <TRow>
            <THeaderCell>Name</THeaderCell>
            <THeaderCell>UI</THeaderCell>
            <THeaderCell>Variants</THeaderCell>
          </TRow> */}
        </THead>
        <TBody>
          {
            components.map((c) => (
              <>
              {c.variants.map((variant, index, list) => (
                <TRow>
                  {index === 0 && <THeaderCell rowSpan={list.length}>{c.name}</THeaderCell>}
                  <TBodyCell>
                    {variant}
                  </TBodyCell>
                  <TBodyCell>
                    {c.renderComponent({ variant, children: variant })}
                  </TBodyCell>
              </TRow>
              ))}
              </>
            ))
          }
        </TBody>
      </Table>
    </div>
  )
}

type ComponentType = {
  name: string,
  variants: ButtonProps['variant'][],
  renderComponent: (props:any) => ReactElement,
}

const components: ComponentType[] = [
  {
    name: 'Button',
    variants: ['filled', 'outlined', 'text', 'filled-tonal', 'elevated'],
    renderComponent: (props: ButtonProps) => <Button {...props}>{props.children}</Button>
  }
]

export default App
