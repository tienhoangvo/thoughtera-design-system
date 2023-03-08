import { Fragment, ReactElement, ReactNode } from 'react'
import Badge from './components/Badge'
import Button, { type ButtonProps } from './components/Button'
import ElevatedButton from './components/ElevatedButton'
import ExtendedFAB from './components/ExtendedFAB/ExtendedFAB'
import FAB from './components/FAB'
import FilledButton from './components/FilledButton'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
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
                  <TBodyCell>{c.renderComponent(variant, {})}</TBodyCell>
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
  renderComponent: (variant: string, props: any) => ReactNode
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
                <FilledButton icon={<Icon label="login" />} {...props} children="filled" />
              </ListItem>
              <ListItem>
                <FilledButton icon={<Icon label="login" />} {...props} children="filled" disabled />
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
                <OutlinedButton icon={<Icon label="login" />} {...props} children="outlined" />
              </ListItem>
              <ListItem>
                <OutlinedButton
                  icon={<Icon label="login" />}
                  {...props}
                  children="outlined"
                  disabled
                />
              </ListItem>
            </List>
          )
        }

        case 'text': {
          return (
            <List>
              <ListItem>
                <TextButton {...props} children="text" />
              </ListItem>
              <ListItem>
                <TextButton icon={<Icon label="login" />} {...props} children="text" />
              </ListItem>
              <ListItem>
                <TextButton icon={<Icon label="login" />} {...props} disabled children="text" />
              </ListItem>
            </List>
          )
        }

        case 'tonal': {
          return (
            <List>
              <ListItem>
                <TonalButton {...props} children="tonal" />
              </ListItem>
              <ListItem>
                <TonalButton icon={<Icon label="login" />} {...props} children="tonal" />
              </ListItem>
              <ListItem>
                <TonalButton icon={<Icon label="login" />} {...props} disabled children="tonal" />
              </ListItem>
            </List>
          )
        }

        case 'elevated': {
          return (
            <List>
              <ListItem>
                <ElevatedButton {...props} children="elevated" />
              </ListItem>
              <ListItem>
                <ElevatedButton icon={<Icon label="login" />} {...props} children="elevated" />
              </ListItem>
              <ListItem>
                <ElevatedButton
                  icon={<Icon label="login" />}
                  {...props}
                  disabled
                  children="elevated"
                />
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
      switch (variant) {
        case 'large': {
          return (
            <List>
              <ListItem>
                <FAB
                  loweredElevation
                  size="large"
                  color="primary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="large"
                  color="secondary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="large"
                  color="tertiary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="large"
                  color="surface"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
            </List>
          )
        }

        case 'small': {
          return (
            <List>
              <ListItem>
                <FAB
                  loweredElevation
                  size="small"
                  color="primary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="small"
                  color="secondary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="small"
                  color="tertiary"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
              <ListItem>
                <FAB
                  loweredElevation
                  size="small"
                  color="surface"
                  {...props}
                  icon={<Icon label="edit" />}
                />
              </ListItem>
            </List>
          )
        }
        default: {
          return (
            <List>
              <ListItem>
                <FAB color="primary" {...props} icon={<Icon label="edit" />} />
              </ListItem>
              <ListItem>
                <FAB color="secondary" {...props} icon={<Icon label="edit" />} />
              </ListItem>
              <ListItem>
                <FAB color="tertiary" {...props} icon={<Icon label="edit" />} />
              </ListItem>
              <ListItem>
                <FAB color="surface" {...props} icon={<Icon label="edit" />} />
              </ListItem>
            </List>
          )
        }
      }
    },
  },

  {
    name: 'ExtendedFAB',
    variants: ['primary', 'surface', 'secondary', 'tertiary'],
    renderComponent: (variant, props) => {
      switch (variant) {
        case 'primary':
        case 'surface':
        case 'secondary':
        case 'tertiary': {
          return <ExtendedFAB color={variant} icon={<Icon label="edit" />} label="Compose" />
        }

        default: {
          return null
        }
      }
    },
  },

  {
    name: 'IconButton',
    variants: ['standard', 'outlined', 'filled', 'tonal'],
    renderComponent: (variant, props) => {
      switch (variant) {
        case 'standard':
        case 'outlined':
        case 'filled':
        case 'tonal': {
          return (
            <div>
              <p>No toggle</p>
              <List>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} />
                </ListItem>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} disabled />
                </ListItem>
              </List>
              <hr/>
              <p>Selected</p>
              <List>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} selected/>
                </ListItem>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} disabled selected/>
                </ListItem>
              </List>
              <hr/>
              <p>Unselected</p>
              <List>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} selected={false}/>
                </ListItem>
                <ListItem>
                  <IconButton icon={<Icon label="favorite" />} variant={variant} disabled selected={false} />
                </ListItem>
              </List>
            </div>
          )
        }
        default: {
          return null
        }
      }
    },
  },
]

export default App
