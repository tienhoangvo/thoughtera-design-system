import { Fragment, ReactElement } from 'react'
import Button, { type ButtonProps } from './components/Button'
import Icon from './components/Icon'
import Table from './components/Table'
import TBody from './components/Table/TBody'
import TBodyCell from './components/Table/TBodyCell'
import TCaption from './components/Table/TCaption'
import THead from './components/Table/THead'
import THeaderCell from './components/Table/THeaderCell'
import TRow from './components/Table/TRow'

function App() {
  return (
    <div className="App">
      <Table>
        <TCaption>Thoughtera components</TCaption>
        <THead>
          <TRow>
            <THeaderCell rowSpan={2}>Component</THeaderCell>
            <THeaderCell rowSpan={2}>Variant</THeaderCell>
            <THeaderCell colSpan={2}>UI</THeaderCell>
          </TRow>
          <TRow>
            <THeaderCell>States</THeaderCell>
            <THeaderCell>Disabled</THeaderCell>
          </TRow>
        </THead>
        <TBody>
          {components.map((c) => (
            <Fragment key={c.name}>
              {c.variants.map((variant, index, list) => (
                <TRow key={`${c.name}-${variant}`}>
                  {index === 0 && <THeaderCell rowSpan={list.length}>{c.name}</THeaderCell>}
                  <TBodyCell>{variant}</TBodyCell>
                  <TBodyCell>
                    <ul>
                      <li>{c.renderComponent({ variant, children: variant })}</li>
                      <li>{c.renderComponent({ variant, children: variant, icon: <Icon label='login' size={24}/> })}</li>
                    </ul>
                  </TBodyCell>
                  <TBodyCell>{c.renderComponent({ variant, children: variant, disabled: true })}</TBodyCell>
                </TRow>
              ))}
            </Fragment>
          ))}
        </TBody>
      </Table>
    </div>
  )
}

type ComponentType = {
  name: string
  variants: ButtonProps['variant'][]
  renderComponent: (props: any) => ReactElement
}

const components: ComponentType[] = [
  {
    name: 'Button',
    variants: ['filled', 'outlined', 'text', 'filled-tonal', 'elevated'],
    renderComponent: (props: ButtonProps) => <Button {...props}>{props.children}</Button>,
  },
]

export default App
