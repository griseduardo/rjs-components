# <Button / >

## Props

| props           | Type        | Description             | Required |
|-----------------|-------------|-------------------------|----------|
| text            | String      | button text             | true     |
| textColor       | String      | button text color       | false    |
| backgroundColor | String      | button background color | false    |
| hoverColor      | String      | button hover color      | false    |
| format          | FormatType  | button format           | false    |
| borderRadius    | String      | button border radius    | false    |
| size            | SizeType    | button size             | false    |
| padding         | String      | button padding          | false    |
| disabled        | Boolean     | button disabled         | false    |
| onClick         | OnClickType | button onClick          | false    |

---------------------------------------------------------------------

FormatType = "default" | "semiRounded" | "rounded"

SizeType = "small" | "medium" | "large"

OnClickType = MouseEventHandler< HTMLButtonElement >

---------------------------------------------------------------------
The format props provides predefined formats for button, but is possible customize with borderRadius props.

The size props provides predefined sizes for button, but is possible customize with padding props.
