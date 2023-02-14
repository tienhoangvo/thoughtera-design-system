import { useRef } from 'react'
import './App.css'
import Button from './components/Button'
import Icon from './components/Icon'
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
            <THeaderCell colSpan={2}>Components</THeaderCell>
            <THeaderCell>Variants</THeaderCell>
            <THeaderCell>States</THeaderCell>
          </TRow>
          <TRow>
            <THeaderCell>Name</THeaderCell>
            <THeaderCell>UI</THeaderCell>
            <THeaderCell>Variants</THeaderCell>
            <THeaderCell>States</THeaderCell>
          </TRow>
        </THead>
        <TBody>
          <TRow>
            <TBodyCell>Button</TBodyCell>
            <TBodyCell>
              <Button variant="filled">Button</Button>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="variant" value="filled" />
                  <span>Filled</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="outlined" />
                  <span>Outlined</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="text" />
                  <span>Text</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="filled-tonal" />
                  <span>Filled-tonal</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="elevated" />
                  <span>Elevated</span>
                </li>
              </ul>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="state" value="hover" />
                  <span>hover</span>
                </li>
                <li>
                  <input type="radio" name="state" value="focus" />
                  <span>focus</span>
                </li>
                <li>
                  <input type="radio" name="state" value="pressed" />
                  <span>pressed</span>
                </li>
                <li>
                  <input type="radio" name="state" value="disabled" />
                  <span>disabled</span>
                </li>
              </ul>
            </TBodyCell>
          </TRow>
          <TRow>
            <TBodyCell>Button</TBodyCell>
            <TBodyCell>
              <Button variant="outlined">Outlined</Button>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="variant" value="filled" />
                  <span>Filled</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="outlined" />
                  <span>Outlined</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="text" />
                  <span>Text</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="filled-tonal" />
                  <span>Filled-tonal</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="elevated" />
                  <span>Elevated</span>
                </li>
              </ul>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="state" value="hover" />
                  <span>hover</span>
                </li>
                <li>
                  <input type="radio" name="state" value="focus" />
                  <span>focus</span>
                </li>
                <li>
                  <input type="radio" name="state" value="pressed" />
                  <span>pressed</span>
                </li>
                <li>
                  <input type="radio" name="state" value="disabled" />
                  <span>disabled</span>
                </li>
              </ul>
            </TBodyCell>
          </TRow>
          <TRow>
            <TBodyCell>Button</TBodyCell>
            <TBodyCell>
              <Button variant="text">Text</Button>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="variant" value="filled" />
                  <span>Filled</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="outlined" />
                  <span>Outlined</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="text" />
                  <span>Text</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="filled-tonal" />
                  <span>Filled-tonal</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="elevated" />
                  <span>Elevated</span>
                </li>
              </ul>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="state" value="hover" />
                  <span>hover</span>
                </li>
                <li>
                  <input type="radio" name="state" value="focus" />
                  <span>focus</span>
                </li>
                <li>
                  <input type="radio" name="state" value="pressed" />
                  <span>pressed</span>
                </li>
                <li>
                  <input type="radio" name="state" value="disabled" />
                  <span>disabled</span>
                </li>
              </ul>
            </TBodyCell>
          </TRow>
          <TRow>
            <TBodyCell>Button</TBodyCell>
            <TBodyCell>
              <Button variant="filled-tonal">Filled-tonal</Button>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="variant" value="filled" />
                  <span>Filled</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="outlined" />
                  <span>Outlined</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="text" />
                  <span>Text</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="filled-tonal" />
                  <span>Filled-tonal</span>
                </li>
                <li>
                  <input type="radio" name="variant" value="elevated" />
                  <span>Elevated</span>
                </li>
              </ul>
            </TBodyCell>
            <TBodyCell>
              <ul>
                <li>
                  <input type="radio" name="state" value="hover" />
                  <span>hover</span>
                </li>
                <li>
                  <input type="radio" name="state" value="focus" />
                  <span>focus</span>
                </li>
                <li>
                  <input type="radio" name="state" value="pressed" />
                  <span>pressed</span>
                </li>
                <li>
                  <input type="radio" name="state" value="disabled" />
                  <span>disabled</span>
                </li>
              </ul>
            </TBodyCell>
          </TRow>
        </TBody>
      </Table>
    </div>
  )
}

export default App
