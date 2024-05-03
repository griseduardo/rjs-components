---
to: src/components/base/<%=name%>/<%=name%>.test.tsx
---
import React from "react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import { render, screen } from "@testing-library/react";

import <%=name%> from "./<%=name%>";

describe("<<%=name%>/>", () => {
});
