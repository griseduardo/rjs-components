# <IconTag / >

## Props

| props            | Type              | Description                     |
|------------------|-------------------|---------------------------------|
| iconPlacement    | IconPlacementType | tag icon predefined position    |
| text             | String            | tag text                        |
| src              | String            | tag icon src                    |
| spacing          | String            | space between tag icon and text |
| type             | TagType           | tag type                        |
| backgroundColor  | String            | tag custom background color     |
| format           | FormatType        | tag predefined format           |
| borderRadius     | String            | tag custom border radius        |
| size             | SizeType          | tag predefined size             |
| padding          | String            | tag custom padding              |
| textColor        | String            | tag custom text color           |
| textWeight       | String            | tag predefined text font weight |
| textFontWeight   | String            | tag custom text font weight     |
| textFontSize     | String            | tag text font size              |
| textFontFamily   | String            | tag text font family            |
| iconFormat       | FormatType        | tag icon predefined format      |
| iconBorderRadius | String            | tag icon custom border radius   |
| iconHeight       | String            | tag icon height                 |
| iconWidth        | String            | tag icon width                  |

--------------------------------------------------------------------------

IconPlacementType = "right" | "left"

TagType = "default" | "success" | "alert" | "error"

FormatType = "default" | "semiRounded" | "rounded"

SizeType = "small" | "medium" | "large"

--------------------------------------------------------------

The type props provides predefined text color and background color for icon tag, but is possible customize with textColor and backgroundColor props.

The format props provides predefined formats for icon tag, but is possible customize with borderRadius props.

The size props provides predefined sizes for icon tag, but is possible customize with padding props.

The textWeight props provides predefined weights for icon tag text, but is possible customize with textFontWeight props.
