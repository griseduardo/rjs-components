# <Button / >

## Props

| props           | Type        | Description                 |
|-----------------|-------------|-----------------------------|
| text            | String      | button text                 |
| textColor       | String      | button text color           |
| backgroundColor | String      | button background color     |
| hoverColor      | String      | button hover color          |
| format          | FormatType  | button predefined format    |
| borderRadius    | String      | button custom border radius |
| size            | SizeType    | button predefined size      |
| padding         | String      | button custom padding       |
| disabled        | Boolean     | button disabled             |
| onClick         | OnClickType | button onClick              |

---------------------------------------------------------------

FormatType = "default" | "semiRounded" | "rounded"

SizeType = "small" | "medium" | "large"

OnClickType = MouseEventHandler< HTMLButtonElement >

---------------------------------------------------------------

The format props provides predefined formats for button, but is possible customize with borderRadius props.

The size props provides predefined sizes for button, but is possible customize with padding props.
