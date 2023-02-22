import { Fragment, ReactElement } from 'react'
import Button, { type ButtonProps } from './components/Button'
import ElevatedButton from './components/ElevatedButton'
import FilledButton from './components/FilledButton'
import Icon from './components/Icon'
import List from './components/List'
import ListItem from './components/List/ListItem'
import OutlinedButton from './components/OutlinedButton'
import Table from './components/Table'
import TBody from './components/Table/TBody'
import TBodyCell from './components/Table/TBodyCell'
import TCaption from './components/Table/TCaption'
import THead from './components/Table/THead'
import THeaderCell from './components/Table/THeaderCell'
import TRow from './components/Table/TRow'
import TextButton from './components/TextButton'
import TonalButton from './components/TonalButton'

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
                    <List>
                      <ListItem>{c.renderComponent(variant, { children: variant })}</ListItem>
                      <ListItem>{c.renderComponent(variant, { children: variant, icon: <Icon label='login'/> })}</ListItem>
                    </List>
                  </TBodyCell>
                  <TBodyCell>{c.renderComponent(variant, { children: variant, disabled: true })}</TBodyCell>
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
  variants: string[]
  renderComponent: (variant: string, props: any) => ReactElement
}

const components: ComponentType[] = [
  {
    name: 'Button',
    variants: ['filled', 'outlined', 'text', 'tonal', 'elevated'],
    renderComponent: (variant: string, props: ButtonProps) => {
      switch(variant) {
        case 'filled': {
          return <FilledButton {...props} />
        }

        case 'outlined': {
          return <OutlinedButton {...props} />
        }

        case 'text': {
          return <TextButton {...props}/>
        }

        case 'tonal': {
          return <TonalButton {...props}/>
        }

        case 'elevated': {
          return <ElevatedButton {...props}/>
        }
        default: {
          return <Button {...props} />
        }
      }
    },
  },
]

export default App
