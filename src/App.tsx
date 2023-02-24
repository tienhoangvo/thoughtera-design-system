import { Fragment, ReactElement } from 'react'
import Badge from './components/Badge'
import Button, { type ButtonProps } from './components/Button'
import ElevatedButton from './components/ElevatedButton'
import FAB from './components/FAB'
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
            <THeaderCell>Component</THeaderCell>
            <THeaderCell>Variant</THeaderCell>
            <THeaderCell>UI</THeaderCell>
          </TRow>
          {/* <TRow>
            <THeaderCell>States</THeaderCell>
            <THeaderCell>Disabled</THeaderCell>
          </TRow> */}
        </THead>
        <TBody>
          {components.map((c) => (
            <Fragment key={c.name}>
              {c.variants.map((variant, index, list) => (
                <TRow key={`${c.name}-${variant}`}>
                  {index === 0 && <THeaderCell rowSpan={list.length}>{c.name}</THeaderCell>}
                  <TBodyCell>{variant}</TBodyCell>
                  <TBodyCell>
                    {c.renderComponent(variant, {})}
                  </TBodyCell>
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
      switch (variant) {
        case 'filled': {
          return (
            <List>
              <ListItem>
                <FilledButton {...props} children="filled" />
              </ListItem>
              <ListItem>
                <FilledButton icon={<Icon label='login'/>} {...props} children="filled"/>
              </ListItem>
              <ListItem>
                <FilledButton icon={<Icon label='login'/>} {...props} children="filled" disabled/>
              </ListItem>
            </List>
          )
        }

        case 'outlined': {
          return (
            <List>
              <ListItem>
                <OutlinedButton {...props} children="outlined" />
              </ListItem>
              <ListItem>
                <OutlinedButton icon={<Icon label='login'/>} {...props} children="outlined"/>
              </ListItem>
              <ListItem>
                <OutlinedButton icon={<Icon label='login'/>} {...props} children="outlined" disabled/>
              </ListItem>
            </List>
          )
        }

        case 'text': {
          return (
            <List>
              <ListItem>
                <TextButton {...props} children="text"/>
              </ListItem>
              <ListItem>
                <TextButton icon={<Icon label='login'/>} {...props} children="text"/>
              </ListItem>
              <ListItem>
                <TextButton icon={<Icon label='login'/>} {...props} disabled children="text"/>
              </ListItem>
            </List>
          )
        }

        case 'tonal': {
          return (
            <List>
              <ListItem>
                <TonalButton {...props} children="tonal"/>
              </ListItem>
              <ListItem>
                <TonalButton icon={<Icon label='login'/>} {...props} children="tonal"/>
              </ListItem>
              <ListItem>
                <TonalButton icon={<Icon label='login'/>} {...props} disabled children="tonal"/>
              </ListItem>
            </List>
          )
        }

        case 'elevated': {
          return (
            <List>
              <ListItem>
                <ElevatedButton {...props} children="elevated"/>
              </ListItem>
              <ListItem>
                <ElevatedButton icon={<Icon label='login'/>} {...props} children="elevated"/>
              </ListItem>
              <ListItem>
                <ElevatedButton icon={<Icon label='login'/>} {...props} disabled children="elevated"/>
              </ListItem>
            </List>
          )
        }
        default: {
          return <Button {...props} />
        }
      }
    },
  },

  {
    name: 'Badge',
    variants: ['small', 'large'],
    renderComponent: (variant, props) => {
      switch (variant) {
        case 'large': {
          return (
            <List>
              <ListItem>
                <Badge variant={variant} {...props} label="1">
                  <Icon label="chat" />
                </Badge>
              </ListItem>
              <ListItem>
                <Badge variant={variant} {...props} label="99">
                  <Icon label="chat" />
                </Badge>
              </ListItem>
              <ListItem>
                <Badge variant={variant} {...props} label="999+">
                  <Icon label="chat" />
                </Badge>
              </ListItem>
              <ListItem>
                <Badge variant={variant} {...props} label="999+" />
              </ListItem>
            </List>
          )
        }

        default: {
          return (
            <List>
              <ListItem>
                <Badge variant={variant} {...props}>
                  <Icon label="chat" />
                </Badge>
              </ListItem>
            </List>
            
          )
        }
      }
    },
  },

  {
    name: 'FAB',
    variants: ['small', 'default', 'large'],
    renderComponent: (variant, props) => {
      switch(variant) {

        case 'large': {
          return (
            <List>
              <ListItem>
                <FAB size="large" color="primary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="large" color="secondary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="large" color="tertiary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="large" color="surface" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
            </List>
            
          )
        }

        case 'small': {
          return (
            <List>
              <ListItem>
                <FAB size="small" color="primary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="small" color="secondary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="small" color="tertiary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB size="small" color="surface" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
            </List>
          )
        }
        default: {
          return (
            <List>
              <ListItem>
                <FAB color="primary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB color="secondary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB color="tertiary" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
              <ListItem>
                <FAB color="surface" {...props} icon={<Icon label='edit'/>} />
              </ListItem>
            </List>
          )
        }
      }
    }
  }
]

export default App
