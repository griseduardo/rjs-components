# <Tag / >

## Props

| props           | Type       | Description                 |
|-----------------|------------|-----------------------------|
| text            | String     | tag text                    |
| type            | TagType    | tag type                    |
| textColor       | String     | tag custom text color       |
| backgroundColor | String     | tag custom background color |
| format          | FormatType | tag predefined format       |
| borderRadius    | String     | tag custom border radius    |
| size            | SizeType   | tag predefined size         |
| padding         | String     | tag custom padding          |

--------------------------------------------------------------

TagType = "default" | "success" | "alert" | "error"

FormatType = "default" | "semiRounded" | "rounded"

SizeType = "small" | "medium" | "large"

--------------------------------------------------------------

The type props provides predefined text color and background color for tag, but is possible customize with textColor and backgroundColor props.

The format props provides predefined formats for tag, but is possible customize with borderRadius props.

The size props provides predefined sizes for tag, but is possible customize with padding props.
