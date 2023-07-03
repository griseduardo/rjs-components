# <Tag / >

## Props

| props           | Type        | Description             | Required |
|-----------------|-------------|-------------------------|----------|
| text            | String      | tag text                | true     |
| type            | TagType     | tag type                | false    |
| textColor       | String      | tag text color          | false    |
| backgroundColor | String      | tag background color    | false    |
| format          | FormatType  | tag format              | false    |
| borderRadius    | String      | tag border radius       | false    |
| size            | SizeType    | tag size                | false    |
| padding         | String      | tag padding             | false    |

---------------------------------------------------------------------

TagType = "default" | "success" | "alert" | "error"

FormatType = "default" | "semiRounded" | "rounded"

SizeType = "small" | "medium" | "large"

---------------------------------------------------------------------

The type props provides predefined text color and background color for tag, but is possible customize with textColor and backgroundColor props.

The format props provides predefined formats for tag, but is possible customize with borderRadius props.

The size props provides predefined sizes for tag, but is possible customize with padding props.
