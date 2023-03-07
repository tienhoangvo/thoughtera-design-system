# Extended FABs
Extended FABs help people to take primary actions. They're wider than FABs to accomomdate a label text and larger area.

## Overview
Extended FABs are the most visually prominent button.

### Takeaways
- Extended FABs are the most prominent type of button.
- Use an extended FAB to provide percistent access to a primary action above long-scroll surface content.
- Because it has room for both a text label and an icon, the extended FABs can be more effective when an icon alone might be too ambiguous

## Specs
### Color
Color values are implemented through design tokens.
For design, this means working with color values that correspond with tokens. For implementation, a color value will be a token that references a value.

| Element | Design attribute | Role | Token |
| ------- | ---------------- | ---- | ----- |
| Container | Color | Primary container | --md-sys-color-primary-container |
| Container | Shadow color | Shadow | --md-sys-color-shadow |
| Label text | Color | On primary container | --md-sys-primary-container |
| Icon | Color | On primary container | --md-sys-primary-container |